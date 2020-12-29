/*
 Name: Justin Smith
   Course: ITSE 2402
   Date: 4/6/2019
   Date updated: 4/22/2019
   Final Project - Evelyn's Sweet Cakes
   Description: Script that generates header and navigation for all Pages for Evelyn's Sweet Cakes Website
   Filename: jds_header.js
*/

/*global variables*/
/*create variables for a new header document fragment*/
var myHeader=document.createElement("header");	//create a header element
var myDiv=document.createElement("div");	//create a div element
myDiv.innerHTML='<a href="index.htm"><img id="logo" src="images/jds_logo.png" alt="Company Logo" title="Evelyn\'s Sweet Cakes" id="logo" /></a>';

var product_link=document.getElementById("Products");


function createNodes(){			//creates new document fragments for header	
	myHeader.appendChild(myDiv);	//append div to the header 	
	
	//append document fragment to the DOM
	document.querySelector("body").insertBefore(myHeader, document.querySelector(".main_content"));		//attach header			
	
}		//end createNode


/*create event listeners for all events*/
function createEventListeners (){
	createNodes();
	
}


/* create event listeners when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}//end addEventListener



