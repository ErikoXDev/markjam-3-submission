import playStage from "../components/audioManager"
import addTileBg from "../components/tileBg"

export default function makeMiniGameSelect() {
    
    scene("games", () => {

        playStage(2)
        var game_ids = {
            1: "Remembergame",
            2: "Collectgame",
            3: "Chargegame"
        }
        var texts = {
            2: "1. Collect fruits",
            1: "2. Cook the fruits",
            3: "3. Stomp the fruits"

        }
        addTileBg()
        add([
            text("Chef Mark's Jam Recipe"),
            pos(width()/2, 50),
            scale(5),
            origin("center")
        ])

        var hint = add([
            text(""),
            pos(width()/2, height()-50),
            scale(4),
            origin("center")
        ])
        var g1 = add([
            sprite("splash_remember"),
            scale(6),
            pos(width()/2, height()/2),
            origin("center"),
            "gamebutton",
            area(),
            {
                idb:1
            }
        ])
        var g2 = add([
            sprite("splash_collect"),
            scale(6),
            pos(width()/2-width()/3.2, height()/2),
            origin("center"),
            "gamebutton",
            area(),
            {
                idb:2
            }
        ])
        var g3 = add([
            sprite("splash_charge"),
            scale(6),
            pos(width()/2+width()/3.2, height()/2),
            origin("center"),
            "gamebutton",
            area(),
            {
                idb:3
            }
        ])

        onHover("gamebutton", (e) => {
            every("gamebutton", (e) => {
                e.scale = 6
            })
            e.scale = 6.5
            hint.use(text(texts[e.idb]))
        })

        onClick("gamebutton", (e) => {
            play("select")
            go("before_game", game_ids[e.idb])
        })
    })
}
