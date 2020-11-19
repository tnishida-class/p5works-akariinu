// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("programming", 20, 20);
}

function balloon(t, x, y){
  let w = textWidth(t);//文字＋文字列の幅を測って返す
  let h = textAscent() + textDescent();
  let p = 5;//余白の大きさ
  rect(x - p, y - p, x + w + p, y + h + p);
  triangle(x + w + p*4, y + h, x + w + p*4, y + h + p, x + w + p*5, y + h + p/2);
  // triangle(x + w + p*8, x + h + p*4 , x + w + p*8, x + h + p*7,x + w + p*11, x + h + p*6 )
  fill(0);
  text(t, x + p, y + h + p);
  //吹き出しの場所が変えられない→x,yの指定
  //テキストの色、背景の色を変える
}
