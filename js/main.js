import BootScene from "./scenes/BootScene.js";
import PreloadScene from "./scenes/PreloadScene.js";
import MenuScene from "./scenes/MenuScene.js";
import GameScene from "./scenes/GameScene.js";
import ResultScene from "./scenes/ResultScene.js";

const config = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    parent: "game",

    backgroundColor: "#9EDFFF",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [
        BootScene,
        PreloadScene,
        MenuScene,
        GameScene,
        ResultScene
    ]
};

new Phaser.Game(config);
