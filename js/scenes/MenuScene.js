// ========================================
// MenuScene.js
// หน้าเลือกหมวดคำศัพท์
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

        this.cameras.main.setBackgroundColor(

            "#9EDFFF"

        );


        // ========================================
        // ชื่อเกม
        // ========================================

        this.add.text(

            640,

            65,

            "🎮 ตู้คีบคำศัพท์",

            {

                fontSize: "58px",

                fontFamily: "Arial",

                fontStyle: "bold",

                color: "#0D47A1"

            }

        )

        .setOrigin(0.5);


        // ========================================
        // คำอธิบาย
        // ========================================

        this.add.text(

            640,

            135,

            "เลือกหมวดคำศัพท์ที่ต้องการเรียนรู้",

            {

                fontSize: "28px",

                fontFamily: "Arial",

                color: "#333333"

            }

        )

        .setOrigin(0.5);


        // ========================================
        // หมวดคำศัพท์
        // ========================================

        const categories = [

            {

                id: "basic",

                icon: "🔤",

                title: "พยัญชนะและสระ",

                subtitle: "ฝึกอ่านคำง่าย ๆ",

                color: 0xFFD54F

            },

            {

                id: "reading",

                icon: "📖",

                title: "อ่านคำง่าย ๆ",

                subtitle: "ฝึกอ่านคำพื้นฐาน",

                color: 0x81D4FA

            },

            {

                id: "animals",

                icon: "🐶",

                title: "หมวดสัตว์",

                subtitle: "คำศัพท์เกี่ยวกับสัตว์",

                color: 0x81C784

            },

            {

                id: "fruits",

                icon: "🍎",

                title: "หมวดผลไม้",

                subtitle: "คำศัพท์เกี่ยวกับผลไม้",

                color: 0xFF8A80

            },

            {

                id: "objects",

                icon: "🏠",

                title: "สิ่งของรอบตัว",

                subtitle: "คำศัพท์ใกล้ตัวเรา",

                color: 0xCE93D8

            }

        ];


        // ========================================
        // สร้างปุ่ม
        // ========================================

        categories.forEach(

            (category, index) => {


                const x =

                    220 +

                    (index % 3) *

                    420;


                const y =

                    230 +

                    Math.floor(

                        index / 3

                    ) *

                    170;


                this.createCategoryButton(

                    category,

                    x,

                    y

                );

            }

        );


        // ========================================
        // เริ่มเกม
        // ========================================

        const startButton =

            this.add.text(

                640,

                650,

                "▶️  เริ่มเล่น",

                {

                    fontSize: "34px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#FFFFFF",

                    backgroundColor: "#1976D2",

                    padding: {

                        left: 35,

                        right: 35,

                        top: 15,

                        bottom: 15

                    }

                }

            )

            .setOrigin(0.5)

            .setInteractive({

                useHandCursor: true

            });


        startButton.on(

            "pointerdown",

            () => {


                if (

                    !this.selectedCategory

                ) {

                    this.selectedCategory =

                        "basic";

                }


                this.scene.start(

                    "GameScene",

                    {

                        category:

                            this.selectedCategory

                    }

                );

            }

        );


        // ========================================
        // เลือกหมวดเริ่มต้น
        // ========================================

        this.selectedCategory =

            "basic";

    }


    // ========================================
    // สร้างปุ่มหมวด
    // ========================================

    createCategoryButton(

        category,

        x,

        y

    ) {


        // ========================================
        // พื้นหลัง
        // ========================================

        const box =

            this.add.rectangle(

                x,

                y,

                340,

                125,

                category.color

            );


        box.setStrokeStyle(

            5,

            0xFFFFFF

        );


        box.setInteractive({

            useHandCursor: true

        });


        // ========================================
        // ไอคอน
        // ========================================

        const icon =

            this.add.text(

                x - 130,

                y,

                category.icon,

                {

                    fontSize: "55px"

                }

            )

            .setOrigin(0.5);


        // ========================================
        // ชื่อหมวด
        // ========================================

        const title =

            this.add.text(

                x + 15,

                y - 20,

                category.title,

                {

                    fontSize: "26px",

                    fontFamily: "Arial",

                    fontStyle: "bold",

                    color: "#263238"

                }

            )

            .setOrigin(0.5);


        // ========================================
        // คำอธิบาย
        // ========================================

        const subtitle =

            this.add.text(

                x + 15,

                y + 20,

                category.subtitle,

                {

                    fontSize: "18px",

                    fontFamily: "Arial",

                    color: "#455A64"

                }

            )

            .setOrigin(0.5);


        // ========================================
        // รวม Object
        // ========================================

        const objects = [

            box,

            icon,

            title,

            subtitle

        ];


        // ========================================
        // Hover
        // ========================================

        box.on(

            "pointerover",

            () => {


                objects.forEach(

                    object => {

                        object.setScale(

                            1.05

                        );

                    }

                );

            }

        );


        box.on(

            "pointerout",

            () => {


                objects.forEach(

                    object => {

                        object.setScale(

                            1

                        );

                    }

                );

            }

        );


        // ========================================
        // เลือกหมวด
        // ========================================

        box.on(

            "pointerdown",

            () => {


                this.selectedCategory =

                    category.id;


                // ========================================
                // แสดงหมวดที่เลือก
                // ========================================

                this.selectedText?.destroy();


                this.selectedText =

                    this.add.text(

                        640,

                        580,

                        "เลือก: " +

                        category.icon +

                        " " +

                        category.title,

                        {

                            fontSize: "26px",

                            fontFamily: "Arial",

                            fontStyle: "bold",

                            color: "#0D47A1"

                        }

                    )

                    .setOrigin(0.5);

            }

        );

    }

}
