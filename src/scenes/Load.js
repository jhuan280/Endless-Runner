class Load extends Phaser.Scene{
    constructor(){
        super("loadScene")
    }

    preload(){
        this.load.image('background_2', './assets/background_2.png');
        this.load.atlas('panda', './assets/panda.png', './assets/panda.json')
        this.load.atlas('bird', './assets/bird.png', './assets/bird.json')

        //glow
        this.load.spritesheet('glow', './assets/glow.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 16})

        this.load.image('ground', './assets/ground.png')

        //bamboo
        this.load.image('bamboo', './assets/bamboo.png')
        this.load.image('bamboo2', './assets/bamboo.png')
        this.load.image('bamboo3', './assets/bamboo.png')
        this.load.image('sun', './assets/sun.png')
        // this.load.image('glow', './assets/glow.png')

        //bgm
        this.load.audio('bgm', './assets/bgm.mp3')

        //sound effects
        this.load.audio('jump', './assets/jump.mp3')
        this.load.audio('select', './assets/select.mp3')
        this.load.audio('speedUp', './assets/speedUp.mp3')
        this.load.audio('dead', './assets/dead.mp3')


    }

    create(){

        this.textures.addSpriteSheetFromAtlas('panda 0.png', {frameHeight: 32, frameWidth: 16, atlas: 'panda', frame: 'panda 0.png'})
        this.textures.addSpriteSheetFromAtlas('bird 0.png', {frameHeight: 32, frameWidth: 16, atlas: 'bird', frame: 'bird 0.png'})

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

        this.anims.create({
            key: "run2",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNames(
                'bird', {
                    prefix: 'bird ',
                    start: 0,
                    end: 5,
                    suffix: '.png'  
            })
        })

        this.anims.create({
            key: 'glow',
            frames: this.anims.generateFrameNumbers('glow', {start: 0, end: 4, first: 0}),
            frameRate: 30
        });



        this.scene.start('menuScene')
    }

}