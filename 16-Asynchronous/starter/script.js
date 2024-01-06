'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//
//     console.log(request)
//
//     request.addEventListener('load', function () {
//
//         const [data] = JSON.parse(this.responseText);
//         console.log(`All the data :: ${data}`)
//         //Ajax country 1
//         renderCountry(data)
//
//         //Ajax country 2
//
//
//     });
// }

const renderError = function (msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity = `1`;
}
const renderCountry = function(data){

    console.log(Object.entries(data.currencies))
    const currencyKey = Object.values(data.currencies);
    const currency = data.currencies;
    const language = Object.values(data.languages)
    console.log(currencyKey[0].name)
    const html = `  <article class="country">\n 
                  <img class="country__img" src="${data.flags.png}" />\n 
                  <div class="country__data">\n 
                    <h3 class="country__name">${data.name.common}</h3>\n 
                    <h4 class="country__region">${data.region}</h4>\n 
                    <p class="country__row"><span>👫</span>${data.population}</p>\n 
                    <p class="country__row"><span>🗣️</span>${language[0]}</p>\n 
                    <p class="country__row"><span>💰</span>${currencyKey[0].name}</p>\n 
                  </div>\n 
                </article> `;

    countriesContainer.insertAdjacentHTML('beforeend', html);


}
// const getCountryAndNeighbour = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//
//     console.log(request)
//
//     request.addEventListener('load', function () {
//
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data)
//         const [neighbours,...other] = data.borders;
//         console.log(neighbours)
//         const neighbouringCountries = [];
//         if(neighbours.length > 0) {
//                 const request2 = new XMLHttpRequest();
//                 request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbours}`);
//                 request2.send()
//                 request2.addEventListener('load',function(){
//
//                     const [data2] = JSON.parse(this.responseText);
//                     console.log(typeof data2)
//                     console.log(`data 2 :: ${data2[0]}`)
//                     renderCountry(data2)
//                 })
//         }
//
//
//     });
// }



// getCountryData('south africa')
// getCountryAndNeighbour('Kenya')

const request = fetch(`https://restcountries.com/v3.1/name/kenya`)
console.log(`This is the request :: ${request}`)

const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) =>{ return response.json(); })
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0];
           return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)})
        .then((respnse)=> { return respnse.json()} )
        .then(data => {
            renderCountry(data[0])
        }).catch((error) =>{
            console.error(error)
        renderError(`Something went wrong`)
    }).finally(()=>{
        countriesContainer.style.opacity = 1;
    })
    ;
}





btn.addEventListener('click',function () {
    getCountryData(`kenya`)
    btn.classList.add('display-none')
})

