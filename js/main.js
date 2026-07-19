const config = {

    type: Phaser.AUTO,

    width: 1280,

    height: 720,

    parent: "game",

    backgroundColor: "#9EDFFF",

    scene: {

        preload,

        create,

        update

    }

};

const game = new Phaser.Game(config);

let scoreText;
let claw;
let clawArmLeft;
let clawArmRight;
let clawLine;
let isMoving = false;

function preload(){

}

function create(){

    //==========================
    // พื้นหลัง
    //==========================

    this.add.rectangle(
        640,
        360,
        1280,
        720,
        0x9EDFFF
    );

    //==========================
    // หัวเกม
    //==========================

    this.add.text(

        40,

        30,

        "🎮 ตู้คีบคำศัพท์",

        {

            fontSize:"38px",

            fontStyle:"bold",

            color:"#000"

        }

    );

    scoreText=this.add.text(

        1120,

        30,

        "⭐ 0",

        {

            fontSize:"32px",

            color:"#000"

        }

    );

    this.add.text(

        1120,

        70,

        "❤️❤️❤️",

        {

            fontSize:"26px"

        }

    );



    //==========================
    // ตัวตู้
    //==========================

    const machine=this.add.container(640,360);




    machine.add(

        this.add.rectangle(

            0,

            0,

            720,

            520,

            0xffffff

        )

    );



    machine.add(

        this.add.rectangle(

            0,

            0,

            690,

            490,

            0xdff4ff

        )

    );



    // ฐานล่าง

    machine.add(

        this.add.rectangle(

            0,

            285,

            720,

            40,

            0x666666

        )

    );



    // คำอธิบาย

    this.add.text(

        520,

        650,

        "กดปุ่ม SPACE เพื่อเริ่มเกม",

        {

            fontSize:"28px",

            color:"#000"

        }

    );



    //==========================
    // ไฟ LED รอบตู้
    //==========================

    for(let i=0;i<18;i++){

        this.add.circle(

            290+i*40,

            100,

            8,

            0xffff00

        );

    }



    for(let i=0;i<18;i++){

        this.add.circle(

            290+i*40,

            620,

            8,

            0xff6699

        );

    }



    for(let i=0;i<12;i++){

        this.add.circle(

            290,

            140+i*40,

            8,

            0x66ff66

        );

    }



    for(let i=0;i<12;i++){

        this.add.circle(

            990,

            140+i*40,

            8,

            0x66ccff

        );

    }
// =====================
// แขนคีบ
// =====================

        clawLine = this.add.rectangle(
            640,
            150,
            4,
            120,
            0x444444
        );

        claw = this.add.circle(
            640,
            210,
            18,
            0xcccccc
        );

        clawArmLeft = this.add.line(
            0,
            0,
            640,
            210,
            625,
            240,
            0x444444
        );

        clawArmRight = this.add.line(
            0,
            0,
            640,
            210,
            655,
            240,
            0x444444
        );
    
    
    }

function update(){

}
