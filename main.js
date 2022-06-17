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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//Navbar toggle button click-> show dropdown
const navBarToggleBtn = document.querySelector('.navbar__toggle-btn');
navBarToggleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open');
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
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click',()=>{
  scrollIntoView('#home');
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


// Project

const porjectBtnContainer = document.querySelector('.project__categories');
const projectsContainer = document.querySelector('.projects__project');
const projects = document.querySelectorAll('.project');

porjectBtnContainer.addEventListener('click', (e)=>{
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }
  projectsContainer.classList.add('anim-out');
  console.log(filter + '--');
  
  setTimeout(()=>{
    projects.forEach((project)=>{
      console.log(project.dataset.type+'-');
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      }else{
        project.classList.add('invisible');
      }
    });
    projectsContainer.classList.remove('anim-out');
  },300)
});