/*
Name: Jackie Huang
Title: Panda Run (Endless Runner)
Time: 30 hours

Structure and Design (15 points) ----------------

Use multiple Scene classes (dictated by your game's style) (1) //done
Properly transition between Scenes and allow the player to restart w/out having to reload the page (1) //done
Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (1) //done
Have some form of player input/control appropriate to your game design (1) //done
Include one or more animated characters that use a texture atlas* (1) //done
Simulate scrolling with a tileSprite (or equivalent means) (1) //done
Implement proper collision detection (via Arcade Physics or a custom routine) (1) //done
Have looping background music* (1) //done
Use a minimum of four sound effects for key mechanics, UI, and/or significant events appropriate to your game design (1) //done
Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (1) //done
Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (1) //done
Be theoretically endless (1) //done
Be playable for at least 15 seconds for a new player of low to moderate skill (1) //done
Run without significant crashes or errors (1) //done
Include in-game credits for all roles, assets, music, etc. (1)

Total Points: 14

Creative Tilt Justification (2 points) -----------------

Technical (1):
From a technical standpoint, I incorporated a sense of randomness for the moderately increasing difficulty points in the game.



Visual (1): 


*/

let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 650,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scene: [Load, Menu, Play, GameOver, Credit]
}


let game = new Phaser.Game(config);
let scoreConfig;
let highScore = 0;
let timer;

//reserve keyboard vars
let keySPACE, keyRIGHT, keyLEFT, keyR;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;