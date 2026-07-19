
export default class BootScene extends Phaser.Scene{

    constructor(){

        super("BootScene");

    }

    preload(){

        console.log("Loading...");

    }

    create(){

        this.scene.start("MenuScene");

    }

}
