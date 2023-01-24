'use strict';
// Elements
const logo = document.querySelector('.logo');

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Simply Bank App

const account1 = {
    userName: 'C',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account2 = {
    userName: 'Dima Kovalev',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'UAH',
    locale: 'uk-UA',
};

const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'RUB',
    locale: 'ru-RU',
};

const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'EUR',
    locale: 'fr-CA',
};

const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

const now = new Date();
const day = `${now.getDay()}`.padStart(2, '0');
const month = `${now.getMonth()+1}`.padStart(2,'0');
const year = now.getFullYear();
const transDate =`${day}/${month}/${year}`;
labelDate.textContent = transDate;


containerTransactions.innerHTML = '';
let mainAccount;
inputLoginUsername.value = 'Dima Kovalev';
inputLoginPin.value = '2222';

const startLogoutTimer = function () {
    let time = 300;

    const logOutTimer = setInterval(function () {

    const min = String(Math.trunc(time /60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent=`${min} min : ${sec} sec`;
    if (time === 0){
        clearInterval(logOutTimer);
        containerApp.style.opacity = 0;
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        labelWelcome.textContent = `Log into your account!`
    }
    time--;

    }, 1000)
}


const displayTransactions = function (account) {
    account.transactions.forEach(function (trans, index) {

        const transType = trans > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(account.transactionsDates[index]);
        const day = `${date.getDay()}`.padStart(2, '0');
        const month = `${date.getMonth()+1}`.padStart(2,'0');
        const year = date.getFullYear();
        const transDate =`${day}/${month}/${year}`;

        const transactionRow = `
            <div class="transactions__row">
                <div class="transactions__type transactions__type--${transType}">
            ${index + 1} ${transType}
            </div>
            <div class="transactions__date">${transDate}</div>
                <div class="transactions__value">${trans.toFixed(2)}</div>
            </div>`

        containerTransactions.insertAdjacentHTML('afterbegin', transactionRow)

        startLogoutTimer();

    });
}

const displayBalance = function (mainAccount) {
    labelBalance.innerHTML = '';
    const balance = mainAccount.transactions.reduce((acc, b) => acc + b, 0);
    mainAccount.balance = balance;
    labelBalance.innerHTML = `${balance.toFixed(2)} $`
    // console.log(mainAccount)

    labelSumIn.innerHTML = '';
    const balanceIn = mainAccount.transactions.filter(trans => trans > 0).reduce((acc, a) => acc + a, 0);
    labelSumIn.innerHTML = balanceIn.toFixed(2) + '$';

    labelSumInterest.innerHTML = '$';
    const interest = Math.floor(mainAccount.transactions.filter(trans => trans > 0).map(dep => dep * 1.15 / 100).reduce((acc, a) => acc + a, 0));
    labelSumInterest.innerHTML = interest.toFixed(2) + '$';

    labelSumOut.innerHTML = '';
    const balanceOut = mainAccount.transactions.filter(trans => trans < 0).reduce((acc, a) => acc + a, 0);
    labelSumOut.innerHTML = balanceOut.toFixed(2) + '$';
}

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    const userPin = inputLoginPin.value;
    mainAccount = accounts.find(account => account.userName === inputLoginUsername.value)

    if (mainAccount && mainAccount?.pin === Number(inputLoginPin.value)) {
        // console.log('pin ok!')

        inputLoginUsername.value = 'Dima Kovalev';
        inputLoginPin.value = '2222';

        containerApp.style.opacity = 100;

        labelWelcome.textContent = `Welcome, ${mainAccount.userName.split(' ')[0]}!`

        displayTransactions(mainAccount);
        displayBalance(mainAccount)


    } else {
        console.log('pin not ok!');
    }


});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const transferAmount = Number(inputTransferAmount.value);
    const recepientName = inputTransferTo.value;
    const recepientAccount = accounts.find(account => account.userName === recepientName)
    // console.log(transferAmount, recepientAccount);

    if (transferAmount > 0 && mainAccount.balance >= transferAmount && recepientAccount && mainAccount.userName !== recepientAccount?.userName) {


        mainAccount.transactions.push(-transferAmount);
        recepientAccount.transactions.push(transferAmount);
        mainAccount.transactionsDates.push(new Date().toISOString());
        recepientAccount.transactionsDates.push(new Date().toISOString());

        displayTransactions(mainAccount);
        displayBalance(mainAccount);


    }
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    const user = inputCloseUsername.value;
    const pin = inputClosePin.value;

    if (inputCloseUsername.value === mainAccount.userName && Number(inputClosePin.value) === mainAccount.pin) {
        const mainAccountIndex = accounts.findIndex(account => account.userName === inputCloseUsername.value)
        accounts.splice(mainAccountIndex, 1);
        containerApp.style.opacity = 0;
        inputClosePin.value = '';
        inputCloseUsername.value = '';
        labelWelcome.textContent = `Log into your account!`
        // console.log(accounts);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const loanAmount = Number(inputLoanAmount.value)

    console.log(inputLoanAmount.value);
    if (loanAmount > 0 && mainAccount.transactions.some(tr => tr >= loanAmount / 10)) {
        mainAccount.transactions.push(loanAmount);
        mainAccount.transactionsDates.push(new Date().toISOString());
        mainAccount.loan = loanAmount;
        displayTransactions(mainAccount);
        displayBalance(mainAccount);
        inputLoanAmount.value = '';
    }
});

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    containerTransactions.innerHTML = ''
    mainAccount.transactions.sort((a, b) => a - b);
    displayTransactions(mainAccount);

})

logo.addEventListener('click', function (e) {

    [...document.querySelectorAll('.transactions__row')].forEach((row, i) => {
        if(i % 2 === 0){
            row.style.backgroundColor = '#f3f3f3';
        }
        // console.log(row, i)
    })

})