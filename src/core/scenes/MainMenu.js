import playStage from "../components/audioManager"
import addTileBg from "../components/tileBg"
import "./MiniGameSelect"

export default function makeMainMenu() {
    scene("mainmenu", () => {
        playStage(1)
        addTileBg()

        add([
            text("Chef Mark's Main Menu"),
            pos(width()/2, 50),
            origin("center"),
            scale(5)
        ])

        var chef = add([
            sprite("markbowl"),
            scale(7),
            pos(width()-200,height()/1.5),
            origin("center"),
        ])

        add([
            sprite("col_jars"),
            pos(200,height()/1.3),
            scale(7),
            origin("center"),
        ])

        add([
            sprite("col_pots"),
            pos(250,height()/2.4),
            scale(7),
            origin("center"),
        ])

        loop(0.63157, () => {
            chef.play("4")
        })

        var startg = add([
            sprite("btn_start"),
            pos(width()/2, height()/2),
            scale(5),
            origin("center"),
            area(),
            "mainmenu_start"
        ])

        var credits = add([
            sprite("btn_credits"),
            pos(width()/2, height()/2+120),
            scale(5),
            origin("center"),
            area(),
            "mainmenu_credits"
        ])

        onClick("mainmenu_start", () => {
            play("select")
            go("games");
        })
        onClick("mainmenu_credits", () => {
            go("credits");
        })
    })
}

