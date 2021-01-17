class Ball {

    constructor(x,y,r){
  
    var options={
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2

    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world, this.body);
    this.r = r;
    }

    display(){
  ellipseMode(RADIANS);
  fill("red"); 
  ellipse(this.body.position.x, this.body.position.y, this.r, this.r) ; 

}

    

    
    
    
}