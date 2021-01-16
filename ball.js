class Ball{
    constructor(x,y,radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
         isStatic:false
        }
        this.image=loadImage("polygon.png")
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position

        push();
        //translate(pos.x,pos.y)
        //ellipseMode(CENTER)
        //ellipse(0,0,this.radius,this.radius)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius)
        pop();
    }
}