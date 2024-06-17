//adds items to respective unordered lists
function PopulateItems() {
    var URLs = ["appetizers", "entrees", "dessert"];
    console.clear();
    URLs.forEach(function (e) { return getJSON(e); });
}
//gets JSON data that contains the 2 sets of data
function getJSON(category) {
    var url = "http://localhost:3000/".concat(category);
    //set variables
    var ulItems = document.getElementById(category);
    //clear previous items 
    var listItems = document.querySelectorAll("#" + category + " > li");
    listItems.forEach(function (e) { return document.getElementById(category).removeChild(e); });
    //fetch JSON 
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        //change JSON to string and split each row into an array
        var n = JSON.stringify(data);
        var o = n.substring(1, n.length);
        var p = o.substring(0, o.length - 1);
        var ar = p.split('},');
        //create <li> items    
        for (var i = 0; i < ar.length; i++) {
            var row = ar[i];
            if (row.substring(row.length - 1) == "\"") {
                row = row + "}";
            }
            ;
            var o_1 = JSON.parse(row);
            var li = document.createElement("li");
            ulItems.appendChild(li);
            li.innerText = o_1["name"];
            li.setAttribute("draggable", "true");
            li.setAttribute("id", (category + (i + 1)));
            li.addEventListener("dragstart", drag);
        }
    })
        .catch(console.error);
}
//drag 
function drag(ev) {
    //add id and type
    ev.dataTransfer.setData("text", ev.target.id);
    var strId = ev.target.id;
    var strType = "";
    if (strId.indexOf("appetizers") > -1) {
        strType = "appetizers";
    }
    else if (strId.indexOf("entrees") > -1) {
        strType = "entrees";
    }
    else {
        strType = "dessert";
    }
    ev.dataTransfer.setData("type", strType);
}
//allow drop
function allowDrop(ev) {
    ev.preventDefault();
}
//drop
function drop(ev) {
    ev.preventDefault();
    var item = ev.dataTransfer.getData("text");
    var type = ev.dataTransfer.getData("type");
    var ar = document.getElementById("dinner").childNodes;
    var boolAdd = true;
    ar.forEach(function (e) {
        var strId = e.id;
        if (e.innerText != undefined) {
            var a = strId.indexOf("appetizers") == 0 && type == "appetizers";
            var b = strId.indexOf("entrees") == 0 && type == "entrees";
            var c = strId.indexOf("dessert") == 0 && type == "dessert";
            if (a || b || c)
                boolAdd = false;
        }
    });
    //allow only 1 item per category
    var msg = document.getElementById("dd-msg");
    if (boolAdd) {
        ev.target.appendChild(document.getElementById(item));
        msg.innerText = "";
    }
    else
        msg.innerText = "Only 1 item from ".concat(type, " is allowed.");
}
