function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
    background(100)
}
  
function draw() {
    circle(mouseX, mouseY, (mouseX+mouseY)/10);
}