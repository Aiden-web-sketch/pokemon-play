class Pokemon{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    this.pokemon=loadImage("images/charmander.png")   
    this.width=width
    this.height=height
    }
    display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
     imageMode(CENTER)
     image(this.pokemon,0,0,this.width,this.height)
     pop()
    }
    }