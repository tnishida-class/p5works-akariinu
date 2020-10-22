// チェッカー
function setup() {
  createCanvas(250, 250);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      fill(150);
  rect(64 * i, 64 * j + 32, 32, 32);
  rect(64 * i + 32, 64 * j, 32, 32);
}
for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
  if(i < 4 && j < 2){
    fill(255, 0, 0);
    ellipse(64 * i + 48, 64 * j + 16, 28);
    ellipse(64 * i + 16, 74 * j - 26, 28);
  if(i >= 4 && i < 5 && j >= 2 && j < 4){
  }
  else{
    fill(0);
    ellipse(64 * i + 16, 64 * j + 16 * 11, 28);
    ellipse(64 * i + 48, 64 * j + 16 * 13, 28);
  }
  }
}
  }
  }
}
