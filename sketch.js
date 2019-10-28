let button;
let cnv;
let yourInputs = [];
let slider;
function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent("#canvasDiv");
   background(255);

   button = select('#Button');
   button.mousePressed(buttonPressed);
   button.class("Btn");
   slider = createSlider(20,200,86);


for(let i = 0; i <5; i++) {
   yourInputs.push( createInput());
   yourInputs[yourInputs.length-1].parent("inputFields");
   //yourInputs.position(100,100);
}

}

function buttonPressed(){
  //if (buttonPressed){

}



function draw() {





}












// let checkboxes = [];
// let size=100;
// function setup() {
//   createCanvas(500, 500);
//    background(0);
//    for (let i = 0; i <100; i ++ ){
//   checkboxes[i] = createCheckbox('label');
//
//   checkboxes[i].style('display','inline');
//   checkboxes[i].position(random(windowWidth)),(random(windowHeight));
//   checkboxes[i].changed(myCheckedEvent);
// }
// }
// function myCheckedEvent();
//
// function draw() {
//   ellispe(mouseX,mouseY,size);
//
// }
