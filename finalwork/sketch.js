// 最終課題を制作しよう
let x = 10;
let y = 1000;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

// キー操作でfaceが動く
function draw(){
  if(keyIsDown(LEFT_ARROW)){
   x -= 5;
}
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  if(keyIsDown(UP_ARROW)){
    y -= 10;
  }

//faceが地面より下に行かないでほしい
  y = constrain(y, 0, 3*windowHeight/5);

// jump後落ちてくる処理
  if(y<1000) { //ちょっとずつ縦速度が下がる
      y += 1.5;
    } else { //地面に着いたら縦速度を0に
      y = 0;
      y = 350;
    }

 background(224, 255, 255);
// 地面
 fill(139, 69, 19);
 rect(0,3*windowHeight/5, windowWidth, windowHeight);
 // 題名
 fill(64, 224, 208);
 text("pyon pyon pyon!!", windowWidth / 2 -30, windowHeight / 10);
 // キャラクター
 fill(210, 180, 140);
 face (x, y);
 // cloud (2*windowWidth / 5, windowHeight / 5);

//画面内で収まるように
 if(x > windowWidth){ x = windowWidth; }
  else if(x < 0){ x = 0; }
  if(y > windowHeight){ y = windowHeight; }
  if(y < 0){ y = 0; }
}

// 自作関数
function face(x, y){
  push();
  fill(255);
  ellipse(x, y - 15, 30);
  fill(0);
  ellipse(x + 4, y - 20, 2);
  ellipse(x - 4, y - 20, 2);
  pop();
}

// function cloud(x, y){
//   push();
//   noStroke();
//   fill(255);
//   for(let x = 0; x < x*6; x = x + 20){
//   ellipse(x, y, 20);
//   y +=20;
// }
//   pop();
// }
// 雲を描く関数を作りかけました

//クリックしたところにボックスできる：難しかったため今後挑戦

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
