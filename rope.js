class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
            pointB : {x: this.offsetX, y: this.offsetY},
            stiffness: 0.04,
            length: 10
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        //this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
        }
    }
     Fly() {
         this.rope.bodyA = null;
     }
    
}