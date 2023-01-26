'use strict';

//smooth transition  scrollIntoView
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScroll.addEventListener('click', function (e) {
    const section1Coords = section1.getBoundingClientRect();
    console.log(section1Coords)
    // window.scrollTo({
    //     left: section1Coords.left + window.pageXOffset,
    //     top: section1Coords.left + window.pageYOffset,
    //     behavior: 'smooth'
    // });
    section1.scrollIntoView({
        behavior: 'smooth'
    })
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('links', e.target)

    if (e.target.classList.contains('nav__link')) {
        const href = e.target.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })
    }

})


// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
    '.btn--show-modal-window'
);

const openModalWindow = function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button => button.addEventListener('click', openModalWindow))

// for (let i = 0; i < btnsOpenModalWindow.length; i++)
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModalWindow();
    }
});


//making tabs

const tabContents = document.querySelectorAll('.operations__content');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');

tabContainer.addEventListener('click', function (e) {
    const clickedButton = e.target.closest('.operations__tab');
    //guard
    if (!clickedButton) return;

    // console.log(clickedButton)
    tabs.forEach(i => i.classList.remove('operations__tab--active'))
    clickedButton.classList.add('operations__tab--active');

    tabContents.forEach(content => content.classList.remove('operations__content--active'))
    document.querySelector(`.operations__content--${clickedButton.dataset.tab}`).classList.add('operations__content--active');
    console.log(tabContents)
    console.log(clickedButton.dataset.tab)

})


//button fading

const navLinksHoverAnimation = function (e, opacity) {
    if (e.target.classList.contains('nav__link')) {
        const linkOver = e.target;
        const siblingLinks = linkOver.closest('.nav__links').querySelectorAll('.nav__link');
        const logo = linkOver.closest('.nav').querySelector('img');
        const logoText = linkOver.closest('.nav').querySelector('.nav__text');

        siblingLinks.forEach(el => {
            if (el !== linkOver) el.style.opacity = opacity;
        })
        logo.style.opacity = opacity;
        logoText.style.opacity = opacity;
    }
}

const nav = document.querySelector('nav');
nav.addEventListener('mouseover', function (e) {
    navLinksHoverAnimation(e, 0.4)
})
nav.addEventListener('mouseout', function (e) {
    navLinksHoverAnimation(e, 1)
})


//sticky navigation

// const sectionCoords = section1.getBoundingClientRect();
// // console.log(sectionCoords)
//
// window.addEventListener('scroll', function (e) {
//     // console.log(window.scrollY);
//     if (window.scrollY > sectionCoords.top) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// })


////////////////////////////observer
//intersection observer api -- sticky


const header = document.querySelector('.header');
const getStickyNav = function (entries) {
    const entry = entries[0];
    // console.log(entry.isIntersecting)
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

const HeaderObserver = new IntersectionObserver(getStickyNav, {
    root: null,
    threshold: 0,
});
HeaderObserver.observe(header)
// console.log(observer)


//animation parts site
//section--hidden
//красивое всплывание секций на сайте

const allSections = document.querySelectorAll('.section');
const appearanceSection1 = function (entries, observer) {

    const entry = entries[0];
    if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
    // observer.unobserve(entry.target)

}

const sectionObserver = new IntersectionObserver(appearanceSection1, {
    root: null,
    threshold: 0.25,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
    // console.log(sectionObserver.observe(section))
})


//lazy loading

const lazyImages = document.querySelectorAll('img[data-src]');
// console.log(lazyImages)
const loadImages = function (entries, observer) {
    const entry = entries[0];
    if (!entry) return
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    })
}

const lazyImagesObserver = new IntersectionObserver(loadImages, {
    root: null,
    threshold: 0.7,
    // rootMargin: '200px'
})

lazyImages.forEach(image => lazyImagesObserver.observe(image));


//Slider

const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(300px)';
// slider.style.overflow = 'visible';

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
let slidesNumber = slides.length;


btnLeft.addEventListener('click', () => {

    if (currentSlide === 0) {
        currentSlide = slidesNumber -1;
    } else {
        currentSlide--;
    }

    slides.forEach((slide, i) => slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
    console.log('left')
})

btnRight.addEventListener('click', () => {

    if (currentSlide === slidesNumber -1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    slides.forEach((slide, i) => slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
    console.log('right')

})

slides.forEach((slide, i) => slide.style.transform = `translateX(${i * 100}%)`)
// console.log(slides)