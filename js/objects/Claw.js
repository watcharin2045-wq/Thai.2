
export default class Claw {

    constructor(scene) {

        this.scene = scene;

        this.isMoving = false;

        // เชือก
        this.rope = scene.add.rectangle(
            640,
            120,
            4,
            120,
            0x444444
        );

        // หัวแขนคีบ
        this.head = scene.add.circle(
            640,
            180,
            18,
            0xdddddd
        );

        // แขนซ้าย
        this.left = scene.add.line(
            0,
            0,
            640,
            180,
            622,
            210,
            0x555555
        );

        // แขนขวา
        this.right = scene.add.line(
            0,
            0,
            640,
            180,
            658,
            210,
            0x555555
        );

    }

    moveDown() {

        if (this.isMoving) return;

        this.isMoving = true;

        this.scene.tweens.add({

            targets: [
                this.rope,
                this.head,
                this.left,
                this.right
            ],

            y: "+=230",

            duration: 900,

            ease: "Sine.easeInOut",

            onComplete: () => {

                this.scene.time.delayedCall(300, () => {

                    this.moveUp();

                });

            }

        });

    }

    moveUp() {

        this.scene.tweens.add({

            targets: [
                this.rope,
                this.head,
                this.left,
                this.right
            ],

            y: "-=230",

            duration: 900,

            ease: "Sine.easeInOut",

            onComplete: () => {

                this.isMoving = false;

            }

        });

    }

}
