function setup() {
  let canvas = createCanvas(500, 400);
  canvas.id("p5-canvas");
  background(255,254,234);
}

function draw() {
  drawBear(0, 0);
    textWrap(WORD);
    textSize(20);
    text('Welcome to Bear Gallery where we feature paintings from young talents. This collection spotlights young talents, as they explore their passion in arts throughout their youth. Hope you enjoy <3',10,10,500,400);
  }

  function drawBear() {
    push();
    drawBody();
    drawFace();
    drawPouch();
    pop();

    function drawBody(x, y, a, s) {
      push();
      noStroke();
      fill(139, 69, 19);
      ellipse(250, 200, 90, 80);
      ellipse(250, 280, 95, 100);
      ellipse(225, 320, 35, 60);
      ellipse(275, 320, 35, 60);
      ellipse(200, 245, 60, 35);
      ellipse(298, 245, 60, 35);
      ellipse(228, 160, 35, 35);
      ellipse(278, 160, 35, 35);
      pop();
    }
    function drawFace(x, y, a, s) {
      push();
      fill(0);
      ellipse(222, 200, 10, 10);
      ellipse(276, 200, 10, 10);
      ellipse(249, 215, 8, 8);
      pop();
    }
    function drawPouch(x, y, a, s) {
      push();
      noStroke();
      fill(255);
      ellipse(250, 280, 55, 70);
      pop();
    }
  }
