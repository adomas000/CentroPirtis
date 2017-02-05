var overlays = document.getElementsByClassName("overlay");
var imgs = document.getElementsByClassName("thumb-pic");

for(var i=0;i<imgs.length;i++){
    console.log(imgs[i].offsetWidth);
    overlays[i].style.width = imgs[i].offsetWidth;
    console.log(overlays[i].offsetWidth);
}
