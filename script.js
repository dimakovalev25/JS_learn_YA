'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let bestScore = 0;
document.querySelector('.question').textContent = secretNumber;
// console.log(secretNumber)

const eventHandler = function () {
    const guessNumber = Number(document.querySelector('.number-input').value);
    document.querySelector('.label-score').textContent = `Очки: ${score}`;

    //no input
    if (!guessNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';

        //  won
    } else if (guessNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.questi' +
            'on').style.fontSize = '50px';
        document.querySelector('.question').textContent = secretNumber;
        if(score > bestScore) {
            bestScore=score
            document.querySelector('.highscore').textContent=bestScore
        }


        // to high
    } else if (guessNumber > secretNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Много!';
            score--;
        }

        // to low
    } else if (guessNumber < secretNumber) {
        document.querySelector('.guess-message').textContent = 'Маловато!';
        score--;
    }
}

function eventAgain() {
    document.querySelector('.label-score').textContent = `Очки: 20`;
    document.querySelector('.guess-message').textContent = 'Введите число!';
    document.querySelector('.question').textContent = '???';
    document.querySelector('body').style.backgroundColor = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number-input').value = '';
    document.querySelector('.question').textContent = secretNumber;

}

document.querySelector('.check').addEventListener('click', eventHandler)
document.querySelector('.again').addEventListener('click', eventAgain)


