'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery:function(
      {starterIndex = 1,
        mainIndex = 0,
        time = '22:00',
        address }) {
    console.log(`order received :: ${starterIndex} \n mainIndex is :: ${mainIndex} \n time is :: ${time} \n address is ${address}`)
  },

  orderPasta : function([ing1, ing2, ing3]){
    console.log(`Here is your delicious pasta with ${ing1} , ${ing2}  ${ing3}`)
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time : '12:30',
  address : 'Via del sole, 21',
  mainIndex : 2,
  starterIndex : 2
})

restaurant.orderDelivery({
  time : '12:00',
  address : 'Uthiru '
})

const arr = [7,8,9];
const newArray = [1,2,...arr];
console.log(`This is the new array ${newArray}`)

const newMenu = [...restaurant.mainMenu,'Ugali']
console.log(newMenu)
const[x,y,z ] = arr;
console.log(x, y, z)
let [main,,secondary] = restaurant.categories;

console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

const [starter,mainOrder] = restaurant.order(2,0)
console.log(starter, mainOrder)

//Default values

const {name : restaurantName, openingHours: hours, categories : tags} = restaurant;
console.log(`The name is :: ${restaurantName} the opeing hours are ${hours} categories are ${tags}`)

//Mutating variables

//Nested Objects
const {fri : { open : openingHour ,close :  closingHour }} = hours;
console.log(`This is the ${openingHour} and this is the closing hour ${closingHour}`)

//String
const str = 'Mwema';
const letters = [...str]
console.log(letters)

//Ingredients

const ingredients = [
    prompt(`Let\'s make pasta ing 1 !`),
  prompt(`Let\'s make pasta ing 2!`),
  prompt(`Let\'s make pasta ing 3!`)
]

console.log(ingredients)
restaurant.orderPasta([...ingredients]);

//Spread operator on objects.


