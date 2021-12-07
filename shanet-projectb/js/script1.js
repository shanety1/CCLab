let img;

function preload() {
  img = loadImage("img/henry.png");
}

function setup() {
  let canvas = createCanvas(650, 900);
  canvas.id("p5-canvas");
  background(220);
}

function draw() {
  //image(img, 0, 0);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(5, 30);

    let clr = img.get(x, y);

    let r = red(clr);
    let g = green(clr);
    let b = blue(clr);
    fill(r, g, b);

    noStroke();
    circle(x, y, dia);
  }
}
