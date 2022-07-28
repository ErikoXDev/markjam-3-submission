import playStage from "../../components/audioManager"
import addTileBg from "../../components/tileBg"

export default function makeRememberGame() {
    scene("Remembergame", (difficulty) => {
        playStage(4)
        var ingredients = {
            1: {
                display: "strawberry",
                objs: []
            },
            2: {
                display: "blueberry",
                objs: []
            },
            3: {
                display: "peach",
                objs: []
            },
            4: {
                display: "sugar",
                objs: []
            },
            all: [],
            solved: []
        }

        add([
            sprite("bg-remember"),
            pos(0,0),
            z(-99999)
        ])

        var chef = add([
            sprite("markremb"),
            scale(6),
            pos(width()-200,height()/3),
            origin("center"),
            area(),
            "chef"
        ])
        // Add ingredients Strawberry, Blueberry, Peach, Sugar
        var strawberry = add([
            sprite("pot_strawberry"),
            scale(8),
            pos(width()/2-width()/3+50, height()/2+30),
            origin("center"),
            "strawberry",
            "ingredient",
            area(),
            {
                fruit: 1,
            }
        ])
        var blueberry = add([
            sprite("pot_blueberry"),
            scale(8),
            pos(width()/2-width()/8+20, height()/2+60),
            origin("center"),
            "blueberry",
            "ingredient",
            area(),
            {
                fruit: 2,
            }
        ])
        var peach = add([
            sprite("pot_peach"),
            scale(8),
            pos(width()/2+width()/8-25, height()/2+50),
            origin("center"),
            "peach",
            "ingredient",
            area(),
            {
                fruit: 3,
            }
        ])
        var sugar = add([
            sprite("pot_sugar"),
            scale(8),
            pos(width()/2+width()/3-40, height()/2+20),
            origin("center"),
            "sugar",
            "ingredient",
            area(),
            {
                fruit: 4,
            }
        ])

        var ingredientpots = [strawberry, blueberry, peach, sugar]

        var pot = add([
            sprite("pot_water"),
            scale(10),
            pos(width()/2, 100),
            origin("center"),
            "pot",
        ])

        // Add hearts
        var hearts = []
        for (let i = 0; i < 3; i++) {
            let heart = add([
                sprite("heart"),
                pos(width()/2+width()/4+(60*i), 75),
                scale(6)
            ])
            hearts.push(heart)
        }

        function makeList() {
            let ingredient = Math.floor(Math.random() * 4)+1
            


            let x,y;
            x = (ingredients.all.length+1) <= 10 ? (ingredients.all.length+1)*35 : (ingredients.all.length-9)*35
            y = (ingredients.all.length+1) <= 10 ? 55 : 90
            let ingrobj = add([
                sprite("fruit_unknown"),
                scale(3.2),
                pos(x,y),
                {
                    fruit: ingredient,
                }
            ])

            ingredients[ingredient].objs.push(ingrobj)
            ingredients.all.push(ingrobj)


            chef.moveTo(new vec2(ingredientpots[ingredient-1].pos.x, ingredientpots[ingredient-1].pos.y-110))

            chef.play("remb")
            play("select")

            if (ingredients.all.length < difficulty*10) {
                
                wait(1/difficulty+1, () => {
                    makeList()
                })
            }
            if (ingredients.all.length == difficulty*10) {
                
                wait(2, () => {
                    chef.moveTo(new vec2(width()-200,height()/3))
                    onClick("ingredient", (obj) => {
                        let fruitid = obj.fruit
                        if (ingredients[fruitid].objs.length > 0) {
                            let fruit = ingredients[fruitid].objs.shift()
                            fruit.use(sprite("fruit_"+ingredients[fruitid].display))
                            chef.play("yes")
                            play("coin")
                            ingredients.solved.push(fruit)
                            if (ingredients.solved.length == difficulty*10) {
                                go("Remembergame_end", ingredients.solved.length,true, difficulty)
                            }
            
                        } else {
                            let heart = hearts.pop()
                            chef.play("no")
                            play("stomp")
                            shake(5)
                            destroy(heart)
                            if (hearts.length <= 0) {
                                go("Remembergame_end", ingredients.solved.length, false, difficulty)
                            }
                        }
                    })
                })
            }
        }

        add([
            text("Click on a basket to add the fruit to the pot"),
            pos(width()/2, height()-15),
            scale(2),
            origin("center")
        ])

        wait(2, () => {
            makeList()
        })
        

       

        

    })
    scene("Remembergame_end", (score, win, difficulty) => {
        addTileBg()
        score /= difficulty
        add([
            text("You" + (win ? " made good jam!" : " made the chef angry!")),
            origin("center"),
            pos(width()/2, 60),
            scale(4)
        ])
        add([
            text("You added " + score + "/" + 10 + " ingredients"),
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