class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    // preload(){
    //     this.load.image('background_2', './assets/background_2.png');
    //     this.load.atlas('panda', './assets/panda.png', './assets/panda.json')

    //     this.load.image('ground', './assets/ground.png')
    //     this.load.image('bamboo', './assets/bamboo.png')

    // }

    create(){
        //enable jumping for panda
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //background
        this.background = this.add.tileSprite(0, 0, 1280, 650, 'background_2').setScale(2)

        //creating invisible ground
        this.ground = this.physics.add.sprite(game.config.width / 2, game.config.height / 1.5, 'ground').setScale(2).setOrigin(0.5, 0)

        //bamboo obstacle 1
        this.bamboo = this.physics.add.sprite(game.config.width / 2, game.config.height - this.game.config.height / 2.7, 'bamboo').setScale(2).setOrigin(0.5)
        this.bamboo.body.setSize(10, 30).setOffset(15,15)
        this.bambooSpeed = this.bamboo.body.setVelocityX(-150)
        // this.moveSpeed = game.settings.bambooSpeed

        //bamboo obstacle 2
        this.bamboo2 = this.physics.add.sprite(game.config.width / 1.25, game.config.height - this.game.config.height / 2.7, 'bamboo').setScale(2).setOrigin(0.5)
        this.bamboo2.body.setSize(10, 30).setOffset(15,15)
        this.bambooSpeed2 = this.bamboo2.body.setVelocityX(-150)

        //bamboo obstacle 3
        this.bamboo3 = this.physics.add.sprite(game.config.width / 1, game.config.height - this.game.config.height / 2.7, 'bamboo').setScale(2).setOrigin(0.5)
        this.bamboo3.body.setSize(10, 30).setOffset(15,15)
        this.bambooSpeed3 = this.bamboo3.body.setVelocityX(-150)

        //sun 
        this.sun = this.add.sprite(game.config.width / 6.5, game.config.height - this.game.config.height / 1.1, 'sun').setScale(3).setOrigin(0.5)

        //bird
        this.bird = this.physics.add.sprite(game.config.width / 1.5, game.config.height - this.game.config.height / 2, 'bird', 'bird 0.png').setScale(5).setOrigin(0.5) 
        this.bird.body.setSize(10, 12).setOffset(17,16)
        this.birdSpeed = this.bird.body.setVelocityX(-150)

        //player model and animations
        this.player1 = this.physics.add.sprite(game.config.width / 5, game.config.height - this.game.config.height / 3, 'panda', 'panda 0.png').setScale(5).setOrigin(0.5)
        this.player1.body.setSize(10, 15).setOffset(20,16)

        // this.textures.addSpriteSheetFromAtlas('panda 0.png', {frameHeight: 32, frameWidth: 16, atlas: 'panda', frame: 'panda 0.png'})

        // this.anims.create({
        //     key: "run",
        //     frameRate: 5,
        //     repeat: -1,
        //     frames: this.anims.generateFrameNames(
        //         'panda', {
        //             prefix: 'panda ',
        //             start: 0,
        //             end: 3,
        //             suffix: '.png'  
        //     })
        // })

        this.player1.anims.play('run');
        this.bird.anims.play('run2');

        //physics for player
        this.player1.body.setGravityY(650)
        this.player1.body.setGravityX(0)

        this.ground.body.setCollideWorldBounds(true)
        // this.physics.add.collider(this.player1, this.ground)

        //time stuff
        timer = game.settings.gameTimer

        let timeConfig = {
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

        this.timerDisplay = this.add.text(game.config.width/2, borderUISize + borderPadding * 0.5, timer / 1000, timeConfig).setOrigin(0.5, 0)

        this.clock = this.time.addEvent({
            delay: 1000,
            callback: () => {
                timer += 1
                this.timerDisplay.text = timer
            },
            callbackScope:this,
            loop: true
        });

        this.clock = this.time.addEvent({
            delay: 15000,
            callback: () => {
                this.bambooSpeed = this.bamboo.body.setVelocityX(-300)
                this.bambooSpeed2 = this.bamboo2.body.setVelocityX(-300)
                this.bambooSpeed3 = this.bamboo3.body.setVelocityX(-300)
                this.birdSpeed = this.bird.body.setVelocityX(-300)
            },
            callbackScope:this,
            loop: true
        });

        // console.log(this.clock)

    
    }


    update(){

        this.background.tilePositionX -= -1* 2;

        //bamboo reset
        // this.x -= this.moveSpeed;

        if (this.bamboo.x <= 0){
            this.bamboo.x = game.config.width
        }

        if (this.bamboo2.x <= 0){
            this.bamboo2.x = game.config.width
        }

        if (this.bamboo3.x <= 0){
            this.bamboo3.x = game.config.width
        }

        
        let random = Phaser.Math.Between(0 + this.bird. height / 2, game.config.height / 2)
        //let random = Math.floor(Math.random() * (game.config.height / 2))

        if (this.bird.x <= 0){
            this.bird.x = game.config.width
            this.bird.y = random
        }

        // if (timer % 15 == 0){
        //     this.bambooSpeed = this.bamboo.body.setVelocityX(-500)
        //     this.bambooSpeed2 = this.bamboo2.body.setVelocityX(-500)
        //     this.bambooSpeed3 = this.bamboo3.body.setVelocityX(-500)
        // }

        if (this.player1.body.touching.down){
            if (Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.player1.body.setVelocity(0, -1 * 350);
            }
        }

        this.physics.add.collider(this.player1, this.ground)

        //player collides bamboo
        this.physics.add.collider(this.player1, this.bamboo, (player1,bamboo)=>{
            this.player1.body.setVelocity(0)

            if (timer > highScore){
                highScore = timer
            }

            this.scene.start('gameOverScene')
        })

        this.physics.add.collider(this.player1, this.bamboo2, (player1,bamboo2)=>{
            this.player1.body.setVelocity(0)

            if (timer > highScore){
                highScore = timer
            }

            this.scene.start('gameOverScene')
        })

        this.physics.add.collider(this.player1, this.bamboo3, (player1,bamboo3)=>{
            this.player1.body.setVelocity(0)

            if (timer > highScore){
                highScore = timer
            }

            this.scene.start('gameOverScene')
        })

        this.physics.add.collider(this.player1, this.bird, (player1,bird)=>{
            this.player1.body.setVelocity(0)

            if (timer > highScore){
                highScore = timer
            }

            this.scene.start('gameOverScene')
        })

    }

    // gameOver(){
    //     if (timer > this.highScore){
    //         this.highscore = timer
    //     }
    // }

}