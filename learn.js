'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
}

const arr = [1,2];
const x = arr[0];
const [y1, y2] = arr;
console.log(x);

'use strict';

const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema','Benzema', 'Mingueza'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },
    rate(i) {
        // return `Rate for this.game.team${i} victory: this.game.adds.team${i}`
        switch (i) {
            case 1:
                console.log('Rate for ' + this.team1 + ' victory: ' + this.odds.team1)
                break
            case 2:
                console.log('Rate for ' + this.team2 + ' victory: ' + this.odds.team2)
                break
            default:
                console.log('Rate for draw: ' + this.odds.draw)
        }

    },
    goalScores() {
        for (let i of this.scored) {
            console.log(i);
        }
    }


};
// game.goalScores();

for (let [name, odd] of Object.entries(game.odds)) {
    // console.log(name, odd);
    const mutText = name === 'draw' ? 'draw' : `${game[name]} victory`;
    // console.log(`Rate for ${mutText}: ${odd}`)
}

const scores = {};
for (const player of game.scored) {
    scores[player] ? scores[player]++ : scores[player] = 1;
}
console.log(scores)


for (const [entry, i] of game.scored.entries()) {
    // console.log(entry,i);
    // console.log(`Goal ${entry+1}: ${i}`)
}

let oddSum = 0;
for (const odd of Object.values(game.odds)) {
    oddSum += odd
}
// console.log(oddSum);

// game.rate(1);
// game.rate(2);
// game.rate(4);


const medianValue = Object.values(game.odds).reduce((a, b) => a + b, 0) / Object.values(game.odds).length;
// console.log(medianValue)

const [players1] = [game.players[0]];
const [players2] = [game.players[1]];
const [players3] = [...game.players[0]];

const [goalkeeperReal, ...otherReal] = players1;

// console.log(goalkeeperReal)
// console.log(otherReal)

const allPlayers = [...game.players[0], ...game.players[1]]
// console.log(allPlayers)

const players1Total = ['Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola', ...players1]
// console.log(players1Total)

const {team1, team2, draw} = game.odds;
// console.log(team1);

for (const pl of players1Total.entries()) {
    // console.log(pl)
}
let counter = 0;
for (const goal of game.scored) {
    counter += 1;
    // console.log(`Goal ${counter}: ${goal}`)
}


//modal
// const modalWindow = document.querySelector('.modal-window');
// const overlay = document.querySelector('.overlay');
// const btnsOpenModal = document.querySelectorAll('.show-modal-window');
// const btnCloseModal = document.querySelector('.close-modal-window');
//
// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener('click', function () {
//         modalWindow.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     })
// }
//
// function CloseModal() {
//     modalWindow.classList.add('hidden');
//     overlay.classList.add('hidden');
// }
//
// btnCloseModal.addEventListener('click', CloseModal)
// overlay.addEventListener('click', CloseModal)
// document.addEventListener('keydown', function (event) {
//     console.log(event.key)
//     if(event.key === 'Escape' && !modalWindow.classList.contains('hidden')){
//         CloseModal();
//     }
// })


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
