let myphoto = document.getElementById('myphoto')
let navList = document.getElementById('ul')
let imgdisp = document.getElementById('imgdisp')
let cross = document.getElementById('cross')
let content = document.getElementById("content")

myphoto.onclick = function () {
  imgdisp.style.display = 'flex'
  // navList.classList.add('blur')
  navList.style.display = 'none'
  content.style.display = 'none'
}

cross.onclick = function () {
  imgdisp.style.display = 'none'
  // navList.classList.remove('blur')
  navList.style.display = 'flex'
  content.style.display = 'block'
}

let i = 0;
let txt = 'Hello! Myself Yash Gupta. Welcome to my website.This site is designed using pure HTML, CSS and Javascript. Go ahead and explore this website. '; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

// hamburger
let hamburger = document.getElementById('hamburger')
hamburger.addEventListener("click", () => {
  if (navList.style.display=='flex'){
    navList.style.display='none'
  }
  else{
    navList.style.display='flex'
  }
})

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()



