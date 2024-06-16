

//validate's form before submission
function validateForm(e) { 

 const frm = document.forms.contactform;

 let valid = true;
 const pattern = /^[a-z]{2,}$/i
 let ctl = '';
 let nm = '';
 let elem_nm = '';

 //clear error elements 
 var err_elements=["fnerror","lnerror","crerror","cterror"];
 err_elements.map(clearValue);

 //validate First Name + Last Name 
 for(i=0;i<2;i++) {
 if(i==0) {
  ctl='First Name';
  nm=frm["firstname"].value;
  elem_nm="fnerror";
 }
 else {
  ctl='Last Name';
  nm=frm.lastname.value;
  elem_nm="lnerror";
 }

 //Check if First/Last Name element value passes Regex test 
 const res=pattern.test(nm);

 if(res==false) {
   valid = false;
   document.getElementById(elem_nm).innerHTML = `${ctl} must have a minimum of 2 characters and only letters.`;	
  }
 }

 //check if a reason of concern was selected 
 const lst=document.getElementById("concernreason");

 if(lst.selectedIndex==0) {
  valid=false;
  document.getElementById("crerror").textContent = "A reason for concern must be selected.";
 }

 //check if a reason of concern was explained/input by user 
 const txt=document.getElementById("concerntext");

 if(txt.value=="") {
  valid = false;
  document.getElementById("cterror").textContent = "The reason for concern must be explained.";
 }

 //No errors: success
 if(valid) {
  let firstNm = frm["firstname"].value; 
  firstNm = firstNm.charAt(0).toUpperCase() + firstNm.substring(1);

  const msg = document.getElementById("successmsg");
  msg.textContent = `${firstNm}, your message has been sent. We will respond shortly.`;
 }

}

//clears content of named element
function clearValue(e) {
 document.getElementById(e).innerHTML="";
}



