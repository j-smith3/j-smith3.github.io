/*
 Name: Justin Smith
   Course: ITSE 2402
   Date: 4/25/2019
   Date updated: 4/25/2019
   Final Project - Evelyn's Sweet Cakes
   Description: Script file for Evelyn's Sweet Cakes Website. This file will validate parts of an order form and generate a small shopping cart
   Filename: jds_order.js
*/

/*GLOBAL VARIABLES AND OBJECTS*/
var form_elements=document.querySelector("form").select;		//reference for all elements in form 
var error_count=0;
var order_total=0;

var cart = {		//create a shopping cart object
	item_number:0,
		items : {	
			//cupcake_size:form_elements[0].value,
			//cupcake_quantity:form_elements[1].value,
			//cupcake_flavor:form_elements[2].value	
		}	
	};
var price_area=document.getElementById("price_area");

function calculate_cost(){
	
	var price=0;
	
	var newItem=document.createElement("li");
	
	if (form_elements[0].value==="Regular"){
		if (form_elements[1].value==="Half"){
			price=18;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}
		if (form_elements[1].value==="One"){
			price=30;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}
		if (form_elements[1].value==="Two"){
			price=50;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}	
	}
	if (form_elements[0].value==="Mini"){
		if (form_elements[1].value==="Half"){
			price=10;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}
		if (form_elements[1].value==="One"){
			price=18;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}
		if (form_elements[1].value==="Two"){
			price=36;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}		
	}
	if (form_elements[0].value==="Jumbo"){
		if (form_elements[1].value==="Half"){
			price=20;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}
		if (form_elements[1].value==="One"){
			price=36;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}
		if (form_elements[1].value==="Two"){
			price=56;
			newItem.textContent="$"+price;
			price_area.appendChild(newItem);
			order_total+=price;
		}		
	}
	
	var total=document.getElementById("total");
	total.textContent="Order Total: $" + order_total;
	document.getElementById("submit_order").focus();
}
	
	
	
	var uList=document.getElementById("order_details");

function orderDetails (){		

	
	var newItem=document.createElement("li");
	var newItemName;
	
	cart.item_number+=1;	//increment the number or items in the list
	newItemName="item"+cart.item_number;	
	
	//create a new property for items sub-object. each incremented name will become a new item in the shopping cart
	cart.items[newItemName]=form_elements[1].value + " Dozen " + form_elements[0].value+ " Sized " + form_elements[2].value + " Cupcakes";
	
	newItem.textContent=cart.items[newItemName];
	uList.appendChild(newItem);	//append new fragment to DOM
	
	
	calculate_cost();	//call function to calculate cost
	
	//reset the select fields in the DOM
	form_elements[0].value="-1";
	form_elements[1].value="-1";
	form_elements[2].value="-1";
	
	//display the order details section of DOM
	document.getElementById("order_details_div").style.display="block";
	
	
}//end orderDetails

function errorMessage(errorMsg){	//creates a paragraph node to display error message
	new_p=document.createElement("p");
	new_p.textContent=errorMsg;
	new_p.name="errorBox";
	new_p.id="errorBox";
	var errorBox=document.getElementById("order_info");
	errorBox.insertAdjacentElement('afterbegin',new_p);
	
}//end errorMessage

function removeMessage(){	//removes the error message node
	errorBox.removeChild(errorBox.childNodes[0]);
}//end removeMessage


function validateOrder(){
	
	var valid=true;

	for (var i = 0; i < form_elements.length; i++){	
		if(form_elements[i].value==="-1"){
			form_elements[i].style.border="2px solid #DF744A";
			valid=false;
			
		}
		if(form_elements[i].value!=="-1"){
			form_elements[i].style.border="";			
		}		
	}
	
	if(!valid && error_count<1){
		var error_msg="Please make a selection.";
		errorMessage(error_msg);
		error_count++;
	}
	if(valid){
		orderDetails();
		removeMessage();
		
	}			
}//end validateOrder

function clearOrder(){//function will clear the order details area

//remove the first child of the node until none exist
	while (uList.firstChild) {
		uList.removeChild(uList.firstChild);
	}
	while (price_area.firstChild) {
		price_area.removeChild(price_area.firstChild);
	}
	total.textContent="";
	order_total=0;
	
}//end clearOrder

function customerForm(){
	if(order_total!==0){		
		window.open("jds_form.htm");
	}
}//end customerForm



function createEventListeners(){
	var add_button=document.getElementById("addBtn");
	if (add_button.addEventListener){
		add_button.addEventListener("click", validateOrder, false);
	}	
	
	var sub_button=document.getElementById("submit_order");
	if (sub_button.addEventListener){
		sub_button.addEventListener("click", customerForm, false);
	}
	
	var reset_button=document.getElementById("reset_order");
	if (reset_button.addEventListener){
		reset_button.addEventListener("click", clearOrder, false);
	}
}//end createEventListeners



/* create event listeners when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload",createEventListeners);
}//end addEventListener