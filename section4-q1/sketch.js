// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size >= 50
}

function draw(){
  background(160, 192, 255);
  count = (count + 2) % cycle;
   let size;
   if (count < 30){
     size = 100 - count
   }
    size = count;
    noStroke();
    fill(255, 0, 0);
  ellipse(width / 2, height / 2, size)
}
