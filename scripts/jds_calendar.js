/*
 Name: Justin Smith
   Course: ITSE 2402
   Date: 4/26/2019
   Date updated: 4/26/2019
    Final Project - Evelyn's Sweet Cakes
   Description: JavaScript Form Validation Script
   Filename: jds_validate.js
*/

"use strict";
//global variables
var dateObject = new Date();	//create new dateObject

function displayCalendar(whichMonth) { //when first called, no whichMonth value is passed. if next month or previous month button on the calendar are picked, the value will change either -1 or 1 (see below if statements)

	var date;
	var dateToday = new Date();
	var dayOfWeek;
	var daysInMonth; 
	var dateCells; 
	var captionValue; 
	var month;
	var year; 
	var monthArray = ["January","February","March","April","May",
		"June","July","August","September","October","November", "December"];
		
	
	//This statement enables users to navigate to the previous or next month using buttons in the calendar widget.
	if (whichMonth === -1) {
		dateObject.setMonth(dateObject.getMonth() - 1);		//so when the previous month button gets click, the month value returend from getMonth will go down one 
	}
	else if (whichMonth === 1) {
		dateObject.setMonth(dateObject.getMonth() + 1); //so when the next month button gets click, the month value returend from getMonth will go up one 
	}
	
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	dayOfWeek = dateObject.getDay();
	captionValue = monthArray[month] + " " + year;		
	document.querySelector("#cal table caption").innerHTML = captionValue;	//add to DOM the name of the month, and year value
	
	
	//the series of conditional tests determines the number of days in the month
	if(month===0||month===2||month===4|| month === 6 || month === 7 || month === 9 || month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec	
		daysInMonth = 31; 
	}
	else if (month === 1) { // Feb
		if (year % 4 === 0) { // leap year test
			if(year % 100 === 0) { // year ending in 00 not a leap year unless // divisible by 400 
				if (year % 400 === 0) {
					daysInMonth = 29; 
				}			
				else{
					daysInMonth = 28;
				}
			}
			else {
			daysInMonth = 29;
			}
		}
		else {
			daysInMonth=28;		
		}
	}
	else {
			daysInMonth=30;
		}
		
	
	dateCells = document.getElementsByTagName("td");
	for (var i = 0; i < dateCells.length; i++) { // clear existing table dates
		dateCells[i].innerHTML = "";
		dateCells[i].className = "";
	}
		
	
	for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) { // add dates to days cells 
		dateCells[i].innerHTML = dateObject.getDate();		
		dateCells[i].className = "date";
		if (dateToday < dateObject) {		//if todays date is less than that entered for the dataObject
			dateCells[i].className = "futuredate";		//change class to this name
		}
		date = dateObject.getDate() + 1;		//change date to tomorrow and set date for it 
		dateObject.setDate(date);
	}
	
		dateObject.setMonth(dateObject.getMonth() - 1);
		// reset month, to month shown
		document.getElementById("cal").style.display = "block";
		// display calendar if it’s not already visible

} //end displayCalendar

function selectDate(event) {
	if (event === undefined) { // get caller element in IE8-- NOT NEEDED
		event = window.event;
	}
	
	var callerElement = event.target || event.srcElement;
	
	if (callerElement.innerHTML === "") {
	// cell contains no date, so don’t close the calendar
	document.getElementById("cal").style.display = "block";
	return false;
	} 
	
	dateObject.setDate(callerElement.innerHTML);  //put the date from the calling cell into the dataObject
	var fullDateToday = new Date();
	var dateToday = Date.UTC(fullDateToday.getFullYear(),
		fullDateToday.getMonth(), fullDateToday.getDate());
		//give me todays date
	var selectedDate = Date.UTC(dateObject.getFullYear(),
		dateObject.getMonth(), dateObject.getDate());
		//give me the selected date
		
	if (selectedDate <= dateToday) {
		document.getElementById("cal").style.display = "block";
		return false;
	}

	document.getElementById("tripDate").value =	dateObject.toLocaleDateString(); //add the selected date to the DOM #tripdate
	
	hideCalendar();		//closes calendar after a valid selection

}//end selectDate


function hideCalendar() { 
	document.getElementById("cal").style.display = "none";
}//end hideCalendar

function prevMo() { 	//this will change the parameter passed which will take the current month from getMonth, and go back one
	displayCalendar(-1);
} //end prevMo
function nextMo() {
	displayCalendar(1);
}//end nextMo



 function createEventListeners() {	 
	var dateField = document.getElementById("tripDate");
		if (dateField.addEventListener) {
			dateField.addEventListener("click", displayCalendar, false);
		} else if (dateField.attachEvent) {
			dateField.attachEvent("onclick", displayCalendar);
		}
		
	var dateCells = document.getElementsByTagName("td");
	if (dateCells[0].addEventListener) {
		for (var i = 0; i < dateCells.length; i++) { //create an event listener for all elements of the array (for all td's)
			dateCells[i].addEventListener("click", selectDate, false);
		}
	}
	
	var closeButton = document.getElementById("close");
	if (closeButton.addEventListener) {
		closeButton.addEventListener("click", hideCalendar, false);
	} 
	
	var prevLink = document.getElementById("prev");
	var nextLink = document.getElementById("next"); 
		if (prevLink.addEventListener) {
			prevLink.addEventListener("click", prevMo, false);
			 nextLink.addEventListener("click", nextMo, false);
		} else if (prevLink.attachEvent) { 
			prevLink.attachEvent("onclick", prevMo); 
			nextLink.attachEvent("onclick", nextMo);
		}

	
	
}//end createEventListeners

	if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", createEventListeners);
	}
		