

var canvas, context, $slider,img;
var x,y;

function start(){

}
function init(){
	canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
	var background = new Image();
	background.src = 'grassy.png';
	background.onload = function(){
		context.drawImage(background,0,0);
	}
}

function draw(){
	//init();
	context.drawImage(img,x,y);
}

window.onload = function() {
	init();
	
	x = 1;
	y = 0;
	img = new Image();
	img.src = 'sun.png';
	img.onload = draw;
	
	$slider = $('#slider');
	$slider.on('change',function(){
		x = parseInt($slider.val());
		draw();
		
	})
}
