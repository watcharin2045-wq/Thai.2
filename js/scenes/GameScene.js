// ========================================
// GameScene
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
        // สถานะ
        // ========================================

        this.isClawMoving = false;


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
        // สร้างตู้
        // ========================================

        this.machine = new Machine(

            this

        );


        // ========================================
        // สร้างแขน
        // ========================================

        this.claw = new Claw(

            this

        );


        // ========================================
        // สร้างแคปซูล
        // ========================================

        this.createCapsules();


        // ========================================
        // สุ่มคำศัพท์
        // ========================================

        this.setNewWord();


        // ========================================
        // คำแนะนำ
        // ========================================

        this.instructionText = this.add.text(

            640,

            665,

            "🎯 อ่านคำว่า: ปลา",

            {

                fontSize: "32px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#0D47A1"

            }

        ).setOrigin(0.5);


        // ========================================
        // ปุ่ม SPACE
        // ========================================

        this.input.keyboard.on(

            "keydown-SPACE",

            () => {

                this.startClaw();

            }

        );


        // ========================================
        // คลิกหน้าจอ
        // ========================================

        this.input.on(

            "pointerdown",

            () => {

                this.startClaw();

            }

        );

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

            row < GameConfig.CAPSULE_ROWS;

            row++

        ) {


            for (

                let col = 0;

                col < GameConfig.CAPSULE_COLS;

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
    // สุ่มคำใหม่
    // ========================================

    setNewWord() {

        this.currentWord =

            Phaser.Utils.Array.GetRandom(

                words

            );


        this.instructionText.setText(

            "🎯 อ่านคำว่า: "

            +

            this.currentWord.word

        );

    }


    // ========================================
    // เริ่มคีบ
    // ========================================

    startClaw() {

        if (

            this.isClawMoving

        ) {

            return;

        }


        this.isClawMoving = true;


        this.claw.grab(

            this.capsules,

            (capsule) => {


                // ========================================
                // ถ้าคีบได้
                // ========================================

                if (

                    capsule

                ) {


                    // ========================================
                    // แสดงคำศัพท์
                    // ========================================

                    capsule.showWord();


                    // ========================================
                    // เพิ่มคะแนน
                    // ========================================

                    this.score++;


                    this.scoreText.setText(

                        "⭐ "

                        +

                        this.score

                    );


                    // ========================================
                    // สุ่มคำใหม่
                    // ========================================

                    this.setNewWord();


                    // ========================================
                    // ตรวจสอบชนะ
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


                this.isClawMoving = false;

            }

        );

    }

}
