// ========================================
// GameScene
// Thai Claw Game V4.0
// ========================================

import Machine from "../objects/Machine.js";

import Claw from "../objects/Claw.js";


export default class GameScene extends Phaser.Scene {

    constructor() {

        super("GameScene");

    }


    create() {

        // ========================================
        // ตัวแปรเกม
        // ========================================

        this.score = 0;

        this.isPlaying = true;

        this.isClawMoving = false;


        // ========================================
        // พื้นหลัง
        // ========================================

        this.cameras.main.setBackgroundColor(
            "#9EDFFF"
        );


        // ========================================
        // หัวข้อ
        // ========================================

        this.add.text(

            40,

            25,

            "🎮 ตู้คีบคำศัพท์",

            {

                fontSize: "40px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#0D47A1"

            }

        );


        // ========================================
        // คะแนน
        // ========================================

        this.scoreText = this.add.text(

            1050,

            30,

            "⭐ 0",

            {

                fontSize: "32px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#333333"

            }

        );


        // ========================================
        // สร้างตู้คีบ
        // ========================================

        this.machine = new Machine(
            this
        );


        // ========================================
        // สร้างแขนคีบ
        // ========================================

        this.claw = new Claw(
            this
        );


        // ========================================
        // คำศัพท์เป้าหมาย
        // ========================================

        this.add.text(

            640,

            665,

            "📖 คำที่ต้องอ่าน: ปลา",

            {

                fontSize: "32px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#0D47A1"

            }

        ).setOrigin(0.5);


        // ========================================
        // คำแนะนำ
        // ========================================

        this.add.text(

            40,

            680,

            "กด SPACE เพื่อคีบ",

            {

                fontSize: "24px",

                fontFamily: "Arial",

                color: "#333333"

            }

        );


        // ========================================
        // ควบคุมด้วย SPACE
        // ========================================

        this.input.keyboard.on(

            "keydown-SPACE",

            () => {

                this.startClaw();

            }

        );


        // ========================================
        // ควบคุมด้วยการคลิก
        // ========================================

        this.input.on(

            "pointerdown",

            () => {

                this.startClaw();

            }

        );

    }


    // ========================================
    // เริ่มการคีบ
    // ========================================

    startClaw() {

        if (
            this.isClawMoving
        ) {

            return;

        }


        this.isClawMoving = true;


        this.claw.grab(

            () => {

                this.isClawMoving = false;

                this.addScore();

            }

        );

    }


    // ========================================
    // เพิ่มคะแนน
    // ========================================

    addScore() {

        this.score += 1;


        this.scoreText.setText(

            "⭐ " + this.score

        );


        // ========================================
        // ถ้าได้ 5 คะแนน
        // จบเกม
        // ========================================

        if (
            this.score >= 5
        ) {

            this.time.delayedCall(

                800,

                () => {

                    this.scene.start(

                        "ResultScene",

                        {

                            score: this.score

                        }

                    );

                }

            );

        }

    }

}
