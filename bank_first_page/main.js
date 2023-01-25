'use strict';

//choise----------------------------------------------------------------

// console.log(document.documentElement)
// console.log(document.head)
// const sec = document.querySelectorAll('.section');
// const hea = document.querySelector('header');
// console.log(sec);
// console.log(hea);
// // console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));


//add and create----------------------------------------------------------------

//.insertAdjacentHTML()
const mess = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerHTML = 'h1 message';
h1.textContent = 'simple bank';
// mess.style = 'backgroundColor: red'
// mess.style.backgroundColor='white';
// mess.textContent='We use cookies!';

mess.innerHTML = 'We use cookies! <button class="btn btn--close-cookie">OK!</button>';
const header = document.querySelector('.header');
header.prepend(mess);
// header.prepend(h1);
// header.before(mess);
// header.after(mess);
// header.prepend(mess.cloneNode(true));
// header.append(mess.cloneNode(true));
// console.log(header)
document.querySelector('.btn--close-cookie').addEventListener('click', () => mess.remove());


//style, class, attribute ----------------------------------------------
// mess.style.backgroundColor = 'white';
mess.style.fontSize = '25px'
// mess.style.width = '100%';
// console.log(mess.style.width);
// console.log(getComputedStyle(mess));
mess.style.height = Number.parseFloat(getComputedStyle(mess).height) + 15 + 'px';
// console.log(getComputedStyle(mess).height);

document.documentElement.style.setProperty('--color-first', '#076785')
// console.log(document.documentElement) in css    :root{--color-first: 'red'}

// add class
mess.classList.add('a');
mess.classList.remove('a');
mess.classList.toggle('a');
mess.classList.contains('a');


// events

// const h2 = document.querySelector('h1');
// h2.addEventListener('mouseenter', function (e) {
//     console.log('mouse');
// })
//
// const enterH2 = function (e) {
//     console.log('click')
//     // h2.removeEventListener('click',enterH2)
// }
//
// setTimeout(() => h2.removeEventListener('click', enterH2), 2000)
//
// h2.addEventListener('click', enterH2)

// h2.onmouseenter= function () {  old method
//     console.log('enter')
// }


//event propagation   rgb(122, 16, 33)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`

// console.log(getRandomColor())

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     console.log('link', e.target)
//     this.style.backgroundColor = getRandomColor()
//     e.stopPropagation()
// })
//
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     console.log('links', e.target, e.currentTarget)
//     this.style.backgroundColor = getRandomColor()
// })
//
// document.querySelector('.nav').addEventListener('click', function (e) {
//     console.log('nav', e.target, e.currentTarget)
//     this.style.backgroundColor = getRandomColor()
// })
//
// document.querySelector('body').addEventListener('click', function (e) {
//     console.log('body', e.target, e.currentTarget)
//     this.style.backgroundColor = getRandomColor()
// })

// document.addEventListener('click', function (e) {
//     console.log('document', e.target)
//     this.style.backgroundColor = getRandomColor()
// })