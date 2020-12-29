/*
 Name: Justin Smith
   Course: ITSE 2402
   Date: 4/5/2019
   Date updated: 4/21/2019
   Final Project - Evelyn's Sweet Cakes
   Description: Script file for Evelyn's Sweet Cakes Website. This file will pull in the time 
   Filename: jds_time.js
*/

//A function to get the time
function getTime(){
       var a_p = "";
       var d = new Date();/*new instance of JavaScript Date object*/
       var curr_hour = d.getHours();
       var curr_date= (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
       (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
       (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
       (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;
       
       var curr_min = d.getMinutes().toString();
       var curr_sec = d.getSeconds().toString();
        
       if (curr_min.length == 1) { curr_min = "0" + curr_min; }
       if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; } 
       
	document.getElementById("date").innerHTML = curr_date + " " + curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p;
	
}//end getTime function 


/* create event listeners when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", getTime, false);
} else if (window.attachEvent) {
   window.attachEvent("onload",getTime);
}//end addEventListener