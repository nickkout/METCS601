


//Redraws circle
function redrawCircle() {
 const cir:HTMLElement = document.getElementById("cir")
 const color:any = document.getElementById("circlecolor")
 const radius:any = document.getElementById("circle-radius")
 const txterr:HTMLElement = document.getElementById("txt-cir-error")

 let radiusValue = radius.value; 

 if(color.selectedIndex==0) {
  txterr.textContent = "Please choose a color.";
 }
 else if(radiusValue=="") {
  txterr.textContent = "Please enter a radius.";
 }
 else if(Number(radiusValue)>120) {
  txterr.textContent="Please enter a radius <= 120.";
 }
 else {
  //set color
  cir.style.fill = color.value;
  //set radius
  cir.setAttribute("r",radiusValue);
  txterr.textContent = "";
 }
}

//Restarts rectangle animation
function restartRect() {
 const rect:HTMLElement = document.getElementById("box")
 const animation:any = document.getElementById("rectstate") 
 const txterr:HTMLElement = document.getElementById("txt-rect-error")
 let cn:string = "";

 if(animation.selectedIndex==0) {
  txterr.textContent = "Please choose an animation.";
 }
 else {

  switch(animation.value) { 
   case "Color":
     cn = "rectColor";
    break;
   case "Width":
     cn="rectWidth";
	break;
   default:
  }
 
  //set animation
  let cn_old:any = rect.classList;

  if(cn_old != "") {
   rect.classList.remove(cn_old);
  }

  rect.classList.add(cn);
  txterr.textContent = "";
 }
}