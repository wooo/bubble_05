var bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (var i=0;i <10;i++) {  //the number of objects
    var x = random (0, width);
    var y = random (0, height);
    bubbles.push(new Bubble(x, y));
  }
}


  function draw() {
    background(0);
    for (var i=0; i < bubbles.length; i++) {
    bubbles [i].move();
    bubbles [i].display();
  }
}
  
  

  