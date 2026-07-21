// ========================================
// MenuScene
// Thai Claw Game V4.0
// ========================================

export default class MenuScene extends Phaser.Scene {

    constructor() {
        super("MenuScene");
    }

    create() {

        // ========================================
        // พื้นหลัง
        // ========================================

        this.cameras.main.setBackgroundColor("#9EDFFF");


        // ========================================
        // ชื่อเกม
        // ========================================

        this.add.text(
            640,
            150,
            "🎮 ตู้คีบคำศัพท์",
            {
                fontSize: "64px",
                fontFamily: "Arial",
                fontStyle: "bold",
                color: "#0D47A1",
                stroke: "#FFFFFF",
                strokeThickness: 8
            }
        ).setOrigin(0.5);


        // ========================================
        // คำอธิบาย
        // ========================================

        this.add.text(
            640,
            240,
            "เกมฝึกอ่านคำภาษาไทย",
            {
                fontSize: "30px",
                fontFamily: "Arial",
                color: "#333333"
            }
        ).setOrigin(0.5);


        // ========================================
        // ปุ่มเริ่มเกม
        // ========================================

        const startButton = this.add.rectangle(
            640,
            380,
            300,
            90,
            0xFFD54F
        )
        .setStrokeStyle(5, 0xF57F17)
        .setInteractive({
            useHandCursor: true
        });


        // ข้อความปุ่ม

        this.add.text(
            640,
            380,
            "▶ เริ่มเกม",
            {
                fontSize: "40px",
                fontFamily: "Arial",
                fontStyle: "bold",
                color: "#5D4037"
            }
        ).setOrigin(0.5);


        // ========================================
        // Animation ปุ่ม
        // ========================================

        this.tweens.add({

            targets: startButton,

            scaleX: 1.05,

            scaleY: 1.05,

            duration: 700,

            yoyo: true,

            repeat: -1,

            ease: "Sine.easeInOut"

        });


        // ========================================
        // เมื่อเอาเมาส์วางบนปุ่ม
        // ========================================

        startButton.on(
            "pointerover",
            () => {

                startButton.setFillStyle(
                    0xFFEB3B
                );

            }
        );


        // ========================================
        // เมื่อเอาเมาส์ออกจากปุ่ม
        // ========================================

        startButton.on(
            "pointerout",
            () => {

                startButton.setFillStyle(
                    0xFFD54F
                );

            }
        );


        // ========================================
        // กดปุ่มเริ่มเกม
        // ========================================

        startButton.on(
            "pointerdown",
            () => {

                this.scene.start(
                    "GameScene"
                );

            }
        );


        // ========================================
        // วิธีเล่น
        // ========================================

        this.add.text(
            640,
            520,
            "🕹️ วิธีเล่น",
            {
                fontSize: "28px",
                fontFamily: "Arial",
                fontStyle: "bold",
                color: "#1565C0"
            }
        ).setOrigin(0.5);


        this.add.text(
            640,
            570,
            "กดปุ่ม SPACE เพื่อปล่อยแขนคีบลงไปคีบแคปซูล",
            {
                fontSize: "22px",
                fontFamily: "Arial",
                color: "#333333"
            }
        ).setOrigin(0.5);


        // ========================================
        // เครดิต
        // ========================================

        this.add.text(
            640,
            670,
            "ห้องเรียนคอฟอ",
            {
                fontSize: "22px",
                fontFamily: "Arial",
                color: "#555555"
            }
        ).setOrigin(0.5);

    }

}
