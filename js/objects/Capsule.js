export default class Capsule{

    constructor(scene,x,y,color){

        this.sprite=scene.add.circle(
            x,
            y,
            25,
            color
        );

        scene.matter.add.gameObject(
            this.sprite,
            {

                shape:"circle"

            }

        );

        this.sprite.setBounce(.4);

        this.sprite.setFriction(.1);

    }

}
