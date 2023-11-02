class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    preload(){
        this.load.image('background_2', './assets/background_2.png');
        this.load.atlas('panda', './assets/panda.png', './assets/panda.json')

        this.load.image('ground', './assets/ground.png')

    }

    create(){
        //enable jumping for panda
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //background
        this.background = this.add.tileSprite(0, 0, 1280, 650, 'background_2').setScale(2)

        //creating invisible ground
        // this.ground = this.physics.add.staticGroup();
        // this.ground.create(game.config.width/2, game.config.height - 82, 'ground').

        this.ground = this.physics.add.sprite(game.config.width / 2, game.config.height / 1.5, 'ground').setScale(2).setOrigin(0.5, 0)

        //player model and animations
        this.player1 = this.physics.add.sprite(game.config.width / 5, game.config.height - this.game.config.height / 3, 'panda', 'panda 0.png').setScale(5).setOrigin(0.5)
        this.player1.body.setSize(15, 15).setOffset(16,16)

        this.textures.addSpriteSheetFromAtlas('frame1 0.png', {frameHeight: 32, frameWidth: 16, atlas: 'panda', frame: 'panda 0.png'})
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

        //physics for player
        this.player1.body.setGravityY(700)
        this.player1.body.setGravityX(0)

        this.ground.body.setCollideWorldBounds(true)
        // this.physics.add.collider(this.player1, this.ground)
    }


    update(){
        this.background.tilePositionX -= -1* 2;

        if (this.player1.body.touching.down){

            if (Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.player1.body.setVelocity(0, -1 * 350);
            }
        }

        this.physics.add.collider(this.player1, this.ground)

    }



}