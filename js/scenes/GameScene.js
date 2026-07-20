export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        // =========================
        // พื้นหลัง
        // =========================

        this.cameras.main.setBackgroundColor("#9EDFFF");

        // =========================
        // หัวข้อเกม
        // =========================

        this.add.text(
            40,
            20,
            "🎮 ตู้คีบคำศัพท์",
            {
                fontSize: "40px",
                fontStyle: "bold",
                color: "#000000"
            }
        );

        // =========================
        // คะแนน
        // =========================

        this.score = 0;

        this.scoreText = this.add.text(
            1080,
            20,
            "⭐ 0",
            {
                fontSize: "30px",
                color: "#000000"
            }
        );

        // =========================
        // ชีวิต
        // =========================

        this.add.text(
            1080,
            60,
            "❤️❤️❤️",
            {
                fontSize: "24px"
            }
        );

        // =========================
        // เงาตู้
        // =========================

        this.add.rectangle(
            648,
            366,
            730,
            530,
            0x777777,
            0.25
        );

        // =========================
        // ตัวตู้
        // =========================

        this.add.rectangle(
            640,
            360,
            720,
            520,
            0xffffff
        );

        // กระจก

        this.add.rectangle(
            640,
            325,
            680,
            430,
            0xdff7ff
        );

        // ฐานเครื่อง

        this.add.rectangle(
            640,
            580,
            720,
            80,
            0x666666
        );

        // =========================
        // ไฟ LED ด้านบน
        // =========================

        for(let i=0;i<18;i++){

            this.add.circle(
                300+i*38,
                100,
                6,
                0xffee00
            );

        }

        // ล่าง

        for(let i=0;i<18;i++){

            this.add.circle(
                300+i*38,
                620,
                6,
                0xff66aa
            );

        }

        // ซ้าย

        for(let i=0;i<12;i++){

            this.add.circle(
                300,
                145+i*38,
                6,
                0x66ff66
            );

        }

        // ขวา

        for(let i=0;i<12;i++){

            this.add.circle(
                980,
                145+i*38,
                6,
                0x66ccff
            );

        }

        // =========================
        // แขนคีบ
        // =========================

        this.rope=this.add.rectangle(
            640,
            140,
            4,
            120,
            0x333333
        );

        this.head=this.add.circle(
            640,
            200,
            18,
            0xdddddd
        );

        this.left=this.add.line(
            0,
            0,
            640,
            200,
            620,
            230,
            0x444444
        );

        this.right=this.add.line(
            0,
            0,
            640,
            200,
            660,
            230,
            0x444444
        );

        // =========================
        // ลูกบอล
        // =========================

        const colors=[
            0xffcc33,
            0xff6699,
            0x66ccff,
            0x66ff99,
            0xcc99ff
        ];

        this.capsules=[];

        for(let row=0;row<4;row++){

            for(let col=0;col<5;col++){

                const ball=this.add.circle(

                    500+col*70,

                    260+row*70,

                    25,

                    Phaser.Utils.Array.GetRandom(colors)

                );

                this.capsules.push(ball);

            }

        }

        // =========================
        // คำศัพท์
        // =========================

        this.wordText=this.add.text(

            640,

            665,

            "ปลา",

            {

                fontSize:"42px",

                fontStyle:"bold",

                color:"#0D47A1"

            }

        ).setOrigin(0.5);

        // =========================
        // ปุ่ม Space
        // =========================

        this.add.text(

            40,

            675,

            "กด SPACE เพื่อคีบ",

            {

                fontSize:"26px",

                color:"#000"

            }

        );

        this.input.keyboard.on("keydown-SPACE",()=>{

            this.moveClaw();

        });

    }

    moveClaw(){

        if(this.moving) return;

        this.moving=true;

        this.tweens.add({

            targets:[
                this.rope,
                this.head,
                this.left,
                this.right
            ],

            y:"+=220",

            duration:700,

            yoyo:true,

            ease:"Sine.easeInOut",

            onComplete:()=>{

                this.moving=false;

            }

        });

    }

}
