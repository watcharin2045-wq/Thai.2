// ========================================
// GameScene.js
// Thai Claw Game V4.0
// ========================================

import Machine from "../objects/Machine.js";

import Claw from "../objects/Claw.js";

import Capsule from "../objects/Capsule.js";

import words from "../data/words.js";

import GameConfig from "../utils/GameConfig.js";


export default class GameScene extends Phaser.Scene {


    constructor() {

        super("GameScene");

    }


    create() {


        // ========================================
        // คะแนน
        // ========================================

        this.score = 0;


        // ========================================
        // พื้นหลัง
        // ========================================

        this.cameras.main.setBackgroundColor(

            GameConfig.BACKGROUND_COLOR

        );


        // ========================================
        // หัวข้อ
        // ========================================

        this.add.text(

            40,

            25,

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

                1050,

                25,

                "⭐ 0",

                {

                    fontSize: "36px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#333333"

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
        // สร้างแขนคีบ
        // ========================================

        this.claw =

            new Claw(

                this

            );


        // ========================================
        // สร้างแคปซูล
        // ========================================

        this.createCapsules();


        // ========================================
        // คำศัพท์เป้าหมาย
        // ========================================

        this.setNewWord();


        // ========================================
        // คำแนะนำ
        // ========================================

        this.instructionText =

            this.add.text(

                640,

                650,

                "",

                {

                    fontSize: "32px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#0D47A1"

                }

            )

            .setOrigin(0.5);


        this.instructionText.setText(

            "อ่านคำว่า: " +

            this.currentWord.word

        );


        // ========================================
        // ปุ่มควบคุม
        // ========================================

        this.controlText =

            this.add.text(

                640,

                690,

                "⬅️ ➡️ เลื่อนแขน   |   SPACE คีบ",

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
        // ปุ่มกด SPACE
        // ========================================

        this.spaceKey.on(

            "down",

            () => {

                this.startClaw();

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


        const colors = [

            0xFFCC33,

            0xFF6699,

            0x66CCFF,

            0x66FF99,

            0xCC99FF

        ];


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


                const wordData =

                    Phaser.Utils.Array.GetRandom(

                        words

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


    // ========================================
    // สุ่มคำศัพท์
    // ========================================

    setNewWord() {


        this.currentWord =

            Phaser.Utils.Array.GetRandom(

                words

            );


        if (

            this.instructionText

        ) {

            this.instructionText.setText(

                "อ่านคำว่า: " +

                this.currentWord.word

            );

        }

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
                // ตรวจว่าคำถูกหรือไม่
                // ========================================

                if (

                    capsule.wordData.word ===

                    this.currentWord.word

                ) {


                    // ถูกต้อง

                    this.score += 1;


                    this.scoreText.setText(

                        "⭐ " +

                        this.score

                    );


                    this.showCorrect();


                    // สุ่มคำใหม่

                    this.setNewWord();


                    // ตรวจชนะ

                    if (

                        this.score >=

                        GameConfig.WIN_SCORE

                    ) {


                        this.time.delayedCall(

                            1200,

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

                else {


                    // ผิด

                    this.showWrong();

                }

            }

        );

    }


    // ========================================
    // ตอบถูก
    // ========================================

    showCorrect() {


        const text =

            this.add.text(

                640,

                220,

                "🎉 ถูกต้อง!",

                {

                    fontSize: "56px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#2E7D32",

                    stroke: "#FFFFFF",

                    strokeThickness: 8

                }

            )

            .setOrigin(0.5);


        this.tweens.add({

            targets: text,

            scale: 1.2,

            duration: 300,

            yoyo: true,

            repeat: 2,


            onComplete: () => {

                text.destroy();

            }

        });

    }


    // ========================================
    // ตอบผิด
    // ========================================

    showWrong() {


        const text =

            this.add.text(

                640,

                220,

                "ลองใหม่อีกครั้งนะ 😊",

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

            targets: text,

            alpha: 0,

            duration: 1200,


            onComplete: () => {

                text.destroy();

            }

        });

    }

}
