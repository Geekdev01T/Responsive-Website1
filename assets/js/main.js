// SHOW MENU 
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// SHOW MENU 
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}


// MENU HIDDEN
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //When we click on each nav__link, we relove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// ADD BLUR HEADER

const blurHeader = () => {
    const header = document.getElementById('header');
    //When the scroll is greater than 50 viewport height, add the blur-header class to the header
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);


// FAVORITE SWIPER
let swiperFacorite = new Swiper('.favorite__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    gradCursor: true,

    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});

// SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, //Animation repeat
});

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer__container`);
sr.reveal(`.home__title span:nth-child(1)`, { origin: 'left', opacity: 1 });
sr.reveal(`.home__title span:nth-child(3)`, { origin: 'right', opacity: 1 });
sr.reveal(`.home__tooltip, .home__button, .model__button`, { origin: 'bottom' });
sr.reveal(`.about__data`, { origin: 'left' });
sr.reveal(`.about__img, .model__tooltip`, { origin: 'right' });