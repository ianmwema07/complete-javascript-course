'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a','b','c','d','e','f','g','h'];
let arr2 = ['i','j','k','l','m','n','o','p'];
//Slice Method
let arraySlice = arr.slice(-1,-5);
console.log(arraySlice);
console.log(`This is the splice method :: ${arr.splice(2,3).reverse()}`)

const letters = arr.concat(arr2);
console.log(`These are the letters :: ${letters}`)
console.log([...arr,...arr2])

const arr3 = [23,11,64];
console.log(arr3[0])
console.log(arr3.at(0))

for (let movement of movements){
  if (movement > 0){
    console.log(`You moved ${movement}`)
  }
}

let i = 0;
movements.forEach(function (movement){

  if (movement > 0)
     console.log(`You moved ${i += 1} :: ${movement}`)
  else
    console.log(`Withdraw ${Math.abs(movement)}`)
})


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value,key , map){
  console.log(`${key} : ${value}`)
})

const currenciesUnique = new Set([`USD`,`GBP`,`EURO`,`EURO`,`KSH`])
currenciesUnique.forEach(function (value){
  console.log(`${value}`)
})

const displayMovements = function(movements){
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}  ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin',html)
  })
}

displayMovements(account1.movements)
console.log(`${containerMovements.innerHTML}`)

const calcPrintBalance  = function(movements){
  const balance = movements.reduce((acc, mov) => {
    return acc + mov
  },0);
  labelBalance.textContent = `${balance} EURO`
}

calcPrintBalance(account1.movements)


const euroToUsd = 1.1;

const movementsUsd  = movements.map(function (mov) {
  return mov * euroToUsd;
})

console.log(`Movements : ${movements}`);
console.log(`Movements usd : ${movementsUsd}`)



// const user = `Steven Thomas Williams`;

// const createUserNames = function(accs) {
//   accs.forEach(function (acc) {
//     acc.username = user.owner
//         .toLowerCase()
//         .split(' ')
//         .map(function (name) {
//           return name[0];
//         }).join('');
//   })
// };
//
// console.log(createUserNames(accounts))


//Using the Filter Method.
const deposits = movements.filter(function (mov){
  return mov > 0;
})
console.log(deposits)


//Accumulator is like a snowball.
const balance = movements.reduce(function (acc,current, i,arr) {
return acc + current
},0)

console.log(balance)


/////////////////////////////////////////////////
