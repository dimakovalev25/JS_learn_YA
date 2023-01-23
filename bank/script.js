'use strict';

// Simply Bank App

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

// Elements
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

containerTransactions.innerHTML = '';

const displayTransactions = function (transactions) {
    transactions.forEach(function (trans, index) {

        const transType = trans > 0 ? 'deposit' : 'withdrawal';

        const transactionRow = `
            <div class="transactions__row">
                <div class="transactions__type transactions__type--${transType}">
            ${index + 1} ${transType}
            </div>
                <div class="transactions__value">${trans}</div>
            </div>`

        containerTransactions.insertAdjacentHTML('afterbegin', transactionRow)

    });
}

const displayBalance = function (mainAccount) {
    labelBalance.innerHTML = '';
    const balance = mainAccount.transactions.reduce((acc, b) => acc + b, 0);
    mainAccount.balance = balance;
    labelBalance.innerHTML = `${balance} $`
    // console.log(mainAccount)

    labelSumIn.innerHTML = '';
    const balanceIn = mainAccount.transactions.filter(trans => trans > 0).reduce((acc, a) => acc + a, 0);
    labelSumIn.innerHTML = balanceIn + '$';

    labelSumInterest.innerHTML = '$';
    const interest = Math.floor(mainAccount.transactions.filter(trans => trans > 0).map(dep => dep * 1.15 / 100).reduce((acc, a) => acc + a, 0));
    labelSumInterest.innerHTML = interest + '$';

    labelSumOut.innerHTML = '';
    const balanceOut = mainAccount.transactions.filter(trans => trans < 0).reduce((acc, a) => acc + a, 0);
    labelSumOut.innerHTML = balanceOut + '$';
}

let mainAccount;

inputLoginUsername.value = 'Dima Kovalev';
inputLoginPin.value = '2222';

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

        displayTransactions(mainAccount.transactions);
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
        // console.log('tr')
        mainAccount.transactions.push(-transferAmount);
        recepientAccount.transactions.push(transferAmount);

      displayTransactions(mainAccount.transactions);
      displayBalance(mainAccount);


    }
})

btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    const user = inputCloseUsername.value;
    const pin = inputClosePin.value;

    if(inputCloseUsername.value === mainAccount.userName && Number(inputClosePin.value) === mainAccount.pin) {
        const mainAccountIndex = accounts.findIndex(account => account.userName === inputCloseUsername.value)
        accounts.splice(mainAccountIndex, 1);
        containerApp.style.opacity = 0;
        inputClosePin.value='';
        inputCloseUsername.value='';
        labelWelcome.textContent = `Log into your account!`
        console.log(accounts);
    }
})