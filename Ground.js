class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
        
          this.width=width;
          this.height=height;
          this.ground = Bodies.rectangle(x,y,this.width,this.height,ground_options)
          World.add(world,this.ground);
    }
    display(){
        push();
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
        pop();
    }
}