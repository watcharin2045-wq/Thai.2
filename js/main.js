// ========================================
// Thai Claw Game
// V4.0
// Main Entry
// ========================================


// ----------------------------------------
// นำเข้า Scene
// ----------------------------------------

import BootScene from "./scenes/BootScene.js";

import PreloadScene from "./scenes/PreloadScene.js";


// ----------------------------------------
// ตั้งค่า Phaser
// ----------------------------------------

const config = {

    // เลือก Renderer อัตโนมัติ
    type: Phaser.AUTO,


    // ขนาดเกม
    width: 1280,

    height: 720,


    // HTML Element ที่ใช้แสดงเกม
    parent: "game",


    // ปรับขนาดตามหน้าจอ
    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    },


    // สีพื้นหลังเริ่มต้น
    backgroundColor: "#9EDFFF",


    // ระบบ Scene
    scene: [

        BootScene,

        PreloadScene

    ]

};


// ----------------------------------------
// สร้างเกม Phaser
// ----------------------------------------

new Phaser.Game(config);
