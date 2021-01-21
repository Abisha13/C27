class Chain{
    constructor(bodyA,bodyB){
        var options={
            'bodyA' :bird.body,
             'bodyB': constrainedLog.body,
             'stiffness':0.04,
             'length': 10,
           }
         var chain=Constraint.create(options)
    World.add(world,chain)

        }
        display(){
            strokeWeight(3)
            line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y)
        }

}