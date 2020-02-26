// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var r = "red";
var g = "green";
var b = "blue";
var y = "yellow";
var gy = "grey";
var o = "orange";
var br = "brown";
var pointer;


function setup(){
  
  createCanvas(1400,400);

  pointer = createSprite(40,340,30,30);
  pointer.shapeColor = "black";

}


function draw(){
  background(255);
 
  pointer.x = World.mouseX;

  // change the value of Red based on the mouse movement about the X axis
  if(pointer.x<=200){
    background(r);
  }
  // change the value of Green based on the mouse movement about the X axis
  if(pointer.x>200 && pointer.x<=400){
    background(g);
  }
  // change the value of Blue based on the mouse movement about the X axis
  if(pointer.x>400 && pointer.x<=600){
    background(b);
  }
  // change the value of Yellow based on the mouse movement about the X axis
  if(pointer.x>600 && pointer.x<=800){
    background(y);
  }
  // change the value of Grey based on the mouse movement about the X axis
  if(pointer.x>800 && pointer.x<=1000){
    background(gy);
  }
  // change the value of Orange based on the mouse movement about the X axis
  if(pointer.x>1000 && pointer.x<=1200){
    background(o);
  }
  // change the value of Brown based on the mouse movement about the X axis
  if(pointer.x>1200 && pointer.x<=1400){
    background(br);
  }
  // Use the map() function to do so. 
  
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  drawSprites();
}