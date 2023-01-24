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
// mess.style = 'backgroundColor: red'
// mess.style.backgroundColor='white';
// mess.textContent='We use cookies!';

mess.innerHTML = 'We use cookies! <button class="btn btn--close-cookie">OK!</button>';
const header = document.querySelector('.header');
header.prepend(mess);
// header.before(mess);
// header.after(mess);
// header.prepend(mess.cloneNode(true));
// header.append(mess.cloneNode(true));
// console.log(header)
document.querySelector('.btn--close-cookie').addEventListener('click', () => mess.remove());


//style, class, attribute ----------------------------------------------
// mess.style.backgroundColor = 'white';
// mess.style.width = '100%';
// console.log(mess.style.width);
// console.log(getComputedStyle(mess));
mess.style.height = Number.parseFloat(getComputedStyle(mess).height) + 10 + 'px';
// console.log(getComputedStyle(mess).height);

document.documentElement.style.setProperty('--color-first', '#076785')
// console.log(document.documentElement)

mess.classList.add('a');
mess.classList.remove('a');
mess.classList.toggle('a');
mess.classList.contains('a');

