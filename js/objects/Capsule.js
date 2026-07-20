
export default class Capsule extends Phaser.GameObjects.Container {

    constructor(scene, x, y, color = 0xffcc33) {

        super(scene, x, y);

        scene.add.existing(this);

        // ตัวลูกบอล
        this.ball = scene.add.circle(0, 0, 28, color);

        // เงา
        this.shadow = scene.add.ellipse(
            4,
            6,
            42,
            20,
            0x000000,
            0.15
        );

        // ฝาครอบ
        this.cap = scene.add.rectangle(
            0,
            -4,
            52,
            10,
            0xffffff
        );

        // ไฮไลต์
        this.light = scene.add.circle(
            -10,
            -10,
            7,
            0xffffff,
            0.7
        );

        this.add([
            this.shadow,
            this.ball,
            this.cap,
            this.light
        ]);

        // ลอยเบา ๆ
        scene.tweens.add({

            targets: this,

            y: y - 6,

            duration: 900,

            yoyo: true,

            repeat: -1,

            ease: "Sine.easeInOut"

        });

    }

}
