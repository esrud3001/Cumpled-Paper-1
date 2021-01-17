class Dustbin{

    constructor(x,y){
    
    this.box1=Bodies.rectangle(x,y,200,20,{isStatic:true});
    World.add(world, this.box1);
    
    this.box2=Bodies.rectangle(x-100,y-90,20,200,{isStatic:true});
    World.add(world, this.box2);

    this.box3=Bodies.rectangle(x+100,y-90,20,200,{isStatic:true});
    World.add(world, this.box3);

    }

    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.box1.position.x,this.box1.position.y,200,20);
        rect(this.box2.position.x, this.box2.position.y,20,200);
        rect(this.box3.position.x, this.box3.position.y,20,200)
    }



}