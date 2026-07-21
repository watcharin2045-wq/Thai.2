// ========================================
// ResultScene
// Thai Claw Game V4.0
// ========================================

export default class ResultScene extends Phaser.Scene {

    constructor() {

        super("ResultScene");

    }


    create(data) {

        // ========================================
        // รับคะแนน
        // ========================================

        const score = data.score || 0;


        // ========================================
        // พื้นหลัง
        // ========================================

        this.cameras.main.setBackgroundColor(
            "#FFF3E0"
        );


        // ========================================
        // หัวข้อ
        // ========================================

        this.add.text(

            640,

            150,

            "🎉 เก่งมาก! 🎉",

            {

                fontSize: "64px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#E65100"

            }

        ).setOrigin(0.5);


        // ========================================
        // คะแนน
        // ========================================

        this.add.text(

            640,

            280,

            "คะแนนของคุณ",

            {

                fontSize: "32px",

                fontFamily: "Arial",

                color: "#555555"

            }

        ).setOrigin(0.5);


        this.add.text(

            640,

            360,

            "⭐ " + score + " คะแนน",

            {

                fontSize: "56px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#FF9800"

            }

        ).setOrigin(0.5);


        // ========================================
        // ปุ่มเล่นอีกครั้ง
        // ========================================

        const playAgain = this.add.rectangle(

            640,

            500,

            300,

            80,

            0x66BB6A

        )
        .setStrokeStyle(
            5,
            0x2E7D32
        )
        .setInteractive({
            useHandCursor: true
        });


        this.add.text(

            640,

            500,

            "🔄 เล่นอีกครั้ง",

            {

                fontSize: "34px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#FFFFFF"

            }

        ).setOrigin(0.5);


        // ========================================
        // กดเล่นอีกครั้ง
        // ========================================

        playAgain.on(

            "pointerdown",

            () => {

                this.scene.start(
                    "GameScene"
                );

            }

        );


        // ========================================
        // ปุ่มกลับเมนู
        // ========================================

        const menuButton = this.add.text(

            640,

            600,

            "← กลับหน้าเมนู",

            {

                fontSize: "26px",

                fontFamily: "Arial",

                color: "#1565C0"

            }

        )
        .setOrigin(0.5)
        .setInteractive({
            useHandCursor: true
        });


        menuButton.on(

            "pointerdown",

            () => {

                this.scene.start(
                    "MenuScene"
                );

            }

        );

    }

}
