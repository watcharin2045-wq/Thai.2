const config={

type:Phaser.AUTO,

width:1280,

height:720,

parent:"game",

backgroundColor:"#9EE8FF",

scene:{

preload:preload,

create:create,

update:update

}

};

const game=new Phaser.Game(config);

function preload(){

}

function create(){

this.add.text(

450,

40,

"🎮 ตู้คีบคำศัพท์",

{

fontSize:"40px",

color:"#000"

}

);

}

function update(){

}
