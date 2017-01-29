/**
 *
 * Changing meniu view depending on the screen size
 * 
 */
 var meniu = document.getElementById("meniu");
 var li = $(meniu).siblings();
//init
resize();
//constant watching
 window.onresize = function () {
 	resize();
 }
 
 function resize(){
 	if($(window).width()<= 830)
	{
		
		
	}
	else{
		
		
	}
 }