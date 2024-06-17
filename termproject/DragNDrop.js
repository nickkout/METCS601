

//adds items to respective unordered lists
function PopulateItems() {
 URLs=["appetizers","entrees","dessert"];

 console.clear();

 URLs.map((e) => getJSON(e));

 //add events & methods: drop container
 /*
	const divDrop=document.getElementById(divDropId);

	divDrop.addEventListener("dragover",dragover);
	divDrop.addEventListener("drop",drop);
	divDrop.addEventListener("dragleave",dragleave);
 */
}

//gets JSON data that contains the 2 sets of data
function getJSON(category) {

  const url=`http://localhost:3000/${category}`

  //set variables
  let ulItems=document.getElementById(category);

  //clear previous items 
  listItems=document.querySelectorAll("#"+category+" > li");
  listItems.forEach(e => document.getElementById(ulId).removeChild(e));

  //fetch JSON 
  fetch(url)
   .then((response) => response.json())
   .then((data) => {

	//change JSON to string and split each row into an array
	const n=JSON.stringify(data);
	const o=n.substring(1,n.length);
	const p=o.substring(0,o.length-1);
	const ar=p.split('},');

	//create <li> items    
	for(i=0;i<ar.length;i++) {
	 let row = ar[i];

	 if(row.substring(row.length-1)=="\"") {row=row+"}"};

	  const o = JSON.parse(row);

	  let li = document.createElement("li");
		
	  ulItems.appendChild(li);

	  li.innerText=o["name"];
	  li.setAttribute("draggable","true");
      li.setAttribute("id",(category+(i+1)));
	  li.addEventListener("dragstart",drag);

	  //li.addEventListener("dragstart",dragstart);
	  //li.addEventListener("dragend",dragend);
	 }
    })
   .catch(console.error);
}

function drag(ev) {

 //add id and type
 ev.dataTransfer.setData("text",ev.target.id);

 const strId = ev.target.id;

 if(strId.indexOf("appetizers")>-1) {strType="appetizers";}
 else if(strId.indexOf("entrees")>-1) {strType="entrees";}
 else {strType="dessert";}

 ev.dataTransfer.setData("type",strType);
	
}

function allowDrop(ev) {
 ev.preventDefault();
}

function drop(ev) {
 ev.preventDefault();

 let item = ev.dataTransfer.getData("text"); 
 let type = ev.dataTransfer.getData("type");

 let ar = document.getElementById("dinner").childNodes;
 let strId = "";
 let boolAdd = true;

 ar.forEach(e =>
 {
  strId = e.id;

  if(e.innerText != undefined)
  {
   let a = strId.indexOf("appetizers")==0 && type=="appetizers";
   let b = strId.indexOf("entrees")==0 && type=="entrees";
   let c = strId.indexOf("dessert")==0 && type=="dessert";

   if(a || b || c)
	boolAdd=false;
  }
 }
 ); 

 //allow only 1 item per category
 let msg = document.getElementById("dd-msg");

 if(boolAdd)
 {
  ev.target.appendChild(document.getElementById(item));
  msg.innerText="";
 }
 else
  msg.innerText = `Only 1 item from the ${type} is allowed.`;
}


/*
//
function dragstart(e) {
 const strId = e.target.id;

 if (strId.indexOf("appetizers")>-1)
 {strType="appetizers";}
 else if (strId.indexOf("entrees")>-1)
 {strType="entrees";}
 else
 {strType="dessert";}

 //add id and type
 e.dataTransfer.setData('text/plain',e.target.id);
 e.dataTransfer.setData('type',strType);
 e.target.classList.add('dragging');
}

//drag end event method
function dragend(e) {
 e.target.classList.remove('dragging');
}

//dragover event method
function dragover(e) {
 e.preventDefault()
 e.currentTarget.classList.add('drag-over'); alert("do");
}

//drop event method
function drop(e) {

	 e.preventDefault(); //prevent default behavior

	 //set variables 
	 const itemType=e.dataTransfer.getData('type');
	 const divDropId=e.target.id;
	 const divDropZone=document.getElementById(divDropId);

	 //determine if item can be dropped to desired target 
	 let boolAcceptDrop = true;

	
	 if(boolAcceptDrop) {
	  //add item to drop zone 
	  const itemId=e.dataTransfer.getData('text/plain');
	  const item=document.getElementById(itemId);

	  divDropZone.appendChild(item);
	} 
}

//dragleave event method
function dragleave(e) {
 e.currentTarget.classList.remove('drag-over');
}

*/