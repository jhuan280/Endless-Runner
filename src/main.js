/*
Name: Jackie Huang
Title: Endless Runner
Time: 30 hours
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
    scene: [Menu, Play, GameOver]
}


let game = new Phaser.Game(config);
let scoreConfig;
let highScore = 0;

//reserve keyboard vars
let keySPACE, keyR;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;