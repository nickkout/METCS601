


//Redraws circle
function redrawCircle() {
 const cir = document.getElementById("cir")
 const color = document.getElementById("circlecolor")
 const radius=document.getElementById("circle-radius")
 const txterr = document.getElementById("txt=cir-error")

 if(color.selectedIndex==0) {
  txterr.textContent = "Please choose a color.";
 }
 else if(radius.value=="") {
  txterr.textContent = "Please enter a radius.";
 }
 else if(Number(radius.value)>120) {
  txterr.textContent="Please enter a radius <= 120.";
 }
 else {
  //set color
  cir.style.fill=color.value;
  //set radius
  cir.setAttribute("r",radius.value);
  txterr.textContent = "";
 }
}

//Redraws circle
function restartRect() {
 const rect = document.getElementById("box")
 const animation = document.getElementById("rectstate")
 const txterr = document.getElementById("txt-rect-error")
 let cn = "";

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
  cn_old=rect.classList;

  if(cn_old != "") {
   rect.classList.remove(cn_old);
  }

  rect.classList.add(cn);
  txterr.textContent = "";
 }
}