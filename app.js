// JavaScript Document
var min = 0;
var sec = 0;
var msec = 0;
var min_display=document.getElementById("min");
var sec_display=document.getElementById("sec");
var msec_display=document.getElementById("msec");

var interval;

function timer(){
	msec++
	msec_display.innerHTML=msec;
	if(msec >= 100){
	sec++
	sec_display.innerHTML=sec;
		msec=0;
	}else if(sec >= 60){
		min++
		min_display.innerHTML=min;
		sec=0;
	}
	 
}
function start(){
interval = setInterval(timer,10);
	}
function stop(){
	clearInterval(interval);
}
function reset(){
	min=0;
	sec=0; 
	msec=0;
	min_display.innerHTML=min;
	sec_display.innerHTML=sec;
	msec_display.innerHTML=msec;
	stop()
}