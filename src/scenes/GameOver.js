class GameOver extends Phaser.Scene{
    constructor(){
        super('gameOverScene')
    }

    preload(){

    }

    create(){

        //display game over
        let gameOverConfig = {
            fontFamily: 'Courier New',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //game over text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Game Over', gameOverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press "R" to go back to menu', gameOverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3, 'You survived ' + timer + ' seconds', gameOverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.5, 'High Score: ' + highScore, gameOverConfig).setOrigin(0.5);

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        this.select = this.sound.add('select', {volume: 0.2})

    }


    update(){

        if (Phaser.Input.Keyboard.JustDown(keyR)){
            //console.log("why no work")
            this.select.play()
            this.scene.start('menuScene')

            // //start the game
            // game.settings = {
            //     bambooSpeed: 3
            // }


        }

    }

}