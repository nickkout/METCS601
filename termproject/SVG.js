//Redraws circle
function redrawCircle() {
    var cir = document.getElementById("cir");
    var color = document.getElementById("circlecolor");
    var radius = document.getElementById("circle-radius");
    var txterr = document.getElementById("txt-cir-error");
    var radiusValue = radius.value;
    if (color.selectedIndex == 0) {
        txterr.textContent = "Please choose a color.";
    }
    else if (radiusValue == "") {
        txterr.textContent = "Please enter a radius.";
    }
    else if (Number(radiusValue) > 120) {
        txterr.textContent = "Please enter a radius <= 120.";
    }
    else {
        //set color
        cir.style.fill = color.value;
        //set radius
        cir.setAttribute("r", radiusValue);
        txterr.textContent = "";
    }
}
//Restarts rectangle animation
function restartRect() {
    var rect = document.getElementById("box");
    var animation = document.getElementById("rectstate");
    var txterr = document.getElementById("txt-rect-error");
    var cn = "";
    if (animation.selectedIndex == 0) {
        txterr.textContent = "Please choose an animation.";
    }
    else {
        switch (animation.value) {
            case "Color":
                cn = "rectColor";
                break;
            case "Width":
                cn = "rectWidth";
                break;
            default:
        }
        //set animation
        var cn_old = rect.classList;
        if (cn_old != "") {
            rect.classList.remove(cn_old);
        }
        rect.classList.add(cn);
        txterr.textContent = "";
    }
}
