class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            mass:2000
        }
    this.body=Bodies.circle(x,y,15,options);
    //Matter.Bodies.circle(x,y,30,options);
    //this.radius=10;
    //this.height=10;
    World.add(world, this.body);
    }

display(){
    var pos =this.body.position
    var angle=this.body.angle;
  push();
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("purple");
    
    ellipse(pos.x, pos.y, 30);
    translate(pos.x,pos.y);
    rotate(angle);
    
    pop();
}
}
