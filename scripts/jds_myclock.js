/*
 Name: Justin Smith
   Course: ITSE 2402
   Date: 4/1/2019
   Date updated: 5/2/2019
   Final Project - Evelyn's Sweet Cakes
   Description: Scripts File for Countdown Clock
   Filename: jds_myclock.js
*/

/*global variables*/


function updateCountdown() {		//this function will use the date object to calculate the count down between the current date and a selected date. 
	var countdown;
	var launchDate= new Date('August 1, 2019 12:00:00');
	var cur_date=Date.now();
		
	if ((launchDate - cur_date) < 1000) { // time will be less than 0 when setInterval runs next... so hide the countdown area and stop countdown loop
		clearInterval(countdown);
		document.getElementById("clock_div").style.display = "none";
	}	
	
	// days
	var daysUntil = Math.floor((launchDate - cur_date) / 86400000);	//milliseconds in a day	
	document.getElementById("countdown").innerHTML = daysUntil; 
	
	// hours
	var fractionalDay = (launchDate - cur_date) % 86400000;	//remaining milliseconds that are not a full day
	var	hoursUntil = Math.floor(fractionalDay / 3600000); 	//hours in remaining part of a day
	if (hoursUntil < 10) {
		hoursUntil = "0" + hoursUntil;
	} 
	document.getElementById("countdown").innerHTML += " Days &#9;" + hoursUntil;	

	// minutes
	var fractionalHour = fractionalDay % 3600000;	//remaining milliseconds that are not a full hour
	var	minutesUntil = Math.floor(fractionalHour / 60000);	//minutes in remaining part of day
	if (minutesUntil < 10) {
		minutesUntil = "0" + minutesUntil;
	} 	
	document.getElementById("countdown").innerHTML += " Hours &#9;" + minutesUntil;

	// seconds
	var fractionalMinute = fractionalHour % 60000;	//remaining milliseconds that are not a full min
	var secondsUntil = Math.floor(fractionalMinute / 1000);		//seconds in remaining part of day
	if (secondsUntil < 10) { 
		secondsUntil = "0" + secondsUntil;
	} 	
	document.getElementById("countdown").innerHTML += " Mins &#9;" + secondsUntil +" Secs";
} //end updateCountdown

/* create event listeners for all input elements */
function createEventListeners() {		
	updateCountdown();
	countdown=setInterval(updateCountdown, 1000);
}//end createEventListeners

/* create event listeners when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}//end addEventListener

















