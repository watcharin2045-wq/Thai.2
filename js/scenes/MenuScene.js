
export default class MenuScene extends Phaser.Scene{

    constructor(){

        super("MenuScene");

    }

    create(){

        this.add.text(

            370,

            120,

            "🎮 ตู้คีบคำศัพท์",

            {

                fontSize:"52px",

                color:"#000",

                fontStyle:"bold"

            }

        );

        const btn=this.add.text(

            470,

            350,

            "▶ เริ่มเกม",

            {

                fontSize:"44px",

                backgroundColor:"#FFD54F",

                padding:20,

                color:"#000"

            }

        );

        btn.setInteractive();

        btn.on("pointerdown",()=>{

            this.scene.start("GameScene");

        });

    }

}
