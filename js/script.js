'use strict';
let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

let fontSize = 10,
    columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#00C4F0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 37);

window.onscroll = function() {myFunction();};

let navbar = document.querySelector('.navbar'),
    header = document.querySelector('.header');

let sticky = header.offsetHeight;

function myFunction() {
  if (window.pageYOffset > sticky*1) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const animItems = document.querySelectorAll('.anim-items'),
      progressLines = document.querySelectorAll('.about__progress-line');

  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for( let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        if(animItem.classList.contains('about__progress')) {
          progressLines.forEach(item => {
            item.classList.add('active-progress-anim');
          });
        }
          animItem.classList.add('active');
        
      } else {
        if(!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop};
  }

const slides = document.querySelectorAll('.portfolio__slider-wrapper'),
      prev = document.querySelector('.portfolio__slider-arrow_left'),
      next = document.querySelector('.portfolio__slider-arrow_right'),
      cover = document.querySelector('.portfolio__slider-cover'),
      slidesField = document.querySelector('.portfolio__slider-inner'),
      width = window.getComputedStyle(cover).width;
let slideIndex = 1,
    slideOffset = 0;

    prev.addEventListener('click', () => {
      if(slideOffset == 0) {
        slideOffset = +width.slice(0, width.length - 2) * (slides.length -1);
      } else {
        slideOffset -= +width.slice(0, width.length - 2);
      }
      slidesField.style.transform = `translateX(-${slideOffset}px)`;
    });

      next.addEventListener('click', () => {
        if(slideOffset == +width.slice(0, width.length - 2) * (slides.length -1)) {
          slideOffset = 0;
        } else {
          slideOffset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${slideOffset}px)`;
      });

  slidesField.style.width = 100 * slides.length + '%';
  slides.forEach(slide => {
    slide.style.width = width;
  });


  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0; 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

let navbarBtn = document.querySelector('.navbar__btn'),
    navbarList = document.querySelector('.navbar__list'),
    navbarItems = document.querySelectorAll('.navbar__item');

    navbarBtn.addEventListener('click', () => {
      if(navbarList.style.left == '0px') {
        navbarList.style.left = '-100%';
      } else {
        navbarList.style.left = '0';
      }
    });

    navbarItems.forEach(item => {
      item.addEventListener('click', () => {
        navbarList.style.left = '-100%';
      });
    });