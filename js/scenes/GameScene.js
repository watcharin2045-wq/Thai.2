// ========================================
// GameScene.js
// ระบบเกมหลัก
// Thai Claw Game V4.0
// ========================================

import Machine from "../objects/Machine.js";

import Claw from "../objects/Claw.js";

import Capsule from "../objects/Capsule.js";

import SoundManager from "../utils/SoundManager.js";

import words from "../data/words.js";

import GameConfig from "../utils/GameConfig.js";


export default class GameScene extends Phaser.Scene {


    constructor() {

        super("GameScene");

    }


    create() {

            // ========================================
            // รับหมวดคำศัพท์จาก MenuScene
            // ========================================

            this.category =

                data?.category || "basic";


        // ========================================
        // ตัวแปรเกม
        // ========================================

        this.score = 0;

        this.lives = 3;


        // ========================================
        // พื้นหลัง
        // ========================================

        this.cameras.main.setBackgroundColor(

            GameConfig.BACKGROUND_COLOR

        );


        // ========================================
        // ระบบเสียง
        // ========================================

        this.soundManager =

            new SoundManager(

                this

            );


        // ========================================
        // หัวข้อ
        // ========================================

        this.add.text(

            40,

            20,

            "🎮 ตู้คีบคำศัพท์",

            {

                fontSize: "42px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#0D47A1"

            }

        );


        // ========================================
        // คะแนน
        // ========================================

        this.scoreText =

            this.add.text(

                1030,

                20,

                "⭐ 0",

                {

                    fontSize: "36px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#333333"

                }

            );


        // ========================================
        // หัวใจ
        // ========================================

        this.lifeText =

            this.add.text(

                1030,

                65,

                "❤️ ❤️ ❤️",

                {

                    fontSize: "30px"

                }

            );


        // ========================================
        // สร้างตู้
        // ========================================

        this.machine =

            new Machine(

                this

            );


        // ========================================
        // สร้างแขน
        // ========================================

        this.claw =

            new Claw(

                this

            );


        // ========================================
        // สร้างแคปซูล
        // ========================================

       // ========================================
        // สร้างตุ๊กตาตามหมวดที่เลือก
        // ========================================

        this.createCapsules();


        // ========================================
        // ตั้งคำศัพท์
        // ========================================

        this.setNewWord();


        // ========================================
        // คำศัพท์
        // ========================================

        this.wordText =

            this.add.text(

                640,

                615,

                "",

                {

                    fontSize: "48px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#0D47A1",

                    stroke: "#FFFFFF",

                    strokeThickness: 6

                }

            )

            .setOrigin(0.5);


        this.updateWordText();


        // ========================================
        // คำแนะนำ
        // ========================================

        this.add.text(

            640,

            665,

            "⬅️ ➡️ เลื่อนแขน   |   SPACE คีบ   |   🔊 กด F ฟังคำ",

            {

                fontSize: "22px",

                fontFamily: "Arial",

                color: "#333333"

            }

        )

        .setOrigin(0.5);


        // ========================================
        // ปุ่ม SPACE
        // ========================================

        this.spaceKey =

            this.input.keyboard.addKey(

                Phaser.Input.Keyboard.KeyCodes.SPACE

            );


        // ========================================
        // ปุ่ม F
        // ========================================

        this.soundKey =

            this.input.keyboard.addKey(

                Phaser.Input.Keyboard.KeyCodes.F

            );


        // ========================================
        // SPACE
        // ========================================

        this.spaceKey.on(

            "down",

            () => {

                this.startClaw();

            }

        );


        // ========================================
        // F
        // ========================================

        this.soundKey.on(

            "down",

            () => {

                this.soundManager.speak(

                    this.currentWord.word

                );

            }

        );

    }


    // ========================================
    // Update
    // ========================================

    update() {


        if (

            this.claw

        ) {

            this.claw.update();

        }

    }


    // ========================================
    // สร้างแคปซูล
    // ========================================

