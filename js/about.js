let myphoto=document.getElementById('myphoto')
let navList=document.getElementById('ul')
let imgdisp=document.getElementById('imgdisp')
let cross=document.getElementById('cross')
let section=document.querySelector('section')
let body=document.querySelector('body')

myphoto.onclick=function(){
  imgdisp.style.display='flex'
  // navList.classList.add('blur')
  navList.style.display='none'
  section.style.display='none'
}

cross.onclick=function () {
  imgdisp.style.display='none'
  // navList.classList.remove('blur')
  navList.style.display='flex'
  section.style.display='block'
}

// hamburger
let hamburger = document.getElementById('hamburger')
let skills=document.querySelector('.skills')
let connect=document.querySelector('.connect')

hamburger.addEventListener("click", () => {
  body.classList.toggle('bodyheight')
  skills.classList.toggle('response')
  connect.classList.toggle('response1')
  if (navList.style.display=='flex'){
    navList.style.display='none'
  }
  else{
    navList.style.display='flex'
  }
})