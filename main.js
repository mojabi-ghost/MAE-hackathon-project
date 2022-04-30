//Javascript

var myInterval = setInterval(next_image, 5000, true);

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

const bios = [
  "Aquaman (Arthur Curry) is a superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics #73 (November 1941).",
  "Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939",
  "Cyborg (Victor Stone) is a superhero appearing in American comic books published by DC Comics. The character was created by writer Marv Wolfman and artist George Pérez and first appears in an insert preview in DC Comics Presents #26 (October 1980)",
  "The Flash (or simply Flash) is the name of several superheroes appearing in American comic books published by DC Comics. Created by writer Gardner Fox and artist Harry Lampert, the original Flash first appeared in Flash Comics #1 (cover date January 1940/release month November 1939).",
  "Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).",
  "Wonder Woman is a superheroine appearing in American comic books published by DC Comics. The character is a founding member of the Justice League. The character first appeared in All Star Comics #8 published October 21, 1941[4] with her first feature in Sensation Comics #1 in January 1942.",
]

// create shortcut vars
const frame = document.querySelector(".frame");
const current_links = document.getElementsByClassName("wikiLink");
const slides = frame.querySelectorAll("img");
const caption = document.querySelector(".caption"); 
const paragraph = document.querySelector(".paragraph"); 

// with JS active, hide all images
slides.forEach((slide) => {
  slide.classList.add("hide", "abs-pos");
});

// show the first slide
slides[0].classList.remove("hide");
set_attributes(0);
caption.innerHTML = captions[0];
paragraph.innerHTML = bios[0];

// Change the attributes of the <image> tags and <a> tags
function set_attributes(i){
  paragraph.innerHTML = bios[i];
  for(let j = 0; j < current_links.length; j++){
    current_links[j].setAttribute("href", links[i]);
    slides[j].setAttribute("alt", captions[i]);
    slides[j].setAttribute("src", image_location[i]);
  }
}

// Find the index that represents the current image
function get_current_image_index(){
  for(let i = 0; i < captions.length; i++){
    if(slides[0].alt == captions[i]){
      return i;
    }
  }
}

function change_image(autoSlide = false){
  // deactivate current image
  slides[0].classList.toggle("hide");
  slides[0].classList.add("current")

  // activate next image
  slides[1].classList.toggle("hide");
  slides[1].classList.toggle("current");

  //change caption text
  caption.innerHTML = slides[0].alt;
  if(!autoSlide){
    clearInterval(myInterval);
  }
}

//
function next_image(autoSlide = false){
  i = get_current_image_index();
  if(i + 1 > 5){
    set_attributes(0)
  }
  else{
    set_attributes(i + 1)
  }
  change_image(autoSlide);
}

function prev_image(autoSlide = false){
  i = get_current_image_index();
  if(i - 1 < 0){
    set_attributes(captions.length - 1)
  }
  else{
    set_attributes(i - 1)
  }
  change_image(autoSlide);
}