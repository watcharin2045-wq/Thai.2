// ========================================
// Machine
// Thai Claw Game V4.0
// ========================================

export default class Machine {

    constructor(scene) {

        this.scene = scene;


        // ========================================
        // เงาตู้
        // ========================================

        scene.add.rectangle(

            648,

            370,

            730,

            530,

            0x777777,

            0.25

        );


        // ========================================
        // ตัวตู้
        // ========================================

        scene.add.rectangle(

            640,

            360,

            720,

            520,

            0xFFFFFF

        );


        // ========================================
        // กระจก
        // ========================================

        scene.add.rectangle(

            640,

            325,

            680,

            430,

            0xDFF7FF

        );


        // ========================================
        // ขอบกระจก
        // ========================================

        scene.add.rectangle(

            640,

            325,

            680,

            430,

            0xFFFFFF,

            0

        )
        .setStrokeStyle(

            8,

            0x42A5F5

        );


        // ========================================
        // ฐานตู้
        // ========================================

        scene.add.rectangle(

            640,

            580,

            720,

            80,

            0x546E7A

        );


        // ========================================
        // ช่องรับของ
        // ========================================

        scene.add.rectangle(

            640,

            590,

            220,

            45,

            0x263238

        );


        scene.add.text(

            640,

            590,

            "🎁 รับรางวัล",

            {

                fontSize: "22px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#FFFFFF"

            }

        ).setOrigin(0.5);


        // ========================================
        // ลูกบอลแคปซูล
        // ========================================

        const colors = [

            0xFFCC33,

            0xFF6699,

            0x66CCFF,

            0x66FF99,

            0xCC99FF

        ];


        for (
            let row = 0;
            row < 4;
            row++
        ) {

            for (
                let col = 0;
                col < 6;
                col++
            ) {


                const color =

                    Phaser.Utils.Array.GetRandom(
                        colors
                    );


                const ball = scene.add.circle(

                    465 + col * 60,

                    300 + row * 60,

                    24,

                    color

                );


                // ไฮไลต์

                scene.add.circle(

                    457 + col * 60,

                    292 + row * 60,

                    7,

                    0xFFFFFF,

                    0.7

                );


                // Animation ลอย

                scene.tweens.add({

                    targets: ball,

                    y: ball.y - 5,

                    duration: 800,

                    yoyo: true,

                    repeat: -1,

                    ease: "Sine.easeInOut",

                    delay:
                        Phaser.Math.Between(
                            0,
                            500
                        )

                });

            }

        }


        // ========================================
        // ไฟ LED
        // ========================================

        this.createLEDs(
            scene
        );

    }


    // ========================================
    // สร้างไฟ LED
    // ========================================

    createLEDs(scene) {


        const colors = [

            0xFF5252,

            0xFFEB3B,

            0x69F0AE,

            0x40C4FF,

            0xE040FB

        ];


        // ด้านบน

        for (
            let i = 0;
            i < 18;
            i++
        ) {

            const led = scene.add.circle(

                300 + i * 38,

                100,

                7,

                colors[
                    i % colors.length
                ]

            );


            this.animateLED(
                scene,
                led,
                i * 100
            );

        }


        // ด้านล่าง

        for (
            let i = 0;
            i < 18;
            i++
        ) {

            const led = scene.add.circle(

                300 + i * 38,

                620,

                7,

                colors[
                    (i + 2) %
                    colors.length
                ]

            );


            this.animateLED(
                scene,
                led,
                i * 100
            );

        }

    }


    // ========================================
    // Animation LED
    // ========================================

    animateLED(
        scene,
        led,
        delay
    ) {

        scene.tweens.add({

            targets: led,

            alpha: 0.3,

            scale: 0.7,

            duration: 500,

            delay: delay,

            yoyo: true,

            repeat: -1

        });

    }

}
