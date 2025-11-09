// preloader 
window.addEventListener('load', () => {
  setTimeout(removePreloader, 800)
})

var loader = document.getElementById('preloader');

function removePreloader() {
  loader.style.display = 'none'
}


// burger menu
const burgerPop = document.getElementById('burger-pop')
burgerPop.style.display = "none"

function showBurger() {
  if (burgerPop.style.display === "none") {
    burgerPop.style.display = "block"
  } else {
    burgerPop.style.display = "none"
  }
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});