//Javascript

document.addEventListener('DOMContentLoaded', init);
var myInterval = "";
 
function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  const caption = document.querySelector(".caption");
  const controls = document.querySelector(".controls");
  

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide", "abs-pos");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");
  
  //make the controls work
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);

   // set the caption dynamically
   caption.innerHTML = frame.firstElementChild.alt;

   //show the controls
   controls.style.display = "block";

  
   myInterval = setInterval(changeSlide, 5000);
}



function changeSlide(e) {
  
    // stop link from trying to reload page
    if(e) {
      e.preventDefault();
      clearInterval(myInterval);
    }
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = document.querySelector(".caption");
    let showing = document.querySelector(".current");
    let nextUp = "";
  
    if(!e || e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    }else{
      nextUp = showing.previousElementSibling;
    }
  
    
    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    //change caption text
    caption.innerHTML = nextUp.alt;

    
  }
  
const DC = [
    "/images/aquaman.jpg",
    "/images/batman.jpg",
    "/images/cyborg.jpg",
    "/images/flash.jpg",
    "/images/superman.jpg",
    "/images/wonderWoman.jpg",
    ]

function get_current_image_index(current_image){
    for (let i = 0; i < DC.length; i++) {
        if (current_image.src.substring(21) == DC[i]){
            return i;
        }
    }
}

function next_image() {
    let current_image = document.querySelector("img");
    i = get_current_image_index(current_image);
    if (i + 1 == DC.length){
        current_image.src = current_image.src.substring(0, 21) + DC[0];
    }
    else{
        current_image.src = current_image.src.substring(0, 21) + DC[i + 1];
    }
}

function prev_image(){
    let current_image = document.querySelector('img');
    i = get_current_image_index(current_image);
    if (i - 1 < 0){
        current_image.src = current_image.src.substring(0, 21) + DC[DC.length - 1];
    }
    else{
        current_image.src = current_image.src.substring(0, 21) + DC[i - 1];
    }
}