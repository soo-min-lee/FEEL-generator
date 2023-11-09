let font;
let sliders = [];
const sliderColors = [
  [255, 77, 0],   // Red Orange
  [255, 62, 181], // Magenta Pink
  [255, 255, 0],  // Yellow
  [255, 255, 255],// White
  [0, 166, 81],   // Green
  [0, 174, 239],  // Cyan
  [46, 49, 146],  // Indigo
  [0, 0, 0],      // Black
];

function preload() {
  font = loadFont('GoodSans-Bold.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  noStroke();
  background('#ffffff');
  
  textFont(font); // Set the preloaded font
  textSize(11);

  // Array to store labels for each slider
  let sliderLabels = [
    'ANGRY', 'FRUSTRATED', 'SAD', 'ANXIOUS',
    'RELAXED', 'CONFIDENT', 'HAPPY', 'EXCITED'
  ];

  // Position for the first label
  let labelX = 10;
  let labelY = 30;

  for (let i = 0; i < sliderColors.length; i++) {
    // Create a slider
    let slider = createSlider(0, 5, 0);
    slider.position(15 + i * 150, 50);
    sliders.push(slider);

    // Display the label for the slider using the preloaded font
    fill(0); // Set the text color to black
    text(sliderLabels[i], labelX, labelY);
    labelX += 150;
  }
}

function draw() {
  // No need for continuous execution here
  translate(0, 100);
}

function generateColumns() {
  for (let i = 0; i < sliders.length; i++) {
    let sliderValue = sliders[i].value();

    // Calculate the number of columns and rows based on canvas size
    let rowCount = int(random(1, 15));
    let columnCount = int(random(1, 15));

    let rowHeight = height / rowCount;
    let columnWidth = width / columnCount;

    let counter = 0;

    for (let j = 0; j < rowCount; j++) {
      let partCount = int(random(0, 2));
      let parts = [];

      for (let k = 0; k < partCount; k++) {
        parts.push(random(2, 20));
      }

      let sumPartsNow = 0;
      for (let m = 0; m < parts.length; m++) {
        sumPartsNow += parts[m];

        let x = counter * columnWidth;
        let y = j * rowHeight;
        let w = columnWidth;
        let h = rowHeight;

        // Use the current slider's value to get the corresponding color
        let sliderColor = color(
          sliderColors[i][0],
          sliderColors[i][1],
          sliderColors[i][2]
        );
        fill(sliderColor);
        rect(x, y, w, h);
        counter++;
        /*for (let i = 0; i < 10; i ++) {
        ellipse(x, y, w, h);
        rotate(PI/5);

        counter++;
      }*/
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas(generateFileName(), 'png');
  }
}

function generateFileName() {
  return 'FEEL_Generator';
}

function mouseReleased() {
  generateColumns();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  let fs = fullscreen();
  fullscreen(!fs);
}
