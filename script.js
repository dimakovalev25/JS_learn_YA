'use strict';

// const flightNum = 'BV328'
// const passenger1145 = {
//     name: 'Jo',
//     lastName: 'Brown',
//     passport: 'HF121212'
// }
//
// const checkIn = function (flight, passenger) {
//     flight = 'bv328';
//     passenger.name=passenger.name.toLowerCase();
//     passenger.lastName=passenger.lastName.toLowerCase();
//
//     if(passenger.passport === 'HF121212'){
//         alert ('Ok!')
//     } else {
//         alert ('Failed!')
//     }
//
// }
//
// checkIn(flightNum, passenger1145);
//
// console.log(flightNum);
// console.log(passenger1145);


const remSpace = function (text) {
    return text.replace(/ /g, '-').toUpperCase();
}

const upperFirst = function (text) {
    const [first, ...others] = text.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

// console.log(remSpace('t t ttt  tt tt '));
// console.log(upperFirst('tttt ttt'));


//HOF
// const convertor = function (str, func){
//     // console.log(`The converted text: ${func(str)}`)
// }
// convertor('hello', upperFirst)
//
// const greet = function (text) {
//     return function (name){
//         console.log(`${text} ${name}`)
//     }
// }

const hi = greet('hi');
console.log(hi)














//
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//
//
// document.querySelector('button').addEventListener('click', function() {
//     const text = document.querySelector('textarea').value;
//     console.log(text)
//     let words1 = text.split('\n');
//
//
//     for (let word of words1) {
//         let corrWordEnd = word.toLowerCase().slice(word.indexOf('_') + 1);
//         let corrWordUpEnd = corrWordEnd.slice(0, 1).toUpperCase() + corrWordEnd.slice(1);
//         let corrWordStart = word.toLowerCase().slice(0, word.indexOf('_'));
//         console.log(corrWordStart + corrWordUpEnd)
//         document.querySelector('textarea').value=corrWordStart + corrWordUpEnd;
//     }
// })
//
//
// let words = 'underscore_case\n' +
//     'first_name\n' +
//     'next_Variable\n' +
//     'Calculate_AGE\n' +
//     'arrived_flight\n' +
//     'FGRVRTTtrt_CDR';
//
//
//
// let words1 = words.split('\n');
// // console.log(words1)
//
// for (let word of words1) {
//     let corrWordEnd = word.toLowerCase().slice(word.indexOf('_') + 1);
//     let corrWordUpEnd = corrWordEnd.slice(0, 1).toUpperCase() + corrWordEnd.slice(1);
//     let corrWordStart = word.toLowerCase().slice(0, word.indexOf('_'));
//     // console.log(corrWordStart + corrWordUpEnd)
// }


//string
// const airLine = 'Sky';
// const plane = 'Boing 747';
// console.log(plane[0]);
// console.log(plane.lastIndexOf(4));
// console.log(plane.indexOf('ooi'));
// console.log(plane.slice(4))
// console.log(plane.slice(0, plane.lastIndexOf(' ')))
// console.log(plane.slice(plane.lastIndexOf(' '
// )+1))

// let name = 'diMA $ ';
// name = name.toLowerCase();
// // console.log(name)
// let corrName = name[0].toUpperCase() + name.slice(1);
// // console.log(corrName)
//
// // let normName = name.toLowerCase().trim();
// let normName = name.replace('$', '').trim();
// // console.log(normName);
//
// let mess ='door 18-door 18'
// // let corrMess = mess.replaceAll('door', 'gate').replace('-', ' ');
// // console.log(corrMess);
//
// // console.log(name.includes('D'));
// // console.log(name.includes('d'));
// // console.log(name.startsWith('d'));
//
// let newMess= mess.split('-');
// // console.log(newMess)
//
//
// let user = 'Dima Kovalev 36age';
// let [firstName, lastName, age] = user.split(' ');
// console.log(firstName);

// const mask = function(num){
//     const strNum = num + '';
//     const last4 = strNum.slice(-4);
//     console.log(last4.padStart(strNum.length, '*'))
//
//     // return last4
// }
// mask(5648462873293759);
// mask('56484628732937563');
// mask('56484628732937239');
//
// const hi = 'hi';
// console.log(hi.repeat(500));


// const events = new Map([
//     [19, 'Goal'],
//     [21, 'Substitution'],
//     [43, 'Goal'],
//     [56, 'Substitution'],
//     [69, 'Yellow card'],
//     [73, 'Substitution'],
//     [75, 'Yellow card'],
//     [79, 'Substitution'],
//     [81, 'Red card'],
//     [93, 'Goal'],
// ]);
//
// const ev = events.entries();
// const eventKeys = events.keys();
// console.log(eventKeys)
// // console.log(ev);
// for (let e of eventKeys) {
//     let half = e <= 45 ? "First Half" : "Second Half";
//     console.log(half +": " + events.get(e));
// }
//
//
// const average = 90 / events.size;
// // console.log(average)
//
// events.delete(75);
// // console.log(events)
//
// const gameEvents = new Set(events.values());
// // console.log(gameEvents)
//
// const game = {
//     team1: 'REAL MADRID',
//     team2: 'BARCELONA',
//     players: [
//         [
//             'Courtois',
//             'Vazquez',
//             'Militao',
//             'Nacho',
//             'Mendy',
//             'Casemiro',
//             'Valverde',
//             'Modrich',
//             'Kroos',
//             'Vinicius',
//             'Benzema',
//         ],
//         [
//             'Stegen',
//             'Mingueza',
//             'Araujo',
//             'Lenglet',
//             'Dest',
//             'Busquets',
//             'Jong',
//             'Alba',
//             'Messi',
//             'Pedri',
//             'Dembele',
//         ],
//     ],
//     score: '2:1',
//     scored: ['Kroos', 'Benzema', 'Benzema', 'Mingueza'],
//     date: 'Apr 10th, 2021',
//     odds: {
//         team1: 1.48,
//         draw: 2.53,
//         team2: 4.25,
//     },
//     rate(i) {
//         // return `Rate for this.game.team${i} victory: this.game.adds.team${i}`
//         switch (i) {
//             case 1:
//                 console.log('Rate for ' + this.team1 + ' victory: ' + this.odds.team1)
//                 break
//             case 2:
//                 console.log('Rate for ' + this.team2 + ' victory: ' + this.odds.team2)
//                 break
//             default:
//                 console.log('Rate for draw: ' + this.odds.draw)
//         }
//
//     },
//     goalScores() {
//         for (let i of this.scored) {
//             console.log(i);
//         }
//     }
// };


//Set
// const ord = new Set(['r','r','t']);
// // console.log(ord)
// // console.log(new Set('hello!!!'));
// ord.add('rr');
// ord.delete('t');
// let arr = [...ord]
// // console.log(arr);
//
// //Map
// const map = new Map();
// map.set('name', 'KFC');
// map.set(1, 'London');
// map.set(2, 'Liverpool');
// map.set('food', ['burger', 'free']);
// map.set(true, 'is open?');
//
// // console.log(map.get(1))
// // console.log(map.get(true))
// // console.log(map)
//
// const time = 22;

// // game.goalScores();
//
// for (let [name, odd] of Object.entries(game.odds)) {
//     // console.log(name, odd);
//     const mutText = name === 'draw' ? 'draw' : `${game[name]} victory`;
//     // console.log(`Rate for ${mutText}: ${odd}`)
// }
//
// const scores = {};
// for (const player of game.scored) {
//     scores[player] ? scores[player]++ : scores[player] = 1;
// }
// console.log(scores)
//
//
// for (const [entry, i] of game.scored.entries()) {
//     // console.log(entry,i);
//     // console.log(`Goal ${entry+1}: ${i}`)
// }
//
// let oddSum = 0;
// for (const odd of Object.values(game.odds)) {
//     oddSum += odd
// }
// // console.log(oddSum);
//
// // game.rate(1);
// // game.rate(2);
// // game.rate(4);
//
//
// const medianValue = Object.values(game.odds).reduce((a, b) => a + b, 0) / Object.values(game.odds).length;
// // console.log(medianValue)
//
// const [players1] = [game.players[0]];
// const [players2] = [game.players[1]];
// const [players3] = [...game.players[0]];
//
// const [goalkeeperReal, ...otherReal] = players1;
//
// // console.log(goalkeeperReal)
// // console.log(otherReal)
//
// const allPlayers = [...game.players[0], ...game.players[1]]
// // console.log(allPlayers)
//
// const players1Total = ['Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola', ...players1]
// // console.log(players1Total)
//
// const {team1, team2, draw} = game.odds;
// // console.log(team1);
//
// for (const pl of players1Total.entries()) {
//     // console.log(pl)
// }
// let counter = 0;
// for (const goal of game.scored) {
//     counter += 1;
//     // console.log(`Goal ${counter}: ${goal}`)
// }


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
