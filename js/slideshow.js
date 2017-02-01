/*
    declaring variables for bullet points
*/
var bulletPointsBlock = document.getElementById("bullet-points");
var bulletPoints = bulletPointsBlock.children;

/*
    controlling bullet points
*/
$(bulletPoints).click(function(){

    for(var i = 0;i<bulletPoints.length;i++){

        if($(this).is($(bulletPoints[i]))){
            if(!$(this).hasClass("selected-point"))
                     $(this).addClass("selected-point"); 
        }
        else{
            $(bulletPoints[i]).removeClass();
        }
    }  
});

/*
declaring variables for slideshow functionality
*/
var slides = document.getElementsByClassName("slide");

/*
showing first slide and hiding the others 
*/
function init() {
    for(var i=0;i<slides.length;i++){   
        $(slides[i]).hide();    
    }
    if(slides[0]){
        $(slides[0]).fadeIn();
    }   
  }
init();

/*
    next/prev slide controls
*/
var prev = document.getElementById("control-left");
var next = document.getElementById("control-right");
var controls = document.getElementsByClassName("controls");

$(controls).click(function(){
    //get current showing slide
    var currSlide = getSlide();
    //
    if($(this).is($(prev))){
        // show previous slide
      changeSlidePrev(currSlide);
    }
    else{
        // show next slide
      changeSlideNext(currSlide);
  }
});

function getSlide(){
    for(var i = 0; i<slides.length;i++){
        if($(slides[i]).css("display")!="none"){
            return slides[i];       
        }
    }
}

function changeSlideNext(currSlide){
      
      $(currSlide).fadeOut(1000,function () {  
        if(currSlide.nextElementSibling.className != "slide"){
                
            currSlide = slides[0];
            $(currSlide).fadeIn("slow");
        }else{
            $(currSlide.nextElementSibling).fadeIn("slow");
        }

     });
}
function changeSlidePrev(currSlide){
      
     $(currSlide).fadeOut(1000,function () {  
        if( !currSlide.previousElementSibling||currSlide.previousElementSibling.className != "slide"){
                
            currSlide = slides[slides.length-1];
            $(currSlide).fadeIn("slow");
        }else{
            $(currSlide.previousElementSibling).fadeIn("slow");
        }

     });
}

/*
    Wait function in miliseconds (no need)
*/
// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }



