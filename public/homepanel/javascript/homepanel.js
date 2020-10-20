
// //document.body.style.backgroundColor = "#f3f3f3";
// //document.body.style.backgroundImage = "url('/images/1.jpg')";
// var max = 12;
// var min = 1;
// //var counter = Math.floor(Math.random() * (max - min)) + min;
// counter = 1;
// setInterval(function(){
//   //document.getElementById('radio' + counter).checked = true;
//   //counter++;
//   document.getElementById('radio' + counter).checked = true;
//   counter = Math.floor(Math.random() * (max - min)) + min;

  
// }, 5000);
// var counter = 1;
// setInterval(function(){
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if(counter > 4){
//     counter = 1;
//   }
// }, 5000);

/* <script type="text/javascript">
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
</script> */

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}