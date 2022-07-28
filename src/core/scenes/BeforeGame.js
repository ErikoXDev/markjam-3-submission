import playStage from "../components/audioManager"

export default function makeBeforeGame() {
    
    scene("before_game", (sceneid) => {
        playStage(3)
        var game_descs = {
            "Remembergame": {"title": "According to the recipe", "desc": "Chef Mark gives you the recipe\nfor his delicious jam.\nYou have to remember it\nand put the ingredients in the pot."},
            "Collectgame": {"title": "Fruit Madness", "desc": "It is time to harvest the fruits\nfrom Chef Mark's garden.\nBe quick and don't let the fruits\nfall to the ground."},
            "Chargegame": {"title": "Time to stomp", "desc": "Now it's time to stomp the fruits.\nCharge your jump\nto make delicious jam.\nNot enough stomping will\nmake the jam too chunky."}
        }
        let title = game_descs[sceneid].title
        let desc = game_descs[sceneid].desc
        add([
            sprite("bg-tile2"),
            pos(0,0)
        ])
        add([
            text(title),
            pos(width()/2, 50),
            scale(5),
            origin("center")
        ])

        add([
            text(desc),
            pos(width()/2, height()/2),
            origin("center"),
            scale(4)
        ])
        var easy = add([
            sprite("btn_easy"),
            pos(width()/2-width()/4, height()/1.1),
            scale(5),
            origin("center"),
            area(),
            "start_game",
            {difficulty: 1}
        ])
        var hard = add([
            sprite("btn_hard"),
            pos(width()/2+width()/4, height()/1.1),
            scale(5),
            origin("center"),
            area(),
            "start_game",
            {difficulty: 2}
        ])

        var back = add([
            sprite("btn_back"),
            pos(width()/2, height()/1.1),
            scale(5),
            origin("center"),
            area(),
            "back"
        ])

        onClick("back", () => {
            play("select")
            go("mainmenu");
        })
        onClick("start_game", (e) => {
            play("coin")
            go(sceneid, e.difficulty);
        })
    })
}