    createCapsules() {


    this.capsules = [];


    // ========================================
    // กรองคำศัพท์ตามหมวด
    // ========================================

    this.categoryWords =

        words.filter(

            word =>

                word.category ===

                this.category

        );


    // ========================================
    // ถ้าไม่มีข้อมูล
    // ========================================

    if (

        this.categoryWords.length === 0

    ) {

        this.categoryWords =

            words;

    }


    const colors = [

        0xFFCC33,

        0xFF6699,

        0x66CCFF,

        0x66FF99,

        0xCC99FF

    ];


    // ========================================
    // สร้างตุ๊กตา
    // ========================================

    for (

        let row = 0;

        row <

        GameConfig.CAPSULE_ROWS;

        row++

    ) {


        for (

            let col = 0;

            col <

            GameConfig.CAPSULE_COLS;

            col++

        ) {


            const x =

                GameConfig.CAPSULE_START_X

                +

                col *

                GameConfig.CAPSULE_GAP_X;


            const y =

                GameConfig.CAPSULE_START_Y

                +

                row *

                GameConfig.CAPSULE_GAP_Y;


            const color =

                Phaser.Utils.Array.GetRandom(

                    colors

                );


            // ========================================
            // เลือกคำศัพท์จากหมวด
            // ========================================

            const wordData =

                Phaser.Utils.Array.GetRandom(

                    this.categoryWords

                );


            const capsule =

                new Capsule(

                    this,

                    x,

                    y,

                    color,

                    wordData

                );


            this.capsules.push(

                capsule

            );

        }

    }

}

        }

    }


    // ========================================
    // คำศัพท์ใหม่
    // ========================================

   setNewWord() {


    // ========================================
    // ใช้คำศัพท์เฉพาะหมวด
    // ========================================

    if (

        !this.categoryWords ||

        this.categoryWords.length === 0

    ) {

        this.categoryWords =

            words;

    }


    this.currentWord =

        Phaser.Utils.Array.GetRandom(

            this.categoryWords

        );


    this.updateWordText();

}


    // ========================================
    // แสดงคำศัพท์
    // ========================================

    updateWordText() {


        if (

            !this.wordText ||

            !this.currentWord

        ) {

            return;

        }


        this.wordText.setText(

            "📖 อ่านคำว่า  " +

            this.currentWord.word

        );

    }


    // ========================================
    // เริ่มคีบ
    // ========================================

    startClaw() {


        if (

            this.claw.isMoving

        ) {

            return;

        }


        this.claw.grab(

            this.capsules,

            (capsule) => {


                if (

                    !capsule

                ) {

                    return;

                }


                // ========================================
                // ตรวจคำตอบ
                // ========================================

                if (

                    capsule.wordData.word ===

                    this.currentWord.word

                ) {


                    // ========================================
                    // คีบถูก
                    // ========================================

                    capsule.successEffect();


                    this.correctAnswer();

                }

                    else {


                    // ========================================
                    // คีบผิด
                    // ========================================

                    capsule.wrongEffect();


                    this.wrongAnswer();

                }

            }

        );

    }


    // ========================================
    // ตอบถูก
    // ========================================

    correctAnswer() {


        this.score += 1;


        this.scoreText.setText(

            "⭐ " +

            this.score

        );


        this.soundManager.correct();


        // ========================================
        // เอฟเฟกต์
        // ========================================

        const correctText =

            this.add.text(

                640,

                220,

                "🎉 เก่งมาก! ถูกต้อง!",

                {

                    fontSize: "52px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#2E7D32",

                    stroke: "#FFFFFF",

                    strokeThickness: 8

                }

            )

            .setOrigin(0.5);


        this.tweens.add({

            targets:

                correctText,


            scale:

                1.25,


            duration:

                250,


            yoyo:

                true,


            repeat:

                2,


            onComplete: () => {


                correctText.destroy();


            }

        });


        // ========================================
        // สุ่มคำใหม่
        // ========================================

        this.setNewWord();


        // ========================================
        // ชนะ
        // ========================================

        if (

            this.score >=

            GameConfig.WIN_SCORE

        ) {


            this.time.delayedCall(

                1500,

                () => {


                    this.scene.start(

                        "ResultScene",

                        {

                            score:

                                this.score

                        }

                    );

                }

            );

        }

    }


    // ========================================
    // ตอบผิด
    // ========================================

    wrongAnswer() {


        this.lives -= 1;


        this.updateLives();


        this.soundManager.wrong();


        const wrongText =

            this.add.text(

                640,

                220,

                "❌ ยังไม่ถูก ลองใหม่นะ",

                {

                    fontSize: "42px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#D32F2F",

                    stroke: "#FFFFFF",

                    strokeThickness: 6

                }

            )

            .setOrigin(0.5);


        this.tweens.add({

            targets:

                wrongText,


            alpha:

                0,


            duration:

                1500,


            onComplete: () => {


                wrongText.destroy();

            }

        });


        // ========================================
        // หัวใจหมด
        // ========================================

        if (

            this.lives <= 0

        ) {


            this.time.delayedCall(

                1500,

                () => {


                    this.scene.start(

                        "ResultScene",

                        {

                            score:

                                this.score

                        }

                    );

                }

            );

        }

    }


    // ========================================
    // อัปเดตหัวใจ
    // ========================================

    updateLives() {


        let hearts = "";


        for (

            let i = 0;

            i < this.lives;

            i++

        ) {

            hearts += "❤️ ";

        }


        this.lifeText.setText(

            hearts

        );

    }

}
