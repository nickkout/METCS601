

//adds items to respective unordered lists
function PopulateItems():void {

 const URLs:string[] = ["appetizers","entrees","dessert"];

 console.clear();

 URLs.forEach((e:string) => getJSON(e));
}

//gets JSON data that contains the 2 sets of data
function getJSON(category:string):void {

  const url:string = `http://localhost:3000/${category}`

  //set variables
  let ulItems:HTMLElement = document.getElementById(category);

  //clear previous items 
  let listItems:any = document.querySelectorAll("#"+category+" > li");
  listItems.forEach(e => document.getElementById(category).removeChild(e));

  //fetch JSON 
  fetch(url)
   .then((response) => response.json())
   .then((data) => {

	//change JSON to string and split each row into an array
	const n:string = JSON.stringify(data);
	const o:string = n.substring(1,n.length);
	const p:string = o.substring(0,o.length-1);
	const ar:string[] = p.split('},');

	//create <li> items    
	for(let i:number=0;i<ar.length;i++) {
	 let row = ar[i];

	 if(row.substring(row.length-1)=="\"") {row=row+"}"};

	  const o:any = JSON.parse(row);

	  let li:HTMLLIElement = document.createElement("li");
		
	  ulItems.appendChild(li);

	  li.innerText=o["name"];
	  li.setAttribute("draggable","true");
          li.setAttribute("id",(category+(i+1)));
	  li.addEventListener("dragstart",drag);
     }
    })
   .catch(console.error);
}

//drag 
function drag(ev):void {

 //add id and type
 ev.dataTransfer.setData("text",ev.target.id);

 const strId:string = ev.target.id;
 let strType:string = "";

 if(strId.indexOf("appetizers")>-1) {strType="appetizers";}
 else if(strId.indexOf("entrees")>-1) {strType="entrees";}
 else {strType="dessert";}

 ev.dataTransfer.setData("type",strType);
	
}

//allow drop
function allowDrop(ev):void {
 ev.preventDefault();
}

//drop
function drop(ev):void {
 ev.preventDefault();

 let item:string = ev.dataTransfer.getData("text"); 
 let type:string = ev.dataTransfer.getData("type");

 let ar:any = document.getElementById("dinner").childNodes;
 let boolAdd:boolean = true;

 ar.forEach(e =>
 {
  let strId:string = e.id as string;

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
 let msg:HTMLElement= document.getElementById("dd-msg");

 if(boolAdd)
 {
  ev.target.appendChild(document.getElementById(item));
  msg.innerText = "";
 }
 else
  msg.innerText = `Only 1 item from ${type} is allowed.`;
}

