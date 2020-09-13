class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
           
          friction:1,
          density:1.2


      }
      this.body = Bodies.circle(x,y,radius,options,);
this.radius=radius;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      fill("orange");
      ellipseMode(RADIUS);
 ellipse(pos.x,pos.y,20,20)
    }
  };