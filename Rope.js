class Rope{

constructor(bodyX, pointY){

var options = {

bodyA: bodyX,
pointB: pointY,
stiffness: 1,
length: 400
}

this.pointB = pointY
this.connector = Constraint.create(options)
World.add(world, this.connector)
}


display(){
    var pointA = this.connector.bodyA.position
    var pointB = this.pointB
    stroke("white")
    strokeWeight(15)
    line(pointA.x, pointA.y, pointB.x, pointB.y)

}
}