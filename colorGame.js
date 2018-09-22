var mode = 6;
var colors = generateRandomColors(6);
var square = document.querySelectorAll(".square");
var pickedColor = picking();
var colorDisplay = document.getElementById("colorDisplay");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resSetButton = document.querySelector("#reSet");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var resetImage = document.querySelector("#upper");
colorDisplay.textContent = pickedColor;
init();
setMode();

function init(){
	for(var i = 0; i< square.length;i++){
	//add initial color to square	
	square[i].style.background = colors[i];
	//add click listener
	square[i].addEventListener("click",function(){
	var cickedColor = this.style.background;	
	if(cickedColor === pickedColor){
		messageDis.textContent = "Correct!";
		resSetButton.textContent ="Play Again";
		changeColor();
		h1.style.background = cickedColor;
	}else{
		this.style.background = "#232323";
		messageDis.textContent = "Try Again";
	}
	});
	}
}
function setMode(){
	easy.addEventListener("click",function(){
		mode =3;
		easy.classList.add("selected");
		hard.classList.remove("selected");
		reset();
	});
	hard.addEventListener("click",function(){
		mode = 6;
		easy.classList.remove("selected");
		hard.classList.add("selected");
		reset();
	});
	resSetButton.addEventListener("click",function(){
		reset();
	});
}

function changeColor(){
	for(var i = 0; i<colors.length;i++){
		square[i].style.background = pickedColor;
	}
};
function picking(){
	var index = Math.floor(Math.random()*colors.length);
	return colors[index];
}
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i< num; i++){
		arr[i] = randomColor();
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function reset(){
	colors = generateRandomColors(mode);
	pickedColor = picking();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i <square.length; i++) {
		if(colors[i]){
			square[i].style.background = colors[i];
			square[i].style.display ="block";
		}else{
			square[i].style.display ="none";
	}
	}
	messageDis.textContent = "";
	h1.style.background = "transparent";
	resSetButton.textContent ="New Color";
}
