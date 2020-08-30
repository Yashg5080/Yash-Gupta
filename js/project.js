let myphoto = document.getElementById('myphoto')
let navList = document.getElementById('ul')
let imgdisp = document.getElementById('imgdisp')
let cross = document.getElementById('cross')
let section = document.querySelector('section')

myphoto.onclick = function () {
  imgdisp.style.display = 'flex'
  navList.style.display = 'none'
  section.style.display = 'none'
}

cross.onclick = function () {
  imgdisp.style.display = 'none'
  navList.style.display = 'flex'
  section.style.display = 'block'
}
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