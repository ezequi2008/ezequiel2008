function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("rgb(255,0,0)");
    fill("#020001");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  