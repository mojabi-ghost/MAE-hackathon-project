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

   // set the caption dynamically
   caption.innerHTML = frame.firstElementChild.alt;

   //show the controls
   controls.style.display = "block";

   myInterval = setInterval(changeSlide, 5000);
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
    console.log(current_image)
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