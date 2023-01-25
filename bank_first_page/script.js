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
      behavior:'smooth'
    })
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('links', e.target)

    if(e.target.classList.contains('nav__link')){
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





