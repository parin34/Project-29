class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          density: 0.3,
          friction: 0.3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };