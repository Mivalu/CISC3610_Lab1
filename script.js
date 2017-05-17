var canvas,ctx;
var slider = document.getElementById("slider");
var position = 10;
var background = new Image();
background.src = 'http://i.imgur.com/U4GSdQT.png'
var sunny = new Image();
sunny.src = 'http://i.imgur.com/0F8QLoq.png';



function init(){
	canvas = document.getElementById("drawingCanvas");
	ctx = canvas.getContext("2d");
	console.log("ran");
	background.onload = function(){ctx.drawImage(background,0,0);}
}

function drawSun(){ctx.drawImage(sunny,position,50);}
function drawBack(){ctx.drawImage(background,0,0);}
function drawShade(){
	ctx.save();
	
	ctx.beginPath();
	ctx.globalAlpha = 0.01 * (slider.value/2);
	ctx.strokeStyle="FF0000";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.stroke();
	ctx.globalAlpha = 1.0;
	ctx.restore;
	console.log("shade");


	
}

slider.addEventListener("change",function (){
	position = canvas.width * slider.value * 0.01;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBack();
	drawSun();
	drawShade();
},false);

window.onload = init();