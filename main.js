//Javascript

//var myInterval = setInterval(next_image, 5000);

const links = [
  "https://en.wikipedia.org/wiki/Aquaman",
  "https://en.wikipedia.org/wiki/Batman", 
  "https://en.wikipedia.org/wiki/Cyborg_(DC_Comics)", 
  "https://en.wikipedia.org/wiki/Flash_(DC_Comics_character)",
  "https://en.wikipedia.org/wiki/Superman",
  "https://en.wikipedia.org/wiki/Wonder_Woman"
]

const image_location = [
  "images/aquaman.jpg",
  "images/batman.jpg",
  "images/cyborg.jpg",
  "images/flash.jpg",
  "images/superman.jpg",
  "images/wonderWoman.jpg",
]

const captions = [
  "Aquaman (1/6)",
  "Batman (2/6)",
  "Cyborg (3/6)",
  "The Flash (4/6)",
  "Superman (5/6)",
  "Wonderwoman (6/6)",
]
 
//create shortcut vars
const frame = document.querySelector(".frame");
const current_links = document.getElementsByClassName("wikiLink");
const slides = frame.querySelectorAll("img");
const altName = frame.querySelectorAll("alt");
const caption = document.querySelector(".caption");  

//with JS active, hide all images
slides.forEach((slide) => {
  slide.classList.add("hide", "abs-pos", "current");
});

// show the first slide
slides[0].classList.remove("hide");
set_attributes(0);
caption.innerHTML = captions[0];

function set_attributes(i){
  for(let j = 0; j < current_links.length; j++){
    current_links[j].setAttribute("href", links[i]);
    slides[j].setAttribute("alt", captions[i]);
    slides[j].setAttribute("src", image_location[i]);
  }
}

function get_current_image_index(){
  for(let i = 0; i < captions.length; i++){
    if(slides[0].alt == captions[i]){
      return i;
    }
  }
}

function change_image(){
  // deactivate current image
  slides[0].classList.add("hide");

  // activate next image
  slides[1].classList.remove("hide");

  //change caption text
  caption.innerHTML = slides[0].alt;
}

function next_image(){
  i = get_current_image_index();
  if(i + 1 > 5){
    set_attributes(0)
  }
  else{
    set_attributes(i + 1)
  }
  change_image();
  
}

function prev_image(){
  i = get_current_image_index();
  if(i - 1 < 0){
    set_attributes(captions.length - 1)
  }
  else{
    set_attributes(i - 1)
  }
  change_image();
  
}
