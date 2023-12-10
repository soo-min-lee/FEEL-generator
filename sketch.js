let fontR;
let fontB;
let sliders = [];
let sliderColors = [
  [255, 77, 0], // Red Orange
  [255, 62, 181], // Magenta Pink
  [255, 255, 0], // Yellow
  [255, 255, 255], // White
  [0, 166, 81], // Green
  [0, 174, 239], // Cyan
  [46, 49, 146], // Indigo
  [0, 0, 0], // Black
];
let sliderImages = [];

function preload() {
  fontR = loadFont("GroteskRemix-Regular.otf");
  fontB = loadFont("BeausiteClassic-Bold_web.woff2.ttf");
}

// Function to navigate to another HTML page
function goToAnotherPage() {
  window.location.href = "another_page.html";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  noStroke();
  background("#ffffff");
  frameRate(10);

  textFont(fontB); // Set the preloaded font
  textSize(13);
  fill("#545454");
  // Array to store labels for each slider
  let sliderLabels = [
    "RELAXED",
    "CONFIDENT",
    "HAPPY",
    "EXCITED",
    "FRUSTRATED",
    "SAD",
    "ANXIOUS",
    "ANGRY",
  ];

  // Position for the first label
  let labelX = 10;
  let labelY = 40;

  for (let i = 0; i < sliderColors.length; i++) {
    // Create a slider
    let slider = createSlider(0, 5, 0);
    slider.position(10 + i * 150, 50);
    sliders.push(slider);

    // Display the label for the slider using the preloaded font
    //fill(0); // Set the text color to black
    text(sliderLabels[i], labelX, labelY);
    labelX += 150;
  }

  sliderImages = [
    //relaxed = cyan
    loadImage("pattern-01.png"),
    //confident = green
    loadImage("pattern-08.png"),
    //happy = yellow
    loadImage("pattern-03.png"),
    //excited = pink
    loadImage("pattern-02.png"),
    //frustrated = white
    loadImage("pattern-07.png"),
    //sad = navy
    loadImage("pattern-04.png"),
    //anxious = black
    loadImage("pattern-06.png"),
    //angry = red
    loadImage("pattern-05.png"),

    //loadImage("test.jpg"),
  ];
}

let play = true;
function draw() {
  fill(0); // Set text color to black
  textFont(fontR);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("Hey designer, how do you feel today?", width / 2, height / 2);

  // No need for continuous execution here
  translate(0, 80);

  if (play == true) {
    for (let i = 0; i < sliders.length; i++) {
      let sliderValue = sliders[i].value();

      for (let j = 0; j < sliderValue; j++) {
        // Use the current slider's value to get the corresponding color
        // let sliderColor = color(
        //   sliderColors[i][0],
        //   sliderColors[i][1],
        //   sliderColors[i][2]
        // );
        // fill(sliderColor);
        // rect(random(0, width), random(0, height), random(10, 100), random(10, 100));

        image(
          sliderImages[i],
          random(0, width),
          random(0, height),
          random(10, 350), //1000
          random(10, 350) //1000
        );
      }
    }
  }

  function generateColumns() {
    //     let counter = 0;
    //     for (let j = 0; j < rowCount; j++) {
    //       let partCount = int(random(0, 2));
    //       let parts = [];
    //       for (let k = 0; k < partCount; k++) {
    //         parts.push(random(2, 20));
    //       }
    //       let sumPartsNow = 0;
    //       for (let m = 0; m < parts.length; m++) {
    //         sumPartsNow += parts[m];
    //         let x = counter * columnWidth;
    //         let y = j * rowHeight;
    //         let w = columnWidth;
    //         let h = rowHeight;
    //         // Use the current slider's value to get the corresponding color
    //         let sliderColor = color(
    //           sliderColors[i][0],
    //           sliderColors[i][1],
    //           sliderColors[i][2]
    //         );
    //         fill(sliderColor);
    //         rect(x, y, w, h);
    //         /*
    //         fill(sliderColor);
    //         for (let i = 0; i < 10; i ++) {
    //         ellipse(x, y, w, h);
    //         rotate(PI/5);
    //         }
    //         counter++;*/
    //       }
    // }
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas(generateFileName(), "png");
  }
  if (key === "r") {
    background("#ffffff");

    textFont(fontB); // Set the preloaded font
    textSize(13);
    fill("#545454");
    // Array to store labels for each slider
    let sliderLabels = [
      "RELAXED",
      "CONFIDENT",
      "HAPPY",
      "EXCITED",
      "FRUSTRATED",
      "SAD",
      "ANXIOUS",
      "ANGRY",
    ];

    // Position for the first label
    let labelX = 10;
    let labelY = 40;

    translate(30, -73);
    for (let i = 0; i < sliderColors.length; i++) {
      // Display the label for the slider using the preloaded font
      fill(0); // Set the text color to black
      text(sliderLabels[i], labelX, labelY);
      labelX += 150;
    }
  }
  if (key === " ") {
    play = !play;
  }
}

function generateFileName() {
  return "FEEL_Generator";
}

function mouseReleased() {
  // generateColumns();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
