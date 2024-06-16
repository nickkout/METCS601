

//creates photo gallery
function displayImages() {

 let arImgNmBOS = [];
 let arImgNmNYC = [];
 let arImages = [];
 let str = ""

 //loop
 for (i = 1; i < 6; i++) {
  str = `bos-${i}.jpg`;   
  arImgNmBOS.push(str);

  str = `nyc-${i}.jpg`;
  arImgNmNYC.push(str);
 }

 //combine images into one array
 arImgNmBOS.forEach(e => {
  arImages.push(e);
 });
 arImgNmNYC.forEach(e => {
  arImages.push(e);
 }); 

 const div=document.getElementById("img-small-div");

 //add img 
 arImages.forEach(e => {
  let img = document.createElement("img");

  img.src = e;
  img.onclick=(e => {
   //add img to zoom div
   document.getElementById("img-zoom").src=e.target.src;
   document.getElementById("img-zoom-div").style.display="block";
 });

  div.appendChild(img);  

 });

}

