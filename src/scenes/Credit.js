class Credit extends Phaser.Scene{
    constructor(){
        super('creditScene')
    }

    preload(){

    }

    create(){

        //credit config
        let creditConfig = {
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

        this.select = this.sound.add('select', {volume: 0.2})
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)

        let credit = this.add.text(this.game.config.width/2, this.game.config.height / 4, 
        'test',{

        })
        
        
        
        
        

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //console.log("why no work")
            // this.select.play()
            // this.select.play()
            // this.scene.start('creditScene')

            this.select.play()
            this.scene.start('menuScene')

        }

    }


}