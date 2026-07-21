// ========================================
// Capsule.js
// ตุ๊กตาคำศัพท์
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

        this.isRemoved = false;


        // ========================================
        // Container หลัก
        // ========================================

        this.container =

            scene.add.container(

                x,

                y

            );


        // ========================================
        // เงาด้านล่าง
        // ========================================

        this.shadow =

            scene.add.ellipse(

                0,

                30,

                75,

                22,

                0x000000,

                0.15

            );


        // ========================================
        // ตัวตุ๊กตาหลัก
        // ========================================

        this.body =

            scene.add.circle(

                0,

                0,

                34,

                color

            );


        this.body.setStrokeStyle(

            4,

            0xFFFFFF,

            0.9

        );


        // ========================================
        // ไฮไลต์
        // ========================================

        this.highlight =

            scene.add.circle(

                -12,

                -13,

                9,

                0xFFFFFF,

                0.55

            );


        // ========================================
        // ตาซ้าย
        // ========================================

        this.eyeLeft =

            scene.add.circle(

                -11,

                -4,

                5,

                0x263238

            );


        // ========================================
        // ตาขวา
        // ========================================

        this.eyeRight =

            scene.add.circle(

                11,

                -4,

                5,

                0x263238

            );


        // ========================================
        // ปาก
        // ========================================

        this.mouth =

            scene.add.arc(

                0,

                7,

                13,

                13,

                20,

                160,

                false,

                0x263238

            );


        this.mouth.setStrokeStyle(

            3,

            0x263238

        );


        // ========================================
        // แก้มซ้าย
        // ========================================

        this.cheekLeft =

            scene.add.circle(

                -20,

                9,

                5,

                0xFF6688,

                0.65

            );


        // ========================================
        // แก้มขวา
        // ========================================

        this.cheekRight =

            scene.add.circle(

                20,

                9,

                5,

                0xFF6688,

                0.65

            );


        // ========================================
        // คำศัพท์
        // ========================================

        this.wordText =

            scene.add.text(

                0,

                52,

                wordData.word,

                {

                    fontSize: "22px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#263238",

                    backgroundColor: "#FFFFFF",

                    padding: {

                        left: 8,

                        right: 8,

                        top: 4,

                        bottom: 4

                    }

                }

            );


        this.wordText.setOrigin(

            0.5

        );


        // ========================================
        // เพิ่มทุกชิ้นเข้า Container
        // ========================================

        this.container.add([

            this.shadow,

            this.body,

            this.highlight,

            this.eyeLeft,

            this.eyeRight,

            this.mouth,

            this.cheekLeft,

            this.cheekRight,

            this.wordText

        ]);


        // ========================================
        // ทำให้ตุ๊กตาลอยเบา ๆ
        // ========================================

        this.floatTween =

            scene.tweens.add({

                targets:

                    this.container,

                y:

                    y - 5,

                duration:

                    900,

                yoyo:

                    true,

                repeat:

                    -1,

                ease:

                    "Sine.easeInOut"

            });

    }


    // ========================================
    // เริ่มถูกคีบ
    // ========================================

    grab() {


        if (

            this.isGrabbed ||

            this.isRemoved

        ) {

            return;

        }


        this.isGrabbed = true;


        // หยุด Animation ลอย

        if (

            this.floatTween

        ) {

            this.floatTween.stop();

        }


        // ========================================
        // เอฟเฟกต์เด้ง
        // ========================================

        this.scene.tweens.add({

            targets:

                this.container,

            scale:

                1.25,

            duration:

                200,

            yoyo:

                true,

            repeat:

                1

        });


        // ========================================
        // หมุนเล็กน้อย
        // ========================================

        this.scene.tweens.add({

            targets:

                this.container,

            angle:

                360,

            duration:

                700,

            ease:

                "Cubic.easeInOut"

        });

    }


    // ========================================
    // เอฟเฟกต์ถูกต้อง
    // ========================================

    successEffect() {


        // ========================================
        // ดาวกระจาย
        // ========================================

        for (

            let i = 0;

            i < 8;

            i++

        ) {


            const angle =

                Phaser.Math.DegToRad(

                    i * 45

                );


            const star =

                this.scene.add.text(

                    this.container.x,

                    this.container.y,

                    "⭐",

                    {

                        fontSize: "24px"

                    }

                );


            this.scene.tweens.add({

                targets:

                    star,


                x:

                    star.x +

                    Math.cos(angle) *

                    100,


                y:

                    star.y +

                    Math.sin(angle) *

                    100,


                alpha:

                    0,


                scale:

                    1.5,


                duration:

                    700,


                ease:

                    "Cubic.easeOut",


                onComplete: () => {

                    star.destroy();

                }

            });

        }


        // ========================================
        // ขยายแล้วหาย
        // ========================================

        this.scene.tweens.add({

            targets:

                this.container,

            scale:

                1.5,

            alpha:

                0,

            duration:

                700,

            ease:

                "Back.easeIn",

            onComplete: () => {


                this.isRemoved = true;


                this.container.destroy();

            }

        });

    }


    // ========================================
    // เอฟเฟกต์ตอบผิด
    // ========================================

    wrongEffect() {


        this.scene.tweens.add({

            targets:

                this.container,

            x:

                "+=10",

            duration:

                80,

            yoyo:

                true,

            repeat:

                5,

            ease:

                "Sine.easeInOut"

        });

    }

}
