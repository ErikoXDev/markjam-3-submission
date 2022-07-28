import kaboom from "kaboom";
import makeBeforeGame from "./core/scenes/BeforeGame";
import makeMainMenu from "./core/scenes/MainMenu";
import makeChargeGame from "./core/scenes/minigames/Chargegame";
import makeRememberGame from "./core/scenes/minigames/Remembergame";
import makeMiniGameSelect from "./core/scenes/MiniGameSelect";
import startGame from "./core/gameManager";
import loadAssets from "./core/assets";
import makeCollectGame from "./core/scenes/minigames/Collectgame";
import makeCredits from "./core/scenes/credits";

import "./core/components/audioManager"

export default kaboom({
    width: 1180,
    height: 650,
    canvas: document.getElementById("game"),
    background: [0,0,0],
    font: "sinko",
    debug: true,
})

loadAssets()

makeMainMenu()
makeMiniGameSelect()
makeBeforeGame()
makeRememberGame()
makeChargeGame()
makeCollectGame()
makeCredits()

startGame()