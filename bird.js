class Bird extends BaseClass {

    //properties
    constructor(x,y) {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    //1st step
    this.smoke = loadImage("sprites/smoke.png");
    //2nd step
    //the array element has been created without any element
    //empty array
    this.trajectory = [];
}

//method
display() {
   // this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
    super.display();


    if(this.body.velocity.x > 10 && this.body.position.x >200)
    {
        var birdPosition = [this.body.position.x,this.body.position.y];
        this.trajectory.push(birdPosition);
        //trajectory [ [x1,y1], [x2,y2], [x3,y3]];
    }

    for(var i=0; i<this.trajectory.length; i++)
    {
          image(this.smoke, this.trajectory[i][0], this.trajectory[i][1])
    }

}   

}

