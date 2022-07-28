import playStage from "../../components/audioManager";
import addTileBg from "../../components/tileBg";

export default function makeChargeGame() {
    scene("Chargegame", (difficulty) => {
        playStage(4)
        var fruits = ["strawberry", "blueberry", "peach","strawberry"];
        var gradualdiff = 1;
        var tries = 3;

        add([
            sprite("bg-charge"),
            pos(0,0),
            z(-99999)
        ])

        var chargebar = add([
            sprite("chargebar"),
            scale(10),
            pos(70+90, height()/2),
            origin("center"),
        ])

        var chargebox = add([
            sprite("fruit_"+fruits[Math.floor(Math.random()*fruits.length)]),
            scale(7),
            pos(70+90, height()/2),
            area(),
            origin("center"),
            "chargebox"
        ])

        var charger = add([
            sprite("charger"),
            scale(10),
            pos(70+90, 610),
            origin("center"),
            {direction: 1,
                speed: difficulty*2,
            moves:true},
            "charger"
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

        var counter = add([
            text("1/10"),
            scale(5.5),
            origin("right"),
            pos(width()/2+width()/4+(60*3), 160)
        ])

        var chef_mark = add([
            sprite("markstomp"),
            pos(width()/2+50, height()/2),
            scale(7),
            origin("center"),
        ])

        charger.onUpdate(() => {
            console.log(charger.pos.y)
            if(charger.pos.y <= 50 && charger.direction == -1) {
                charger.direction = 1
            } else if (charger.pos.y >= height()-50 && charger.direction == 1) {
                charger.direction = -1;
            }
            if(charger.moves) {
                charger.pos.y += charger.direction * charger.speed;
            }
            if (isKeyPressed("space")) {
                if (charger.pos.y >= chargebox.pos.y-30 && charger.pos.y <= chargebox.pos.y+30 && charger.moves) {
                    
                    gradualdiff++
                    play("select")
                    counter.use(text(String(gradualdiff)+"/10"))
                    charger.speed = difficulty*2*gradualdiff
                    chef_mark.play("stomp")
                    charger.moves = false
                    wait(2, () => {
                        play("stomp")
                        shake(3)
                    })
                    wait(2.7, () => {
                        charger.moves = true
                        chef_mark.use(sprite("markstomp"))
                        if (gradualdiff >= 10) {
                            go("Chargegame_end", gradualdiff, true, difficulty)
                        }
                        chargebox.pos.y = Math.random()*(height()-100)+50
                        chargebox.use(sprite("fruit_"+fruits[Math.floor(Math.random()*fruits.length)]))
                    })
                } else if (charger.moves){
                    play("stomp")
                    tries--
                    let heart = hearts.pop()
                    shake(5)
                    destroy(heart)
                    if (tries <= 0) {
                        go("Chargegame_end", gradualdiff, false, difficulty)
                    }
                }
            }
            
        })

        add([
            text("Press space when the charger touches the fruit"),
            pos(width()/2, height()-15),
            scale(2),
            origin("center")
        ])
        

        
    })
    scene("Chargegame_end", (score, win, difficulty) => {
        addTileBg()
        add([
            text("You" + ((win) ? " stomped the fruits!" : " didn't stomp enough!")),
            origin("center"),
            pos(width()/2, 60),
            scale(4)
        ])
        add([
            text("Your jam quality is " + score + "/10" + ((score == 10) ? "!" : ".\nYou can do better!")),
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