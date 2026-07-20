export default class MenuScene extends Phaser.Scene {

    constructor() {
        super("MenuScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#87CEEB");

        this.add.text(
            640,
            150,
            "🎮 ตู้คีบคำศัพท์",
            {
                fontSize: "56px",
                color: "#000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        const btn = this.add.rectangle(
            640,
            400,
            260,
            80,
            0xFFD54F
        ).setInteractive();

        this.add.text(
            640,
            400,
            "เริ่มเกม",
            {
                fontSize: "36px",
                color: "#000"
            }
        ).setOrigin(0.5);

        btn.on("pointerdown", () => {

            this.scene.start("GameScene");

        });

    }

}
