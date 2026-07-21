// ========================================
// Claw.js
// ระบบแขนคีบ V4.0
// ========================================

import GameConfig from "../utils/GameConfig.js";


export default class Claw {


    constructor(scene) {

        this.scene = scene;


        this.x =

            GameConfig.CLAW_START_X;


        this.y =

            GameConfig.CLAW_START_Y;


        this.isMoving = false;

        this.isDropping = false;


        // ========================================
        // เชือก
        // ========================================

        this.rope =

            scene.add.rectangle(

                this.x,

                this.y + 60,

                6,

                120,

                0x455A64

            );


        // ========================================
        // หัวคีบ
        // ========================================

        this.head =

            scene.add.circle(

                this.x,

                this.y + 120,

                24,

                0xECEFF1

            );


        this.head.setStrokeStyle(

            5,

            0x607D8B

        );


        // ========================================
        // แขนซ้าย
        // ========================================

        this.leftArm =

            scene.add.line(

                0,

                0,

                this.x,

                this.y + 120,

                this.x - 28,

                this.y + 165,

                0x455A64

            );


        this.leftArm.setLineWidth(

            8

        );


        // ========================================
        // แขนขวา
        // ========================================

        this.rightArm =

            scene.add.line(

                0,

                0,

                this.x,

                this.y + 120,

                this.x + 28,

                this.y + 165,

                0x455A64

            );


        this.rightArm.setLineWidth(

            8

        );

    }


    // ========================================
    // อัปเดต
    // ========================================

    update() {


        if (

            this.isMoving ||

            this.isDropping

        ) {

            return;

        }


        const keyboard =

            this.scene.input.keyboard;


        if (

            keyboard.addKey(

                Phaser.Input.Keyboard.KeyCodes.LEFT

            ).isDown

        ) {

            this.moveHorizontal(

                -GameConfig.CLAW_MOVE_SPEED

            );

        }


        if (

            keyboard.addKey(

                Phaser.Input.Keyboard.KeyCodes.RIGHT

            ).isDown

        ) {

            this.moveHorizontal(

                GameConfig.CLAW_MOVE_SPEED

            );

        }

    }


    // ========================================
    // เคลื่อนที่
    // ========================================

    moveHorizontal(

        amount

    ) {


        this.x += amount;


        this.x =

            Phaser.Math.Clamp(

                this.x,

                GameConfig.CLAW_MIN_X,

                GameConfig.CLAW_MAX_X

            );


        this.updatePosition();

    }


    // ========================================
    // อัปเดตตำแหน่ง
    // ========================================

    updatePosition() {


        this.rope.x =

            this.x;


        this.head.x =

            this.x;


        this.leftArm.x =

            this.x;


        this.rightArm.x =

            this.x;

    }


    // ========================================
    // เริ่มคีบ
    // ========================================

    grab(

        capsules,

        callback

    ) {


        if (

            this.isMoving ||

            this.isDropping

        ) {

            return;

        }


        this.isMoving = true;

        this.isDropping = true;


        // เล่นเสียงคีบ

        if (

            this.scene.soundManager

        ) {

            this.scene.soundManager.grab();

        }


        const target =

            this.findTarget(

                capsules

            );


        // ========================================
        // แขนลง
        // ========================================

        this.scene.tweens.add({

            targets: [

                this.rope,

                this.head,

                this.leftArm,

                this.rightArm

            ],


            y:

                "+=" +

                GameConfig.CLAW_DROP_DISTANCE,


            duration:

                GameConfig.CLAW_DROP_DURATION,


            ease:

                "Sine.easeInOut",


            onComplete: () => {


                if (

                    target

                ) {

                    target.grab();

                }


                this.closeClaw();


                this.scene.time.delayedCall(

                    500,

                    () => {


                        // ========================================
                        // ยกแขนขึ้น
                        // ========================================

                        this.scene.tweens.add({

                            targets: [

                                this.rope,

                                this.head,

                                this.leftArm,

                                this.rightArm

                            ],


                            y:

                                "-=" +

                                GameConfig.CLAW_DROP_DISTANCE,


                            duration:

                                GameConfig.CLAW_UP_DURATION,


                            ease:

                                "Sine.easeInOut",


                            onComplete: () => {


                                this.openClaw();


                                this.isMoving = false;

                                this.isDropping = false;


                                if (

                                    callback

                                ) {

                                    callback(

                                        target

                                    );

                                }

                            }

                        });

                    }

                );

            }

        });

    }


    // ========================================
    // หาเป้าหมาย
    // ========================================

    findTarget(

        capsules

    ) {


        let target = null;


        let closestDistance =

            Infinity;


        capsules.forEach(

            capsule => {


                if (

                    capsule.isGrabbed

                ) {

                    return;

                }


                const distance =

                    Math.abs(

                        capsule.body.x -

                        this.x

                    );


                if (

                    distance <

                    closestDistance

                ) {


                    closestDistance =

                        distance;


                    target =

                        capsule;

                }

            }

        );


        if (

            closestDistance <= 40

        ) {

            return target;

        }


        return null;

    }


    // ========================================
    // ปิดแขน
    // ========================================

    closeClaw() {


        this.leftArm.setTo(

            0,

            0,

            this.x,

            this.head.y,

            this.x - 12,

            this.head.y + 35,

            0x455A64

        );


        this.rightArm.setTo(

            0,

            0,

            this.x,

            this.head.y,

            this.x + 12,

            this.head.y + 35,

            0x455A64

        );

    }


    // ========================================
    // เปิดแขน
    // ========================================

    openClaw() {


        this.leftArm.setTo(

            0,

            0,

            this.x,

            this.head.y,

            this.x - 28,

            this.head.y + 45,

            0x455A64

        );


        this.rightArm.setTo(

            0,

            0,

            this.x,

            this.head.y,

            this.x + 28,

            this.head.y + 45,

            0x455A64

        );

    }

}
