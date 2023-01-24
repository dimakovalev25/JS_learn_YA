'use strict';

const account1 = {
    userName: 'q',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.15,
    pin: 1,
};

const account2 = {
    userName: 'Dima Kovalev',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
};

const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
};

const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
};

const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

const total = accounts.map(a => a.transactions).flat().sort((a, x) => x - a).filter(a => a > 0).reduce((a, b) => a + b);

const totalMap = accounts.flatMap(a => a.transactions).reduce((acc, a) => a > 0 ? acc + a : acc);

const totalRed = accounts
    .flatMap(a => a.transactions)
    .reduce((acc, a) => {
        // a > 0 ? acc.dep += 1  : acc.withdraw += 1

        acc[a > 0 ? 'dep' : 'withdraw'] += a;

        return acc
    }, {dep: 0, withdraw: 0});

console.log(totalRed)

const text ='work with javascript and react';

const textToTitleCase = function (text) {
    const exeptions = ['with', 'and', 'to', 'a', ' an'];
    const titleCase = text
        .toLowerCase()
        .split(' ')
        .map(word => exeptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
        .join(' ');
    return titleCase

}
console.log(textToTitleCase(text))
