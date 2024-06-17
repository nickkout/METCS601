

//creates nav menu
function CreateMenu() {
	alert('fu');
    const mnu = document.getElementById("menu");
    const ul = document.createElement("div"); //ul
    const pages = 6;

    let txt = "";
    let hr = "";

    mnu.appendChild(ul);
    ul.className = "menu-bar";

    for (let i = 1; i <= pages; i++) {
        let li = document.createElement("div"); //li
        let a = document.createElement("a");

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
				txt="DragNDrop";
				break;
			default:
				txt= "";
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




