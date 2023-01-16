'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal-window');
const btnCloseModal = document.querySelector('.close-modal-window');

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

function CloseModal() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', CloseModal)
overlay.addEventListener('click', CloseModal)
document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if(event.key === 'Escape' && !modalWindow.classList.contains('hidden')){
        CloseModal();
    }
})















// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20
// let bestScore = 0;
// document.querySelector('.question').textContent = secretNumber;
// // console.log(secretNumber)
//
// const eventHandler = function () {
//     const guessNumber = Number(document.querySelector('.number-input').value);
//     document.querySelector('.label-score').textContent = `Очки: ${score}`;
//
//     //no input
//     if (!guessNumber) {
//         document.querySelector('.guess-message').textContent = 'Введите число!';
//
//         //  won
//     } else if (guessNumber === secretNumber) {
//         document.querySelector('.guess-message').textContent = 'Правильно!';
//         document.querySelector('body').style.backgroundColor = 'green';
//         document.querySelector('.questi' +
//             'on').style.fontSize = '50px';
//         document.querySelector('.question').textContent = secretNumber;
//         if(score > bestScore) {
//             bestScore=score
//             document.querySelector('.highscore').textContent=bestScore
//         }
//
//
//         // to high
//     } else if (guessNumber > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.guess-message').textContent = 'Много!';
//             score--;
//         }
//
//         // to low
//     } else if (guessNumber < secretNumber) {
//         document.querySelector('.guess-message').textContent = 'Маловато!';
//         score--;
//     }
// }
//
// function eventAgain() {
//     document.querySelector('.label-score').textContent = `Очки: 20`;
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//     document.querySelector('.question').textContent = '???';
//     document.querySelector('body').style.backgroundColor = '';
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector('.number-input').value = '';
//     document.querySelector('.question').textContent = secretNumber;
//
// }
//
// document.querySelector('.check').addEventListener('click', eventHandler)
// document.querySelector('.again').addEventListener('click', eventAgain)
//
//
