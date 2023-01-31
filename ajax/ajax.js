'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        // console.log(this.responseText)
        console.log(data)

        const currencies = data.currencies;
        const currenciesName = Object.values(currencies)[0];
        console.log(currenciesName)

        const languages = data.languages;
        const languagesName = Object.values(languages)[0];
        console.log(languagesName)

        const html = `        
        <article class="country">
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
    })
}

getCountryData('belarus');
getCountryData('russia');
getCountryData('argentina');
// getCountryData('usa');

