
export default class GameScene extends Phaser.Scene{

    constructor(){

        super("GameScene");

    }

    create(){

        this.add.text(

            40,

            30,

            "⭐ 0",

            {

                fontSize:"32px",

                color:"#000"

            }

        );

        this.add.rectangle(

            640,

            350,

            720,

            520,

            0xffffff

        );

        this.add.text(

            470,

            650,

            "Version 3",

            {

                fontSize:"32px",

                color:"#1565c0"

            }

        );

    }

}
