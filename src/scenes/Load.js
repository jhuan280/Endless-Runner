class Load extends Phaser.Scene{
    constructor(){
        super("loadScene")
    }

    preload(){
        this.load.image('background_2', './assets/background_2.png');
        this.load.atlas('panda', './assets/panda.png', './assets/panda.json')

        this.load.image('ground', './assets/ground.png')

        //bamboo
        this.load.image('bamboo', './assets/bamboo.png')
        this.load.image('bamboo2', './assets/bamboo.png')
        this.load.image('bamboo3', './assets/bamboo.png')

    }

    create(){

        this.textures.addSpriteSheetFromAtlas('panda 0.png', {frameHeight: 32, frameWidth: 16, atlas: 'panda', frame: 'panda 0.png'})
        
        this.anims.create({
            key: "run",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNames(
                'panda', {
                    prefix: 'panda ',
                    start: 0,
                    end: 3,
                    suffix: '.png'  
            })
        })

        this.scene.start('menuScene')
    }

}