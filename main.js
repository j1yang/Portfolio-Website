'use strict'

// Transparent nav bar become dark when scroll down
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  if(window.scrollY > navbarHeight){
    
    navbar.classList.add('navbar--dark')
  }else{
    navbar.classList.remove('navbar--dark')
  }
})

// Handle scrolling when menu clicked
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  scrollIntoView(link);
});

// Handle scrolling when contact btn clicked
const contact = document.querySelector('.home__contact-btn');
contact.addEventListener('click', (event)=>{
  scrollIntoView('#contact');
});

// Make home slowly fade when scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity = 1 - window.scrollY/(homeHeight);
});


// Show Arrow-Up button when scrolling
document.addEventListener('scroll',()=>{
  if(window.home){}
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}