var savex = 0;
var savey = 0;

export default function addTileBg() {
    let bg_tile__ = add([
        sprite("bg-tile"),
        pos(0,0),
        z(-99999)
    ])

    bg_tile__.pos.x = savex;
    bg_tile__.pos.y = savey;

    

    let factor = 80

    bg_tile__.onUpdate(() => {
        savex = bg_tile__.pos.x;
        savey = bg_tile__.pos.y;
        bg_tile__.move(-20,-20)
        if (bg_tile__.pos.x < -factor) {
            bg_tile__.pos.x = 0
            bg_tile__.pos.y = 0
        }
    })
}