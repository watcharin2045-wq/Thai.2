// ========================================
// Capsule
// Thai Claw Game V4.0
// ========================================

export default class Capsule {

    constructor(
        scene,
        x,
        y,
        color,
        wordData
    ) {

        this.scene = scene;

        this.x = x;

        this.y = y;

        this.color = color;

        this.wordData = wordData;

        this.isGrabbed = false;


        // ========================================
        // ตัวแคปซูล
        // ========================================

        this.body = scene.add.circle(

            x,

            y,

            25,

            color

        );


        this.body.setStrokeStyle(

            3,

            0xFFFFFF

        );


        // ========================================
        // ไฮไลต์
        // ========================================

        this.highlight = scene.add.circle(

            x - 8,

            y - 8,

            7,

            0xFFFFFF,

            0.75

        );


        // ========================================
        // ฝาครอบ
        // ========================================

        this.cap = scene.add.rectangle(

            x,

            y - 20,

            34,

            7,

            0xFFFFFF,

            0.75

        );


        // ========================================
        // รวม Object
        // ========================================

        this.parts = [

            this.body,

            this.highlight,

            this.cap

        ];


        // ========================================
        // Animation ลอย
        // ========================================

        this.tween = scene.tweens.add({

            targets: this.parts,

            y: "-=4",

            duration: 800,

            yoyo: true,

            repeat: -1,

            ease: "Sine.easeInOut",

            delay: Phaser.Math.Between(

                0,

                500

            )

        });

    }


    // ========================================
    // ตรวจสอบตำแหน่ง
    // ========================================

    getDistanceFrom(
        x,
        y
    ) {

        return Phaser.Math.Distance.Between(

            this.body.x,

            this.body.y,

            x,

            y

        );

    }


    // ========================================
    // คีบแคปซูล
    // ========================================

    grab() {

        if (
            this.isGrabbed
        ) {

            return;

        }


        this.isGrabbed = true;


        // หยุด Animation ลอย

        if (
            this.tween
        ) {

            this.tween.pause();

        }


        // Animation ขยาย

        this.scene.tweens.add({

            targets: this.parts,

            scaleX: 1.2,

            scaleY: 1.2,

            duration: 200,

            yoyo: true,

            ease: "Back.easeOut"

        });

    }


    // ========================================
    // แสดงคำศัพท์
    // ========================================

    showWord() {

        if (
            !this.wordData
        ) {

            return;

        }


        const panel = this.scene.add.rectangle(

            640,

            400,

            400,

            220,

            0xFFFFFF,

            0.96

        );


        panel.setStrokeStyle(

            6,

            0x42A5F5

        );


        const emoji = this.scene.add.text(

            640,

            350,

            this.wordData.emoji,

            {

                fontSize: "60px"

            }

        ).setOrigin(0.5);


        const word = this.scene.add.text(

            640,

            430,

            this.wordData.word,

            {

                fontSize: "56px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#0D47A1"

            }

        ).setOrigin(0.5);


        // ========================================
        // Animation แสดงคำ
        // ========================================

        panel.setScale(0);

        emoji.setScale(0);

        word.setScale(0);


        this.scene.tweens.add({

            targets: [

                panel,

                emoji,

                word

            ],

            scale: 1,

            duration: 500,

            ease: "Back.easeOut"

        });


        // ========================================
        // คืน Object
        // ========================================

        return {

            panel,

            emoji,

            word

        };

    }

}
