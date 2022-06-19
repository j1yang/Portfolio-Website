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
  selectNavItem(target);
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
  selectNavItem(navItems[0]);
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

  //Remove selection from previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected')


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




const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#projects',
  '#testimonials',
  '#contact'
];

const sections = sectionIds.map(id=> document.querySelector(id));
const navItems = sectionIds.map(id=>document.querySelector(`[data-link="${id}"]`))


let selectedNavItem = navItems[0];
let selectedNavIndex;


function selectNavItem(selected){
  selectedNavItem.classList.remove('active')
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
};


const observerOption = {
  root:null,
  rootMargin:'0px',
  threshold: 0.3
};



const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting && entry.intersectionRatio > 0){
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      
      if(entry.boundingClientRect.y < 0){
        selectedNavIndex = index + 1;
      }else{
        selectedNavIndex = index -1;
      }
    }
  });
};



const observer = new IntersectionObserver(observerCallback, observerOption);
sections.forEach(section => observer.observe(section));


window.addEventListener('wheel', ()=>{
  const currentClientHeight = window.scrollY + window.innerHeight + 1;
  //console.log(`scroll height: ${currentClientHeight}`);
  //console.log(`client height: ${document.body.clientHeight}`);

  if(window.scrollY === 1){
    selectedNavIndex = 0;
  }else if(Math.round(currentClientHeight) >= document.body.clientHeight){
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});