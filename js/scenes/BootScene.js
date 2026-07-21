// ========================================
// BootScene
// Thai Claw Game V4.0
// ========================================


export default class BootScene extends Phaser.Scene {


    constructor() {

        super("BootScene");

    }


    // ----------------------------------------
    // เริ่มต้น Scene
    // ----------------------------------------

    create() {


        console.log(
            "Thai Claw Game V4.0"
        );


        console.log(
            "BootScene Started"
        );


        // ----------------------------------------
        // ไปยัง PreloadScene
        // ----------------------------------------

        this.scene.start(
            "PreloadScene"
        );


    }


}
