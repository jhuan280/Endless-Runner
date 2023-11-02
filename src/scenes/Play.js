class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    preload(){
        this.load.image('background_2', './assets/background_2.png');
        this.load.atlas('panda', './assets/panda.png', './assets/panda.json')

    }

    create(){
        //enable jumping for panda
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //physics for player
        // this.physics.world.gravity.y = 3000

        //background
        this.background = this.add.tileSprite(0, 0, 1280, 650, 'background_2').setScale(2)

        // //creating invisible ground
        this.ground = this.physics.add.sprite(0, (game.config.height / 4) * 3, game.config.width, game.config.height / 4).setOrigin(0,0);


        //player model and animations
        this.player1 = this.physics.add.sprite(game.config.width / 5, game.config.height - this.game.config.height / 3, 'panda', 'frame1 0.png').setScale(5).setOrigin(0.5)
        this.textures.addSpriteSheetFromAtlas('frame1 0.png', {frameHeight: 32, frameWidth: 16, atlas: 'panda', frame: 'frame1 0.png'})
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

        this.player1.anims.play('run');


    }


    update(){
        this.background.tilePositionX -= -1* 2;

        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.player1.body.setVelocity(0, -1 * 100);
        }

        this.physics.add.collider(this.player, this.ground)
    }



}