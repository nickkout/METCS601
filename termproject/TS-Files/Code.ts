

//creates nav menu
function CreateMenu():void {

    const mnu:HTMLElement = document.getElementById("menu");
    const ul:HTMLElement = document.createElement("div");
    const pages:number = 6;

    let txt:string = "";
    let hr:string = "";

    mnu.appendChild(ul);
    ul.className = "menu-bar";

    for (let i = 1; i <= pages; i++) {
        let li = document.createElement("div");
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

        if (i == 1) {
         a.href = hr;
        }
        else {
         a.href = txt + ".html";
        }
    }

};




