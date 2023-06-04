function setup() {
    createCanvas(400, 300);
    background("lightyellow");
    strokeWeight(3);
  
    //ojo 1
    fill("lightyellow");
    ellipse(100, 50, 80, 90);
    fill("white");
    ellipse(100, 50, 80, 40);
    fill("tan");
    ellipse(100, 50, 40, 40);
    fill("black");
    ellipse(100, 50, 10, 10);
  
    //ojo 2
    fill("lightyellow");
    ellipse(185, 50, 80, 90);
    fill("white");
    ellipse(185, 50, 80, 40);
    fill("tan");
    ellipse(185, 50, 40, 40);
    fill("black");
    ellipse(185, 50, 10, 10);
  
    //cuerpo...
    line(62, 40, 33, 11);
    line(60, 40, 33, 11);
    line(62, 200, 33, 11);
    line(60, 40, 33, 11);
    
    //nariz
    triangle(200, 80, 140, 80);
    triangle(200, 80, 140, 100);
  }
  