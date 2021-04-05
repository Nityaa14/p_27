class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        this.width = radius;
        this.height = radius;
        this.body = Bodies.circle(x, y, radius/2, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}