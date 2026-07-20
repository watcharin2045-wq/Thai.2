const config={

    type:Phaser.AUTO,

    width:1280,

    height:720,

    parent:"game",

    backgroundColor:"#9EDFFF",

    physics:{

        default:"matter",

        matter:{

            gravity:{
                y:1
            },

            debug:false

        }

    },

    scene:[

        BootScene,

        MenuScene,

        GameScene

    ]

}
