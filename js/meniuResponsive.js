/**
 *
 * Changing meniu view depending on the screen size
 * 
 */
 var meniu = document.getElementById("meniu");
 var list = $(meniu).siblings();
 //
 var meniuIcon = $("#drp");
 var newMeniu = document.createElement("ul");
initNewIcon();
initNewMeniu();
//init
resize();
//constant watching
 window.onresize = function () {
 	resize();
 }
 
 function resize(){
 	if($(window).width()<= 830)
	{
		$(meniu).hide();
		$(meniuIcon).show();
	}
	else{
		$(meniu).show();
		$(meniuIcon).hide();
	}
 }

 function initNewIcon(){
	$(meniuIcon).css({
		"font-size":"24px",
		"float":"right",
		"margin":"25px 25px",
		"cursor":"pointer"
	});
	$(meniuIcon).hide();
	$(meniu).parent().append($("#drp"));
 
 }
 function initNewMeniu(){
	//$(newMeniu).append($(list));
	//$(newMeniu).insertAfter($("#header"));

 }