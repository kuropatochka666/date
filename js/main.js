  var $circle = document.querySelector('.mouse-hover');

var move;
var moveC  = function moveCircle(e) {

   move = TweenLite.to($circle, 0.9, {
    css: {
      left: e.pageX,
      top: e.pageY,
      position: 'absolute'
    }
  });

  if (checker) {
    move.kill();
  } 

}



function moveOutCircle(e) {

  var moveOut = TweenLite.to($circle, 1.5, {
    css: {
      left: '36%',
      top: '85%'

    }
  }); 

}



  
  




if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
  } else {
    document.querySelector('.mouse-hover').style.position = 'absolute';
    document.querySelector('.mouse-hover').style.left = '36%';
    
    
      
    

    var checker = false;
    var menu = document.querySelector('.nav');



    menu.onmouseover = function(){
    checker = true;
    TweenLite.killTweensOf(move);
    }

    menu.onmouseout  = function(){
      moveOutCircle();
      checker = false;
    }

    document.querySelector('body').addEventListener("mousemove", moveC);
    
   
   
}
 



// тут нижен два варианта без сторонних библиотек, но не они не такие красивые как с ней 

//Первый вариант

// var xmouse, ymouse;
// document.addEventListener('mousemove', function (e) {
//   xmouse = e.clientX || e.pageX;
//   ymouse = e.clientY || e.pageY;
// });

// var ball = document.querySelector('.mouse-hover');
// var x = void 0,
//     y = void 0,
//     dx = void 0,
//     dy = void 0,
//     tx = 0,
//     ty = 0,
//     key = -1;

// var followMouse = function followMouse() {

//   key = requestAnimationFrame(followMouse);

//   if(!x || !y) {
//     x = xmouse;
//     y = ymouse;
//   } else {
//     dx = (xmouse - x) * 0.125;
//     dy = (ymouse - y) * 0.125;
//     if(Math.abs(dx) + Math.abs(dy) < 0.1) {
//       x = xmouse;
//       y = ymouse;
//     } else {
//       x += dx;
//       y += dy;
//     }
//   }
//   ball.style.left = x + 'px';
//   ball.style.top = y + 'px';
// };
// followMouse();




//Второй вариант

// var bee = document.querySelector('.mouse-hover');
// 		document.addEventListener("mousemove", getMouse); 


// 		bee.style.position = "absolute";		
// 		var circle = {x:600, y:850};

// 		setInterval(followMouse, 50);
		
// 		var mouse = {x:0, y:0}; 
		
// 		function getMouse(e){
// 			mouse.x = e.pageX;
// 			mouse.y = e.pageY;
// 			console.log(mouse.x+"|"+mouse.y);

// 		}
		
// 		function followMouse(){
			
// 			var distX = mouse.x - circle.x;
// 			var distY = mouse.y - circle.y;


// 			circle.x += distX/5;
// 			circle.y += distY/2;
			
// 			bee.style.left = circle.x + "px";
// 			bee.style.top = circle.y + "px";

			
// 		}


