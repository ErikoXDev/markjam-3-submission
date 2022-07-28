export default function loadAssets() {
    // Backgrounds
    loadSprite("bg-tile", "sprites/bg-tile.png");
    loadSprite("bg-tile2", "sprites/bg-tile2.png");
    loadSprite("bg-remember", "sprites/bg-remember.png");
    loadSprite("bg-charge", "sprites/bg-charge.png");
    loadSprite("bg-weight", "sprites/bg-weight.png");
    loadSprite("bg-collect", "sprites/bg-collect.png");
    
    // Minigame Splash Screens
    loadSprite("splash_remember", "sprites/splash/splash_remember.png");
    loadSprite("splash_charge", "sprites/splash/splash_charge.png");
    loadSprite("splash_collect", "sprites/splash/splash_collect.png");

    // Pots
    loadSprite("pot_strawberry", "sprites/pot/pot_strawberrys.png");
    loadSprite("pot_blueberry", "sprites/pot/pot_blueberrys.png");
    loadSprite("pot_peach", "sprites/pot/pot_peaches.png");
    loadSprite("pot_sugar", "sprites/pot/pot_sugar.png");
    loadSprite("pot_water", "sprites/pot/pot_water.png");

    // Fruits
    loadSprite("fruit_strawberry", "sprites/fruit/strawberry.png");
    loadSprite("fruit_blueberry", "sprites/fruit/blueberry.png");
    loadSprite("fruit_peach", "sprites/fruit/peach.png");
    loadSprite("fruit_sugar", "sprites/fruit/sugar.png");
    loadSprite("fruit_unknown", "sprites/fruit/unknown.png");

    // Bunch of fruits
    loadSprite("bunch_strawberry", "sprites/bunch/strawberry.png");
    loadSprite("bunch_blueberry", "sprites/bunch/blueberry.png");
    loadSprite("bunch_peach", "sprites/bunch/peach.png");
    loadSprite("bunch_sugar", "sprites/bunch/sugar.png");

    // Chef Mark
    loadSprite("chef_mark", "sprites/chef_mark.png");

    // Jar fillers
    loadSprite("jar_0", "sprites/jar/jar_0.png");
    loadSprite("jar_1", "sprites/jar/jar_1.png");
    loadSprite("jar_2", "sprites/jar/jar_2.png");
    loadSprite("jar_3", "sprites/jar/jar_3.png");
    loadSprite("jar_4", "sprites/jar/jar_4.png");

    // Misc
    loadSprite("heart", "sprites/heart.png");
    loadSprite("charger", "sprites/misc/charger.png");
    loadSprite("chargebox", "sprites/misc/chargebox.png");
    loadSprite("chargebar", "sprites/misc/chargebar.png");

    // Anims
    loadSprite("markstomp", "sprites/misc/markstomp.png", {
        sliceX: 23,
        sliceY: 1,
        anims: {
            "stomp": {
                from: 0,
                to: 22,
            }
        }
    });
    loadSprite("markremb", "sprites/misc/markremb.png", {
        sliceX: 24,
        sliceY: 1,
        anims: {
            "remb": {
                from: 0,
                to: 15,
            },
            "yes": {
                from: 16,
                to: 19,
            },
            "no": {
                from: 20,
                to: 23,
            }
        }
    });
    loadSprite("markbowl", "sprites/misc/bowlmark.png", {
        sliceX: 8,
        sliceY: 1,
        anims: {
            "0": {
                from: 0,
                to: 1,
            },
            "1": {
                from: 0,
                to: 1,
            },
            "2": {
                from: 2,
                to: 3,
            },
            "3": {
                from: 4,
                to: 5,
            },
            "4": {
                from: 6,
                to: 7,
            },
            "5": {
                from: 6,
                to: 7,
            }
        }
    })

    // UI

    loadSprite("btn_back", "sprites/ui/back.png");
    loadSprite("btn_credits", "sprites/ui/credits.png");
    loadSprite("btn_easy", "sprites/ui/easy.png");
    loadSprite("btn_hard", "sprites/ui/hard.png");
    loadSprite("btn_start", "sprites/ui/start.png");

    // Sound

    loadSound("coin", "sounds/coin.wav");
    loadSound("select", "sounds/select.wav");
    loadSound("stomp", "sounds/stomp.wav");

    // Col

    loadSprite("col_jars", "sprites/col/col_jars.png");
    loadSprite("col_pots", "sprites/col/col_pots.png");

}