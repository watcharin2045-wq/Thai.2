import Capsule from "../objects/Capsule.js";
export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {
        // =====================
        // ลูกบอลแคปซูล
        // =====================

        const colors = [
            0xffcc33,
            0xff6699,
            0x66ccff,
            0x66ff99,
            0xcc99ff
        ];

        this.capsules = [];

        for(let row=0; row<4; row++){

            for(let col=0; col<5; col++){

                const x = 500 + col * 70;

                const y = 260 + row * 70;

                const color = Phaser.Utils.Array.GetRandom(colors);

                const capsule = new Capsule(
                    this,
                    x,
                    y,
                    color
                );

                this.capsules.push(capsule);

    }

}
        //==========================
        // Background
        //==========================

        this.cameras.main.setBackgroundColor("#9EDFFF");

        //==========================
        // Score
        //==========================

        this.add.text(
            1080,
            20,
            "⭐ 0",
            {
                fontSize: "30px",
                color: "#000"
            }
        );

        //==========================
        // Cabinet Shadow
        //==========================

        this.add.rectangle(
            645,
            365,
            730,
            530,
            0x999999,
            0.25
        );

        //==========================
        // Cabinet
        //==========================

        this.add.rectangle(
            640,
            360,
            720,
            520,
            0xffffff
        );

        //==========================
        // Glass
        //==========================

        this.add.rectangle(
            640,
            340,
            680,
            450,
            0xdff6ff
        );

        //==========================
        // Bottom Panel
        //==========================

        this.add.rectangle(
            640,
            575,
            720,
            90,
            0x666666
        );

        //==========================
        // LED
        //==========================

        for(let i=0;i<18;i++){

            this.add.circle(
                300+i*38,
                110,
                6,
                0xffee00
            );

        }

        for(let i=0;i<18;i++){

            this.add.circle(
                300+i*38,
                610,
                6,
                0xff66aa
            );

        }

        for(let i=0;i<12;i++){

            this.add.circle(
                300,
                150+i*38,
                6,
                0x55ff55
            );

        }

        for(let i=0;i<12;i++){

            this.add.circle(
                980,
                150+i*38,
                6,
                0x55ccff
            );

        }

        //==========================
        // Rope
        //==========================

        this.add.rectangle(
            640,
            150,
            4,
            120,
            0x444444
        );

        //==========================
        // Claw
        //==========================

        this.add.circle(
            640,
            210,
            18,
            0xdddddd
        );

        this.add.line(
            0,
            0,
            640,
            210,
            625,
            240,
            0x444444
        );

        this.add.line(
            0,
            0,
            640,
            210,
            655,
            240,
            0x444444
        );

        this.add.text(
            500,
            650,
            "Version 3.2",
            {
                fontSize:"28px",
                color:"#000"
            }
        );

    }

}
