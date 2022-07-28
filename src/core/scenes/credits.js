import playStage from "../components/audioManager"
import addTileBg from "../components/tileBg"

export default function makeCredits() {
    scene("credits", () => {
        playStage(3)
        addTileBg()
        add([
            text("Chef Mark's Credits"),
            pos(width()/2, 50),
            origin("center"),
            scale(5)
        ])

        var credit = add([
            text("Made by ErikoX for Mark Jam #3\nand Chef Mark"),
            pos(width()/2, height()/2),
            origin("center"),
            scale(3)
        ])

        var back = add([
            sprite("btn_back"),
            pos(width()/2, height()-75),
            scale(5),
            origin("center"),
            area(),
            "credits_back"
        ])

        onClick("credits_back", () => {
            go("mainmenu");
        }
        )
    }
    )
}