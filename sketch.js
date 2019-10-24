function setup() {
  createCanvas(500, 500);
   background(0);
  stroke(0,255,0);
  
 // line(0,0,500,50);
 // line(0,0,500,100);

  for(let i= 1; i<10; i++){
  for(let j = 1; j <10; j++){
    noStroke();
    fill(random(255)-j*10,random(255)-j*10,random(255)-j*20);
    circle(i*50,j*50,i*3);
  }
}
  for(let i = 0; i<10; i++){
  line(0,0,500,i*150);
  stroke(random(255)-i*15,random(255)-i*10,random(255)-i*20);
  line(500,500, i*150,0);
   line(0,500, i*150,0);
   line(450,0, i*150,0);
}
}

function draw() {
  
}
 