function f(){
   document.getElementById('letter1').classList.remove('unvis');
    document.getElementById('letter1').classList.add('vis');
 }
 function f2(){
   document.getElementById('letter2').classList.remove('unvis');
    document.getElementById('letter2').classList.add('vis');
 }
  function f3(){
   document.getElementById('letter3').classList.remove('unvis');
    document.getElementById('letter3').classList.add('vis');
 }
 function f4(){
   document.getElementById('letter4').classList.remove('unvis');
    document.getElementById('letter4').classList.add('vis');
 }
  function f5(){
   document.getElementById('letter5').classList.remove('unvis');
    document.getElementById('letter5').classList.add('vis');
 }
 function f6(){
   document.getElementById('letter6').classList.remove('unvis');
    document.getElementById('letter6').classList.add('vis');
 }
  function f7(){
   document.getElementById('letter7').classList.remove('unvis');
    document.getElementById('letter7').classList.add('vis');
 }
 function f8(){
   document.getElementById('letter8').classList.remove('unvis');
    document.getElementById('letter8').classList.add('vis');
 }
  function f9(){
   document.getElementById('letter9').classList.remove('unvis');
    document.getElementById('letter9').classList.add('vis');
 }
 function f10(){
   document.getElementById('letter10').classList.remove('unvis');
    document.getElementById('letter10').classList.add('vis');
 }
  function f11(){
   document.getElementById('letter11').classList.remove('unvis');
    document.getElementById('letter11').classList.add('vis');
 }
 function f12(){
   document.getElementById('letter12').classList.remove('unvis');
    document.getElementById('letter12').classList.add('vis');
 }
  function f13(){
   document.getElementById('letter13').classList.remove('unvis');
    document.getElementById('letter13').classList.add('vis');
 }
 function f14(){
   document.getElementById('letter14').classList.remove('unvis');
    document.getElementById('letter14').classList.add('vis');
 }
  function f15(){
   document.getElementById('letter15').classList.remove('unvis');
    document.getElementById('letter15').classList.add('vis');
 }
 function f16(){
   document.getElementById('letter16').classList.remove('unvis');
    document.getElementById('letter16').classList.add('vis');
 }
  function f17(){
   document.getElementById('letter17').classList.remove('unvis');
    document.getElementById('letter17').classList.add('vis');
 }
 function f18(){
   document.getElementById('letter18').classList.remove('unvis');
    document.getElementById('letter18').classList.add('vis');
 }
  function f19(){
   document.getElementById('letter19').classList.remove('unvis');
    document.getElementById('letter19').classList.add('vis');
 }
 function f20(){
   document.getElementById('letter20').classList.remove('unvis');
    document.getElementById('letter20').classList.add('vis');
 }
  function f21(){
   document.getElementById('letter21').classList.remove('unvis');
    document.getElementById('letter21').classList.add('vis');
 }
 function f22(){
   document.getElementById('letter22').classList.remove('unvis');
    document.getElementById('letter22').classList.add('vis');
 }
  function f23(){
   document.getElementById('letter23').classList.remove('unvis');
    document.getElementById('letter23').classList.add('vis');
 }
 function f24(){
   document.getElementById('letter24').classList.remove('unvis');
    document.getElementById('letter24').classList.add('vis');
 }
  function f25(){
   document.getElementById('letter25').classList.remove('unvis');
    document.getElementById('letter25').classList.add('vis');
 }
 function f26(){
   document.getElementById('letter26').classList.remove('unvis');
    document.getElementById('letter26').classList.add('vis');
 }
  function f27(){
   document.getElementById('letter27').classList.remove('unvis');
    document.getElementById('letter27').classList.add('vis');
 }
 function f28(){
   document.getElementById('letter28').classList.remove('unvis');
    document.getElementById('letter28').classList.add('vis');
 }
  function f29(){
   document.getElementById('letter29').classList.remove('unvis');
    document.getElementById('letter29').classList.add('vis');
 }
 function f30(){
   document.getElementById('letter30').classList.remove('unvis');
    document.getElementById('letter30').classList.add('vis');
 }
  function f31(){
   document.getElementById('letter31').classList.remove('unvis');
    document.getElementById('letter31').classList.add('vis');
 }
 function f32(){
   document.getElementById('letter32').classList.remove('unvis');
    document.getElementById('letter32').classList.add('vis');
 }
  function f33(){
   document.getElementById('letter33').classList.remove('unvis');
    document.getElementById('letter33').classList.add('vis');
 }
 function f34(){
   document.getElementById('letter34').classList.remove('unvis');
    document.getElementById('letter34').classList.add('vis');
 }
  function f35(){
   document.getElementById('letter35').classList.remove('unvis');
    document.getElementById('letter35').classList.add('vis');
 }
 function f36(){
   document.getElementById('letter36').classList.remove('unvis');
    document.getElementById('letter36').classList.add('vis');
 }
  function f37(){
   document.getElementById('letter37').classList.remove('unvis');
    document.getElementById('letter37').classList.add('vis');
 }
 function f38(){
   document.getElementById('letter38').classList.remove('unvis');
    document.getElementById('letter38').classList.add('vis');
 }
  function f39(){
   document.getElementById('letter39').classList.remove('unvis');
    document.getElementById('letter39').classList.add('vis');
 }
 function f40(){
   document.getElementById('letter').classList.remove('unvis');
    document.getElementById('letter').classList.add('vis');
 }

 setTimeout(f40,100);
 setTimeout(f,260);
 setTimeout(f2,380);
 setTimeout(f3,535);
 setTimeout(f4,690);
 setTimeout(f5,810);
 setTimeout(f6,1100);
 setTimeout(f7,1250);
 setTimeout(f8,1390);
 setTimeout(f9,1550);
 setTimeout(f10,1700);
 setTimeout(f11,1830);
 setTimeout(f12,1960);
 setTimeout(f13,2150);
 setTimeout(f14,2380);
 setTimeout(f15,2550); 
 setTimeout(f16,2680);
 setTimeout(f17,2800);
 setTimeout(f18,2970); 
 setTimeout(f19,3090);
 setTimeout(f20,3300);
 setTimeout(f21,3460);
 setTimeout(f22,3580);
 setTimeout(f23,3735);
 setTimeout(f24,3890);
 setTimeout(f25,4010);
 setTimeout(f26,4250);
 setTimeout(f27,4400);
 setTimeout(f28,4540);
 setTimeout(f29,4700);
 setTimeout(f30,4850);
 setTimeout(f31,4970);
 setTimeout(f32,5100);
 setTimeout(f33,5260);
 setTimeout(f34,5490);
 setTimeout(f35,5640);
 setTimeout(f36,5760);
 setTimeout(f37,5870);
 setTimeout(f38,6030);
 setTimeout(f39,6140);



function animated(){
  document.getElementById('animate').style.visibility ='visible';
  document.getElementById('animate').classList.add('animate__flipInY');
}

 setTimeout(animated,5400);