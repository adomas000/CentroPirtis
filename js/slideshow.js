/*
    declaring variables for bullet points
*/
var bulletPointsBlock = document.getElementById("bullet-points");
var bulletPoints = bulletPointsBlock.children;
/*
declaring variables for slideshow functionality
*/
var slides = document.getElementsByClassName("slide");
var startAuto = true;
var slideShowSpeed = 6; //in seconds
var autoOffDelay = 10;//in seconds

/*
    controlling bullet points
*/
//giving every slide a name
for(var i = 0;i<slides.length;i++)
    $(slides[i]).attr("name",i);
function initBullets(){
    var bullet = bulletPoints[0];
    for(var i = 1;i<slides.length;i++)
    {
        var cloneBullet = $(bullet).clone();
        $(cloneBullet).attr("name", i);
        $(bulletPointsBlock).append($(cloneBullet));
    }
}
initBullets();

$(bulletPoints).click(function(e){

    changeSlideOnBulletPress(e.currentTarget);
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
center bullet points
*/
var Ww = 0;
var bulletPointsWidth = 0;
$(window).ready(function(){
    Ww = window.innerWidth;
    bulletPointsWidth = ((bulletPoints[0].offsetWidth)*bulletPoints.length)+(5*bulletPoints.length);
    $(bulletPointsBlock).css("width",bulletPointsWidth);
});




/*
showing first slide and hiding the others 
*/
function initFirstSlide() {
    for(var i=0;i<slides.length;i++){   
        $(slides[i]).hide();    
    }
    if(slides[0]){
        $(slides[0]).fadeIn();
        currSlide = getSlide();
        changeBulletPoint();
    }   
  }
initFirstSlide();

/*
    next/prev slide controls
*/
var prev = document.getElementById("control-left");
var next = document.getElementById("control-right");
var controls = document.getElementsByClassName("controls");
var currSlide;
$(controls).click(function(){
    //stop slideshow when arrows are clicked
    autoSlideShowStop();
    
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
/*
as it says, gets current slide
*/
function getSlide(){
    for(var i = 0; i<slides.length;i++){
        if($(slides[i]).css("display")!="none"){
            return slides[i];       
        }
    }
}

function changeSlideNext(currSlide){
    //
        
          currSlide = getSlide();
          console.log(currSlide);
      $(currSlide).fadeOut(1000,function () {  
        if(currSlide.nextElementSibling.className != "slide"){
                
            currSlide = slides[0];
            $(currSlide).fadeIn("slow");
        }else{
            $(currSlide.nextElementSibling).fadeIn("slow");
            changeBulletPoint();
        }

     });
}
//testing

//
function changeSlidePrev(currSlide){
        
       
        currSlide = getSlide();
     $(currSlide).fadeOut(1000,function () {  
        if( !currSlide.previousElementSibling||currSlide.previousElementSibling.className != "slide"){
                
            currSlide = slides[slides.length-1];
            $(currSlide).fadeIn("slow");
        }else{
            $(currSlide.previousElementSibling).fadeIn("slow");
            changeBulletPoint();
        }

     });
}

/*
AUTOMATIC slide show
*/
var timeInt;
function automaticSlideShow(){  
    if(timeInt)
        clearInterval(timeInt);
    
    if(!startAuto)
        return;

    timeInt = setInterval(function(){
        changeSlideNext();
        
        
},slideShowSpeed*1000);

}
automaticSlideShow();

//stop slide show
var timeout;
//
function autoSlideShowStop(){
   startAuto = false;
   automaticSlideShow();
    //clearTimeout(timeout);
    if(timeout)
    clearInterval(timeout);
     
   timeout = setTimeout(function () { 
    startAuto = true;
    automaticSlideShow();
    changeBulletPoint();
    },autoOffDelay*1000);
     
    
    // for(var i = 0; i <timeout;i++)
    // clearTimeout(i);
}

/*
    bullet point functionality
*/
function changeBulletPoint(){
    
    var currSlide = getSlide();
    
     for(var i = 0;i<bulletPoints.length;i++){       
        if($(bulletPoints[i]).attr("name") == $(currSlide).attr("name")){
            if(!$(bulletPoints[i]).hasClass("selected-point"))
                     $(bulletPoints[i]).addClass("selected-point"); 
                     console.log("changed bullet when currSlide: ", currSlide, "and bullet point is: ",bulletPoints[i] );
        }
        else{
            $(bulletPoints[i]).removeClass();
        }
    }  
}
changeBulletPoint();

 function changeSlideOnBulletPress(currBullet){
        autoSlideShowStop();
        currSlide = getSlide();
      $(currSlide).fadeOut(1000,function () {  
            $(slides[$(currBullet).attr("name")]).fadeIn("slow");
        

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



