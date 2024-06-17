
//creates photo gallery
function displayImages():void {

 let arImgNmBOS:string[] = [];
 let arImgNmNYC:string[] = [];
 let arImages:string[] = [];
 let str:string = ""

 //loop
 for (let i:number = 1; i < 6; i++) {
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

 const div:HTMLElement = document.getElementById("img-small-div");

 //add img 
 arImages.forEach((e:string) => {
  let img:HTMLImageElement = document.createElement("img");

  img.src = e;
  img.onclick=((e:Event) => {
  
   //add img to zoom div  
   const imgZoom:any = document.getElementById("img-zoom");
   const imgZoomDiv:HTMLElement = document.getElementById("img-zoom-div");

   const target = e.target as HTMLImageElement;

   let url:string = target.src;
    
   imgZoom.src = url;
   imgZoom.alt = "an img";
   imgZoomDiv.style.display = "block";
 });

  div.appendChild(img);  

 });

}

