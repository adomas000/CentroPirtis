var overlays = document.getElementsByClassName("overlay");
var imgs = document.getElementsByClassName("thumb-pic");
var imgContainers = document.getElementsByClassName("img-prev");

/*Start function*/
$(window).ready(function(){
    ImgOverlayWidthCorrection();
  
});
/*when window is resized*/
$(window).resize(function(){
    ImgOverlayWidthCorrection();
});

function ImgOverlayWidthCorrection(){
    for(var i=0;i<imgs.length;i++)
            {
                $(overlays[i]).css("width",imgs[i].offsetWidth);
            }
}

$(".previewModal").click(function(){
    var getImg = $(this).parents(".img-prev").children("img");
    if($("#imgPlaceholder").has("img"))
    {
        $("#imgPlaceholder").children("img").remove();
    }
    $("#imgPlaceholder").append($(getImg).clone());
});
    