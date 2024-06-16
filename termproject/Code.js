

//creates nav menu
function CreateMenu() {

    const mnu = document.getElementById("menu");
    const ul = document.createElement("div"); //ul
    const pages = 6;

    let txt = "";
    let hr = "";

    mnu.appendChild(ul);
    ul.className = "menu-bar";

    for (let i = 0; i < pages; i++) {
        let li = document.createElement("div"); //li
        let a = document.createElement("a");

        ul.appendChild(li);
        li.appendChild(a);

        switch (i) {
            case 0:
                txt = "Home";
                hr = "index.html";
                break;
            case 1:
                txt = "Gallery";
                break;
            case 2:
                txt = "ContactForm";
                break;
            case 3:
                txt = "SVG";
                break;
            case 4:
                txt = "Geolocation";
                break;
            default:
				txt= "DragnDrop";
        }

        a.text = txt;

        if (i == 0) {
         a.href = hr;
        }
        else {
         a.href = txt + ".html";
        }

        
    }

};




