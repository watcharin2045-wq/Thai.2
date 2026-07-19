import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import GameScene from "./scenes/GameScene.js";

const config = {

    type: Phaser.AUTO,

    width: 1280,

    height: 720,

    parent: "game",

    backgroundColor: "#9EDFFF",

    scene: [

        BootScene,

        MenuScene,

        GameScene

    ]

};

new Phaser.Game(config);
