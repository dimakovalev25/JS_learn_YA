'use strict';

//Elements selections
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Game initial
score0Element.textContent = 0;
score1Element.textContent = 0;
dice.classList.add('hidden');


const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;
//Roll the dice

const switchActivePlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        // console.log(player0.classList)
        //Generate a random number
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        // console.log(diceNumber);

        //Display number
        dice.classList.remove('hidden');
        dice.src = `dice${diceNumber}.png`;

        //if 1 change player
        if (diceNumber !== 1) {
            currentScore = currentScore + diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchActivePlayer();

        }
    }
})


btnHold.addEventListener('click', function () {
    if (isPlaying) {
        totalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
        console.log(totalScores);

        if (totalScores[activePlayer] >= 25) {
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            dice.classList.add('hidden');
        } else {
            switchActivePlayer();
        }
    }

})