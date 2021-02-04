class Pokemon{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.4,
            friction:0.5,
			density:1.2
        }
        this.rect1=Bodies.rectangle(displayWidth-400,displayHeight-50,300,20,options)
        World.add(world,this.rect1)
        this.rect2=Bodies.rectangle(displayWidth-550,displayHeight-120,20,150,options)
        World.add(world,this.rect2)
        this.rect3=Bodies.rectangle(displayWidth-250,displayHeight-120,20,150,options)
        World.add(world,this.rect3)
        //this.body=Bodies.circle(x,y,radius,options)
       // World.add(world,this.body)

        this.radius=radius
        this.pokemon1=loadImage("images/butterfree.png")
        this.pokemon2=loadImage("images/Shadow.webp")
        this.pokemon3=loadImage("images/beedrill.png")
        this.pokemon4=loadImage("images/charizard.png")
        this.pokemon5=loadImage("images/charmander.png")
        this.pokemon6=loadImage("images/ivysaur.png") 
        this.pokemon7=loadImage("images/Mew.png")
         this.pokemon8=loadImage("images/mewtwo.png")
         this.pokemon9=loadImage(" images/nidoking.png")
         this.pokemon10=loadImage("images/pikachu.png")
         this.pokemon11=loadImage("images/raichu-alolan.png")
         this.pokemonn12=loadImage(" images/raticate-alolan.png")
         this.pokemon13=loadImage("images/rattata-alolan.png")
         this.pokemon14=loadImage("images/venusaur.png")
    }
    display(){
        //var pos=this.body.position
        noStroke()
        rectMode(CENTER);
        fill("black")

        //rect(displayWidth-400,displayHeight-50,300,20)
        //rect(displayWidth-550,displayHeight-120,20,150)  
        //rect(displayWidth-250,displayHeight-120,20,150)  
        push()
        //translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.pokemon1,displayWidth-380,displayHeight-150,400,400)
        pop()
    }
    changePokemon(pokemonCount){
        console.log("Change Pokemon")
        console.log(pokemonCount)
        switch(pokemonCount){
            case 1: image(this.pokemon1,displayWidth-380,displayHeight-150,400,400);
            break;
            case 2: image(this.pokemon2,displayWidth-380,displayHeight-150,400,400);
            break;
            case 3: image(this.pokemon3,displayWidth-380,displayHeight-150,400,400);
            break;
            case 4: image(this.pokemon4,displayWidth-380,displayHeight-150,400,400);
            break;
            case 5: image(this.pokemon5,displayWidth-380,displayHeight-150,400,400);
            break;
            case 6: image(this.pokemon6,displayWidth-380,displayHeight-150,400,400);
            break;
            case 7: image(this.pokemon7,displayWidth-380,displayHeight-150,400,400);
            break;
            case 8: image(this.pokemon8,displayWidth-380,displayHeight-150,400,400);
            break;
            case 9: image(this.pokemon9,displayWidth-380,displayHeight-150,400,400);
            break;
            case 10: image(this.pokemon10,displayWidth-380,displayHeight-150,400,400);
            break;
            case 11: image(this.pokemon11,displayWidth-380,displayHeight-150,400,400);
            break;
            case 12: image(this.pokemon12,displayWidth-380,displayHeight-150,400,400);
            break;
            case 13: image(this.pokemon13,displayWidth-380,displayHeight-150,400,400);
            break;
            case 14: image(this.pokemon14,displayWidth-380,displayHeight-150,400,400);
            break;

        }
        
    }
}