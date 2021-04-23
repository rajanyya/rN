var maxDrops=100;
var drops;
function preload(){
    
}

function setup(){
   var canvas= createCanvas(500,500)
    
   drops= new CreateDrop(this.rain.position.x,this.rain.position.y,10,10)
}

function draw(){

    for(var i=0; i<maxDrops; i++){
        drops.push(new CreateDrop(random(0,400), random(0,400)))

        drops.update();
        drops.display();

    }
}   

