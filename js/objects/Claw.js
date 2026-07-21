// ========================================
// Claw
// Thai Claw Game V4.0
// ========================================

export default class Claw {

    constructor(scene) {

        this.scene = scene;

        this.isMoving = false;


        // ========================================
        // เชือก
        // ========================================

        this.rope = scene.add.rectangle(

            640,

            160,

            5,

            120,

            0x455A64

        );


        // ========================================
        // หัวแขนคีบ
        // ========================================

        this.head = scene.add.circle(

            640,

            220,

            22,

            0xECEFF1

        );


        this.head.setStrokeStyle(

            5,

            0x607D8B

        );


        // ========================================
        // แขนซ้าย
        // ========================================

        this.leftArm = scene.add.line(

            0,

            0,

            640,

            220,

            615,

            260,

            0x455A64

        );


        this.leftArm.setLineWidth(

            8

        );


        // ========================================
        // แขนขวา
        // ========================================

        this.rightArm = scene.add.line(

            0,

            0,

            640,

            220,

            665,

            260,

            0x455A64

        );


        this.rightArm.setLineWidth(

            8

        );

    }


    // ========================================
    // คีบ
    // ========================================

    grab(onComplete) {


        if (
            this.isMoving
        ) {

            return;

        }


        this.isMoving = true;


        // ========================================
        // ลง
        // ========================================

        this.scene.tweens.add({

            targets: [

                this.rope,

                this.head,

                this.leftArm,

                this.rightArm

            ],

            y: "+=220",

            duration: 900,

            ease: "Sine.easeInOut",


            onComplete: () => {


                // ========================================
                // หนีบแขน
                // ========================================

                this.closeClaw();


                // ========================================
                // รอ
                // ========================================

                this.scene.time.delayedCall(

                    400,

                    () => {


                        // ========================================
                        // ยกกลับ
                        // ========================================

                        this.scene.tweens.add({

                            targets: [

                                this.rope,

                                this.head,

                                this.leftArm,

                                this.rightArm

                            ],

                            y: "-=220",

                            duration: 900,

                            ease: "Sine.easeInOut",


                            onComplete: () => {


                                this.openClaw();


                                this.isMoving = false;


                                if (
                                    onComplete
                                ) {

                                    onComplete();

                                }

                            }

                        });


                    }

                );

            }

        });

    }


    // ========================================
    // ปิดแขนคีบ
    // ========================================

    closeClaw() {


        this.leftArm.setTo(

            0,

            0,

            this.head.x,

            this.head.y,

            this.head.x - 12,

            this.head.y + 35,

            0x455A64

        );


        this.rightArm.setTo(

            0,

            0,

            this.head.x,

            this.head.y,

            this.head.x + 12,

            this.head.y + 35,

            0x455A64

        );

    }


    // ========================================
    // เปิดแขนคีบ
    // ========================================

    openClaw() {


        this.leftArm.setTo(

            0,

            0,

            this.head.x,

            this.head.y,

            this.head.x - 25,

            this.head.y + 40,

            0x455A64

        );


        this.rightArm.setTo(

            0,

            0,

            this.head.x,

            this.head.y,

            this.head.x + 25,

            this.head.y + 40,

            0x455A64

        );

    }

}
