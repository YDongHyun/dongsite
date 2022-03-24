var canvas=document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width=window.innerWidth - 100;
canvas.height=window.innerHeight -100;


var dino={
  x:10, 
  y:200,
  width:50,
  height:50,
  draw(){

ctx.drawImage(img1,this.x,this.y);
  }
}

var img1= new Image();
img1.src='fox.png';

var img2= new Image();
img2.src='niddle.png';

class Cactus{
  constructor(){
    this.x=500;
    this.y=200;
    this.width=50;
    this.height=50;
  }
  draw(){

ctx.drawImage(img2,this.x,this.y);
  }
}

var timer=0;
var cactuses=[];
var jumptimer=0;
var animation;

function fh(){
  animation=requestAnimationFrame(fh);
  timer++;
  ctx.clearRect(0,0, canvas.width, canvas.height);

  if(timer%300===0){
  var cactus=new Cactus();
  cactuses.push(cactus);
}
cactuses.forEach((a,i,o)=>{
  if(a.x<0){
    o.splice(i,1)
  }
  a.x--;
  crash(dino,a);
  a.draw();
})
if(jumping==true){
  dino.y--;
  jumptimer++;
}

if(jumping==false){
  if(dino.y<200){
dino.y++;
  }
  
}
if (jumptimer>100){
  jumping=false;
  jumptimer=0
}
  dino.draw()
}
fh();

//충돌확인
function crash(dino,cactus){
  var x_distance=cactus.x-(dino.x+dino.width);
  var y_distance=cactus.y-(dino.y+dino.height);
  if(x_distance<0&&y_distance<0){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    cancelAnimationFrame(animation)
  }
}

var jumping=false;
document.addEventListener('keydown',function(e){
  if(e.code ==='Space'){
    jumping=true;
  }
})
