'use strict';


//XMLHttpRequest
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const inp = document.querySelector('.inp-country');
const btnInp = document.querySelector('.btn-country');


const dispayCountry = function (data, className = '') {

    const currencies = data.currencies;
    const currenciesName = Object.values(currencies)[0];
    const languages = data.languages;
    const languagesName = Object.values(languages)[0];

    const html = `        
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(+data.population / 1000000).toFixed(1)} миллионов</p>
            <p class="country__row"><span>🗣️</span>${languagesName}</p>
            <p class="country__row"><span>💰</span>${currenciesName.symbol} ${currenciesName.name}</p>
          </div>
        </article>`

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
const getCountryData = function (country) {

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)


        // dispayCountry(data);

        const [firstNeighbor] = data.borders;
        // console.log(firstNeighbor);
        if (!firstNeighbor) return;

        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${firstNeighbor}`)
        request2.send();
        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);

            // console.log(data2);
            // dispayCountry(data2, 'neighbour');


        })
    })
}

// getCountryData('belarus');
// getCountryData('russia');
// getCountryData('argentina');
getCountryData('usa');

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//fetch api

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
// request.send();
// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText)}

// const req = fetch('https://restcountries.com/v3.1/name/belarus');
// console.log(req)
//
// const req2 = fetch('ff');
// console.log(req2)

// const getCountryInfo = function (countryName) {
//     const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//         .then(function (response) {
//             // console.log(response)
//             return response.json()
//         })
//         .then(function ([data]) {
//             console.log(data)
//         })
//
// }


const getCountryInfo = function (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => {

            // if (!res.ok) {
            //     throw new Error(`Country not found`)
            // }
                return res.json()
        })


        .then(data => {
            dispayCountry(data[0]);
            const neighbour = data[0].borders[0];
            // console.log(neighbour)

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        })
        .then(res => res.json())
        .then(data => dispayCountry(data[0], 'neighbour'))
        //ловим ошибку
        .catch(e => alert(e))
        //финальное действие
        .finally(() => {
            // console.log('ok')
            countriesContainer.style.opacity = 1;
        })

}


// let mainCountry = '';

inp.addEventListener('change', (event) => {
    let mainCountry = event.target.value;
    // console.log(mainCountry)
    // return mainCountry;

    btnInp.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(mainCountry);
        countriesContainer.insertAdjacentHTML('beforeend', ' ');
        getCountryInfo(mainCountry);
        inp.value = '';

    })
})



//Event loop
console.log('start');
setTimeout(() => console.log('timeout 0'), 0);
Promise.resolve('promise 1' )
    .then(res => console.log(res));
console.log('end');
// start
// end
// promise 1
// timeout 0