/*
 Name: Justin Smith
   Course: ITSE 2402
   Date: 4/26/2019
   Date updated: 4/26/2019
    Final Project - Evelyn's Sweet Cakes
   Description: JavaScript Form Validation Script
   Filename: jds_validate.js
*/

/*GLOBAL VARIABLES*/
var valid_form=true;	//will track valid form completion
var form_elements=document.getElementsByTagName('input');		//reference for all input elements in form 
var alertBox=document.createElement("p");		 //create a new div fragment
alertBox.id="alert_box";			//define a DOM id for the new alertBox... used in CSS for styles 	
var myForm=document.querySelector("form");		// reference the form element

//boolean global variables
var myPhone;
var myEmail;


function myAlert(msg){		//this function will create a new document fragment and add it to the DOM to indicate an incomplete field	
	alertBox.textContent=msg;		
	
	myForm.insertAdjacentElement('afterbegin',alertBox);		//add new created p fragment to be first child of the form
	//window.scrollTo(0,0);	
	var focus_here=document.getElementById("focus_here");	
	focus_here.focus();
}	//end myAlert

function removeAlert(){
	//will remove the first child of the node until none exist
	while (alertBox.firstChild) {
		alertBox.removeChild(alertBox.firstChild);
	}
}

function validateEmail(emailString){			
	var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;	       
    
	if ((validEmail.test(emailString))) {
		return true;				
    }	
	else{
		return false;
	}
}	//end validateEmail

function validatePhone(phoneString){			
	var validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;	       
    
	if ((validPhone.test(phoneString))) {
		return true;				
    }	
	else{
		return false;
	}
}	//end validatePhone

function validateForm(){		
	try	{
		for (var i = 0; i < form_elements.length; i++){	
			if (form_elements[i].required){
				
				if(form_elements[i].name==="phone"){		//if the element name is phone, then validate it
					var valid_phone=validatePhone(form_elements[i].value);		//pass string entered in DOM phone field, to validation function
					if (!valid_phone){
						myPhone=false;
						form_elements[i].style.border="2px solid #DF744A";
						form_elements[i].focus();									
					} else if (valid_phone){
						myPhone=true;
						form_elements[i].style.border="";
					}
				}//end if				
				if(form_elements[i].name==="email"){		//if the element name is email, then validate it
					var valid_email=validateEmail(form_elements[i].value);		//pass string entered in DOM email field, to validation function
					if (!valid_email){
						myEmail=false;
						form_elements[i].style.border="2px solid #DF744A";form_elements[i].focus();									
					} else if (valid_email){
						myEmail=true;
						form_elements[i].style.border="";
					}
				}//end if
				
			}//end if required	
			if (form_elements[i].value==="" && form_elements[i].required){
				form_elements[i].style.border="2px solid #DF744A";
				valid_form=false;
				form_elements[i].focus();
			}//end if
			else if (form_elements[i].value!=="" && form_elements[i].required){
				valid_form=true;
				form_elements[i].style.border="";
			}//end else
		}//end for
				
		
		if (!valid_form){
			alertBox.style.color="red";
			throw "Please fill in the required fields";
		}
		if(!myPhone){
			alertBox.style.color="red";
			throw 'Please enter a phone number with the format (866) 740-4531';
		}
		if(!myEmail){
			alertBox.style.color="red";
			throw 'Please enter an email address with the format "name@domain.com"';
		}	

		var pickup_time=document.getElementById("time-select");
		var valid_time;
		if(pickup_time.value==="-1"){
			pickup_time.style.border="2px solid #DF744A";
			alertBox.style.color="red";
			valid_time=false;
			throw "Please select a pickup time";
		}
		if(pickup_time.value!=="-1"){
			pickup_time.style.border="";
			valid_time=true;			
		}

		
	} //end try 
	catch(errorMessage){	// catch error message 
		myAlert(errorMessage);
		return false;
	}//end catch

	if(valid_form && myPhone && myEmail && valid_time ){
		alertBox.style.color="black";
		var msg="Thank you for your order " + document.getElementsByName("firstname")[0].value + " " + document.getElementsByName("lastname")[0].value+ "! We will have your order ready for pickup at the scheduled time."
		myAlert(msg);		
		document.getElementById("submit_order").disabled=true; 
		return true;
	}	
}//end validateForm	

/* create event listeners for all input elements */
function createEventListeners() {		
	var sendB=document.getElementById("submit_order");		
	if (sendB.addEventListener) {			/* when send button is clicked*/
		sendB.addEventListener("click", validateForm, false);
	}else if (sendB.attachEvent) {
		sendB.attachEvent("onclick", validateForm);
	}
	
}//end createEventListeners

/* create event listeners when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}//end addEventListener
		
		
		
		
		
		
		
		
		