//creates photo gallery
function displayImages() {
    var arImgNmBOS = [];
    var arImgNmNYC = [];
    var arImages = [];
    var str = "";
    //loop
    for (var i = 1; i < 6; i++) {
        str = "bos-".concat(i, ".jpg");
        arImgNmBOS.push(str);
        str = "nyc-".concat(i, ".jpg");
        arImgNmNYC.push(str);
    }
    //combine images into one array
    arImgNmBOS.forEach(function (e) {
        arImages.push(e);
    });
    arImgNmNYC.forEach(function (e) {
        arImages.push(e);
    });
    var div = document.getElementById("img-small-div");
    //add img 
    arImages.forEach(function (e) {
        var img = document.createElement("img");
        img.src = e;
        img.onclick = (function (e) {
            //add img to zoom div  
            var imgZoom = document.getElementById("img-zoom");
            var imgZoomDiv = document.getElementById("img-zoom-div");
            var target = e.target;
            var url = target.src;
            imgZoom.src = url;
            imgZoom.alt = "an img";
            imgZoomDiv.style.display = "block";
        });
        div.appendChild(img);
    });
}
