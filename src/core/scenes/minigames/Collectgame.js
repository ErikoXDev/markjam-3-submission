import playStage from "../../components/audioManager";
import addTileBg from "../../components/tileBg";

export default function makeCollectGame() {
    
    scene("Collectgame", (difficulty) => {
        playStage(4)
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }

        var fruits = ["strawberry", "blueberry", "peach","strawberry"];
        var fruitcount = 0;
        let stop = false

        let twait = 3/difficulty
        
        add([
            sprite("bg-collect"),
            pos(0,0)
        ])
        var hearts = []
        for (let i = 0; i < 3; i++) {
            let heart = add([
                sprite("heart"),
                pos(width()/2+width()/4+(60*i), 75),
                scale(6)
            ])
            hearts.push(heart)
        }

        var chefmark = add([
            sprite("markbowl"),
            pos(width()/2,height()-50),
            origin("bot"),
            scale(6),
            area({height: 30}),
            "chef"
        ])

        chefmark.onUpdate(() => {
            let mouse = mousePos()
            let _area = 300
            let bounds = (mouse.x < _area) ? _area : (mouse.x > width()-_area) ? width()-_area : mouse.x
            chefmark.pos.x = lerp(chefmark.pos.x, bounds, 0.2)
            

        })

        var counter = add([
            text("0/20"),
            scale(8),
            opacity(0.5),
            pos(width()/2, height()/2-70),
            origin("center")
        ])

        counter.onUpdate(()=>{
            counter.use(text(String(fruitcount+"/20")))
        })

        onCollide("fruit", "chef", (e) => {
            e.destroy()
            fruitcount++
            chefmark.play(String(Math.floor(fruitcount/4)))
            play("coin")
        })

        function addFruit() {
            
            if(!stop) {
                let fruit = add([
                    sprite("fruit_"+fruits[Math.floor(Math.random()*fruits.length)]),
                    pos(randomIntFromInterval(300, width()-300), 10),
                    {
                        grav: 1
                    },
                    scale(7),
                    "fruit",
                    area()
                ])

                fruit.onUpdate(() => {
                    fruit.pos.y += fruit.grav
                    fruit.grav *= 1.1
                    if(fruit.pos.y > height()+50) {
                        destroy(fruit)
                        shake(3)
                        play("stomp")
                        let heart = hearts.pop()
                        heart.destroy()
                        if (hearts.length <= 0) {
                            go("Collectgame_end", fruitcount, false, difficulty)
                        }
                    }
                    if (fruitcount >= 20) {
                        fruit.grav = 0
                        every("fruit", destroy)
                        go("Collectgame_end", fruitcount, true, difficulty)
                    }
                })

                twait *= 0.9
                twait = (twait < 0.5/difficulty) ? 0.5/difficulty : twait
                wait(twait, () => {
                    addFruit()
                })
            }
        }

        add([
            text("Use the mouse to move chef mark"),
            pos(width()/2, height()-15),
            scale(2),
            origin("center")
        ])
        wait(2, () => {
            addFruit()
        })
    })

    scene("Collectgame_end", (score, win, difficulty) => {
        addTileBg()
        add([
            text("You" + ((win) ? " collected enough!" : " didn't collect enough!")),
            origin("center"),
            pos(width()/2, 60),
            scale(4)
        ])
        add([
            text("You have " + score + "/20 fruits!"),
            origin("center"),
            pos(width()/2, height()/4),
            scale(4)
        ])

        add([
            sprite("btn_back"),
            origin("center"),
            pos(width()/2, height()/2+140),
            scale(4),
            area(),
            "back"
        ])

        onClick("back", () => {
            go("mainmenu")
        })
    })

}