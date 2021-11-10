const One=document.getElementById("1");
const Two=document.getElementById("2");
const Three=document.getElementById("3");
const Four=document.getElementById("4");
const Five=document.getElementById("5");
const Six=document.getElementById("6");
const Seven=document.getElementById("7");
const Eight=document.getElementById("8");
const Nine=document.getElementById("9");
const Zero=document.getElementById("0");
const Plus=document.getElementById("plus");
const Minus=document.getElementById("minus");
const Multiply=document.getElementById("multiply");
const Divide=document.getElementById("divide");
const Point=document.getElementById("point")

One.addEventListener("click",display);
Two.addEventListener("click",display);
Three.addEventListener("click",display);
Four.addEventListener("click",display);
Five.addEventListener("click",display);
Six.addEventListener("click",display);
Seven.addEventListener("click",display);
Eight.addEventListener("click",display);
Nine.addEventListener("click",display);
Zero.addEventListener("click",display);
Plus.addEventListener("click",display);
Minus.addEventListener("click",display);
Multiply.addEventListener("click",display);
Divide.addEventListener("click",display);
Point.addEventListener("click",display)

var Display=document.getElementById("display");
var DisplayValue="";
function display(){
				let key=event.target;
				Display.textContent+=key.innerHTML;
				DisplayValue=Display.textContent;
}

function equal(){
				let Output=eval(DisplayValue);
				Display.textContent=Output;
}

function AC(){
				Display.innerHTML=""
}
