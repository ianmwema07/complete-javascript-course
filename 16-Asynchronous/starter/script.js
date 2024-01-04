'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const country = 'uganda';

const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();

console.log(request)

request.addEventListener('load',function (){

    const [data] = JSON.parse(this.responseText);
    console.log(data.currencies)
    const {currency : { }} = data.currencies;
    const html = `  <article class="country">\n 
                  <img class="country__img" src="${data.flags.png}" />\n 
                  <div class="country__data">\n 
                    <h3 class="country__name">${data.name.common}</h3>\n 
                    <h4 class="country__region">${data.region}</h4>\n 
                    <p class="country__row"><span>👫</span>${data.population}</p>\n 
                    <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>\n 
                    <p class="country__row"><span>💰</span>${currency.name}</p>\n 
                  </div>\n 
                </article> `;


    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;

});