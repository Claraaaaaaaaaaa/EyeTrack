let emojis = ["🕕", "🕧", "🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦"]; 
let randomEmoji;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#222222');
  
  textSize(200); 
  textAlign(CENTER, CENTER); 
  
  if (typeof webgazer !== 'undefined') {
    console.log('WebGazer.js 加载成功');
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data) {
        let gazeX = data.x;
        let gazeY = data.y;

        fill(random(255), random(255), random(255), 100);
        ellipse(gazeX, gazeY, 50, 50);  
      }
    }).begin();
  } else {
    console.error('WebGazer.js 未加载');
  }
}

function draw() {
  background('#222222');  
  if (randomEmoji) {
    fill(0);
    text(randomEmoji, width / 2, height / 2);  
  }
}

function mousePressed() {

  randomEmoji = random(emojis);
}
