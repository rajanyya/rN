class CreateDrop{
    constructor(x,y,){
        var options = {
            friction= 0.1
        }
        this.rain= Bodies.circle(x,y,12);
        this.x = x;
        this.y = y;
    World.add(world,this.rain);

    }

    update(){
        if(this.rain.position.y>height){
            Matter.body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        fill("light blue");
        ellipse(this.x,this.y,10,10);
    }
}