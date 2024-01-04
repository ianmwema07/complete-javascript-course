'use strict';

const bookings = []
const createBooking = function(flightNum,numPassangers = 1,price = 199){

    price = price * numPassangers;
    const booking = {
        flightNum,
        numPassangers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH3234');
createBooking('LH3233',25,234);

const flight = 'LH234';
const Jonas = {
    name : 'Ian Kariuki',
    passport : 234567889
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr ' + passenger.name;
    if (passenger.passport === 234567889) {
        console.log(`Checked in`)
    } else {
        console.log(`Not yet checked in`)
    }
}

checkIn(flight,Jonas)

console.log(flight)

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000)
}

newPassport(Jonas)
checkIn(flight,Jonas)

const oneWord = function(str){
    return str.replaceAll(' ','').toLowerCase();
}

const upperFirstWord = function(str){
    const [first,...others] =  str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

const transformToUpperCase = function(str){
    return str.toUpperCase();
}


//Higher Order Function
const transformer = function(str, fn){
    console.log(`String before transformation ${str}`)
    console.log(`Transformed string is ${fn(str)}`)
    console.log(`Transformed by : ${fn.name}`)
}

// let inputString = 'Java is the best';
// transformer(inputString, oneWord)
// transformer(inputString, upperFirstWord)
// transformer(inputString, transformToUpperCase)
//
// const greet = function(greeting){
//     return (name) => {
//         console.log(`${greeting} ${name}`)
//     }
// }
//
// const greeterHey = greet('Hey');
// const greeterHello = greet('Hello');
//
// greeterHey('Ian');
// greeterHello('Kevin')
//
// const lufthansa = {
//     airlineName : 'Lufthansa',
//     iataCode : 'LH',
//     bookings : [],
//     book : function (flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`)
//     }
// }
//
// lufthansa.book(123345,'Ian Kariuki')
// lufthansa.book(2345,'John Smith')
//
// const euroWings = {
//     airlineName : 'EuroWings',
//     iataCode : 'EW',
//     bookings : []
// }
//
// const swiss = {
//     airlineName : 'Swiss air Lines',
//     iataCode : 'LX',
//     bookings : []
// }
//
// const book = lufthansa.book;
//
// // book(23,'Williams')
//
// book.call(euroWings,23,'Sarah Williams');
//
// book.call(lufthansa,34,'Mary Cooper');
//
// book.call(swiss,54,'Mary Cooper');
//
// const flightData = [583, 'George Cooper'];
//
// book.apply(swiss,flightData);
// console.log(swiss);
//
// //Bind Method
//
// const bookEw = book.bind(euroWings);
//
// bookEw(23,'Steven Williams');
//
// const bookEw23 = book.bind(euroWings,23)
// bookEw23('John Schmetman');
// bookEw23('Martha Cooper');
//
// //With event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this)
//     this.planes++
//     console.log(`${this.planes}`)
// }
//
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
//
// //Partial Application
// const addTax = (rate, value) =>  value + value * rate;
// console.log(0.1,200);
//
// const addVAT = addTax.bind(null,0.16);
// // addVAT
// console.log(addVAT(100));
// console.log(addVAT(23));
//
// const addTaxRate = function(rate){
//     return function(value) {
//         return value + value * rate;
//     }
// }
//
// const addVat1 = addTaxRate(0.23);
//
// const firstVat = addVat1(100)
//
// const pollButton = document.querySelector('.poll');
//
// const pollObject = {
//     question : 'What is your favourite Language?',
//     optionsArray : ['JavaScript','Python','Rust','C++'],
//     registerAnswer : function(){
//         console.log(this)
//         this.optionsArray.unshift(this.question)
//         const messageString = function (optionsArray){
//             let promptMessage = ''
//             let count = 0;
//             for (let item of optionsArray){
//                promptMessage += count++ + " " + item + "\n";
//                }
//             return promptMessage;
//         }
//
//         console.log(`prompt message :: ${messageString(this.optionsArray).replace('0','')}`)
//         const selectedValue = prompt(messageString(this.optionsArray).replace('0',''))
//         console.log(`Selected Value :: ${selectedValue}`)
//     }
// }
//
// pollButton.addEventListener('click',pollObject.registerAnswer.bind(pollObject))
//
// const secureBooking = function(){
//     let passengerCount = 0;
//     return function(){
//         passengerCount++;
//         console.log(`Within the the inner function :: ${passengerCount}`)
//     }
// }
//
// const booker = secureBooking()
// booker();
// booker();
// booker();

//Let f

let f ;

const g = function (){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2)
    }
}

g();
f();
h();
f();



