class Bird extends BaseClass{
  constructor(x,y){

    super(x,y,50,50);
    this.image1 = loadImage ("sprites/smoke.png")
    this.image = loadImage("sprites/bird.png");
    this.tragectory=[]
  }
  display(){
var pos=[this.body.position.x,this.body.position.y]
if (this.body.position.x > 200 && this.body.velocity.x>10){
  this.tragectory.push(pos)
}
for(var i= 0; i < this.tragectory.length; i++ ){
  image(this.image1 ,this.tragectory [i][0],this.tragectory[i][1])
}
    super.display();
  }
}