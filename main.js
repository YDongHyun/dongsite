window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    class Ball{
      constructor(x,y){ 
        this.x = x;
        this.y = y;
        this.c = 'rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'; 
        this.size = 20;
        this.angle = (Math.random()*(Math.PI*2));
        this.power = 10;
        this.directionX = this.power * Math.cos(this.angle);
        this.weight = this.power * Math.sin(this.angle);
      }
      update(){ 
        this.y += this.weight;
        this.x += this.directionX;
   
       
        if(this.y+this.size>canvas.height || this.y-this.size<0){ 
          this.weight *= -1; 
        }
        if(this.x>canvas.width-this.size || this.x-this.size < 0) { 
          this.directionX *= -1;
        }
      }
      draw(){ 
         ctx.fillStyle= this.c;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
         ctx.closePath();
         ctx.fill();
      }
    }
   
    init = () => { 
        ball1 = new Ball(canvas.width*0.5, canvas.height*0.5)
    }
    function animate(){ 
      ctx.fillStyle='rgba(232,255,232,0.5)';
      ctx.fillRect(0,0,canvas.width,canvas.height); 
      ball1.update();
      ball1.draw();
      window.addEventListener('resize',function(){ 
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
      })
      requestAnimationFrame(animate);
    }
    init(); 
    animate();
    }
