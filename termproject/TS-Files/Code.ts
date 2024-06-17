//creates nav menu
function CreateMenu() {
    var mnu = document.getElementById("menu");
    var ul = document.createElement("div");
    var pages = 6;
    var txt = "";
    var hr = "";
    mnu.appendChild(ul);
    ul.className = "menu-bar";
    for (var i = 1; i <= pages; i++) {
        var li = document.createElement("div");
        var a = document.createElement("a");
        ul.appendChild(li);
        li.appendChild(a);
        switch (i) {
            case 1:
                txt = "Home";
                hr = "index.html";
                break;
            case 2:
                txt = "Gallery";
                break;
            case 3:
                txt = "ContactForm";
                break;
            case 4:
                txt = "SVG";
                break;
            case 5:
                txt = "Geolocation";
                break;
            case 6:
                txt = "DragNDrop";
                break;
            default:
                txt = "";
        }
        a.text = txt;
        if (i == 1) {
            a.href = hr;
        }
        else {
            a.href = txt + ".html";
        }
    }
};

function CreateFooter() {
 let footer = document.getElementById("footer-div");

 const links = ["Home","AboutUs","Contact"];

 links.forEach(e => {
  let d = document.createElement("div");
  footer.appendChild(d);

  let link = document.createElement("a");

  d.appendChild(link);
  link.text = e;
  link.href = "";
 });

}




