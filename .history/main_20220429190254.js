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
  const bio = document.querySelector(".bio")
  

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

document.getElementById("bio").innerText = document.getElementById("mainImage").attributes.bio.textContent;



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
  
