// 小手調べ
function setup(){
  createCanvas(110,110);
  background(255);
  noFill();
  for(let i = 0; i < 50; i++){
    // BLANK[1]
  for(let s = 10; s <= 110; s = s + 10){
  if(s <= 60){
  stroke(0, 0, 255);
}
else{
  stroke(255, 0, 0);
}
ellipse(50, 50, s);
  }
}
}
