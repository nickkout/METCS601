
window.onload = function(e) { 
 const frm = document.forms.mainform; 
 frm.addEventListener('submit', validateSubmission);
}

//validates submitted form
function validateSubmission(e)
{

 const frm = document.forms.mainform;

 //prevent default behavior 
 e.preventDefault(); 
 
//set variables 
 var valid = true;
 const pattern = /^[a-z]{2,}$/i
 var ctl=''; 
 var nm='';
 var nm_err='';
 var elem_nm='';

 //clear error elements 
 var err_elements=["fn_error","ln_error","package_error","subscribe_error"]; 
 err_elements.map(clear_text);  
  
 //validate First Name and Last Name 
 for(i=0;i<2;i++) { 
  if(i==0) {
   ctl='First Name'; 
   nm = frm["firstname"].value;
   elem_nm =  "fn_error";  
  }
  else {
   ctl='Last Name'; 
   nm = frm.lastname.value;
   elem_nm =  "ln_error"; 
  }  

  //Check if First/Last Name element value passes Regex test 
  const res = pattern.test(nm);
  nm_err =  document.getElementById(elem_nm); 
   
  if (res==false) {
   valid = false; 
   nm_err.innerHTML=ctl+ ' must have a minimum length of 2 characters and only contain letters.';
  }
 }
  
 //check if a Package was selected 
 const lst = document.getElementById("select-package");
 const pack_err =  document.getElementById("package_error");
  
 if (lst.selectedIndex==0) {
  valid = false; 
  pack_err.textContent="A package must be selected.";
 }

 //check if Subscribe was checked 
 const cbox = document.getElementById("subscribe");
 const subscr_err =  document.getElementById("subscribe_error"); 
 
 if (!cbox.checked) {
  valid = false; 
  subscr_err.textContent="Subscribe must be checked.";  
 }
  
 //display summary of user's output  
 if (valid==true) {
   
  //hide main form 
  document.getElementById('mainform').style.display = 'none';
   
  //show message container
  const summ = document.getElementById('user_output_summary');
  summ.style.display = 'block';
  
  //create arrow function 
  afunc = (the_id) => {
   var val='';
    
   switch(the_id)
   {
    case "firstname":
     val=frm["firstname"].value;    
     break;
    case "lastname":
     val=frm["lastname"].value;    
     break;
    case "email":
     val=frm["email"].value;    
     break;   
   }
    
   return val; 
  }  
  
  const fn = afunc("firstname");
  const ln = afunc("lastname");
  const email = afunc("email"); 
  const pack = lst.options[lst.selectedIndex].text;
        
  //show summary 
  summ.innerHTML = (
   "Dear " + fn + " " + ln + ", we want to thank you for subscribing!<br>"
   + "Your email '" + email + "' is registered with our '" + pack 
   + "' package."); 
 }
}
 
//clears content of named element
function clear_text(the_id)
{
 //alert(the_id); 
 let elem =  document.getElementById(the_id); 
 elem.innerHTML="";
}