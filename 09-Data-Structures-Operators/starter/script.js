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
  
  orderPizza : function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
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

// const ingredients = [
//     prompt(`Let\'s make pasta ing 1 !`),
//   prompt(`Let\'s make pasta ing 2!`),
//   prompt(`Let\'s make pasta ing 3!`)
// ]

// console.log(ingredients)
// restaurant.orderPasta([...ingredients]);

const[a,b,...others] = [1,2,3,4,5];
console.log(a,b, others);

const[Pizza, ,risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(Pizza,risotto, ...otherFoods)
//Spread operator on objects.

//Rest Parameters
const add = function (...numbers) {
  console.log('These are the numbers passed',...numbers)
  let sum = 0;
  for(let i = 0; i <numbers.length; i++){
    sum += parseInt(numbers[i]);
  }

  console.log("This is the value of sum ", sum);

}
add(1,2,3,4,5,6)
add(1,2,3)
add(12,34,45,12)

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || undefined);
console.log(undefined || null);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect)

const rest1 = {
  name: 'Capri',
  numGuests: 20
}


  const rest2 = {
    name : 'Capri',
    restOwner : 'Giavanni Rossi'
  }

  // rest2.numGuests = rest1.numGuests || 10;
//
// console.table(rest1)
// console.table(rest2)
//
// rest2.numGuests ||= 10;
// console.table(rest2)
//
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(`This is the main menu ${menu}`)
//
// for (const item of menu) console.log(item, "\n")

if(restaurant.openingHours.fri.open) console.log(restaurant.openingHours.fri.open)

//With optional Chaining
console.log(restaurant.openingHours?.fri?.open)

const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ??  'closed';
  console.log(`On ${day} we are ${open} \n`)
}

//Optional chaining on methods.

console.log(restaurant.order?.(0,1) ?? 'Methods does not exist')
console.log(restaurant.orderRissotto?.(0,1) ?? 'Methods does not exist')

const users = [{name : 'Ian', email : 'ian.mwema@yahoo.com'}, {name : 'Jake', email : 'jake.kariuki@yahoo.com'}]

for(const day of Object.keys(openingHour)){
  console.log(day)
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console,
//     along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//   Gnarby: 1,
//       Hummels: 1,
//     Lewandowski: 2
// }

const goalsScored = game.scored;
let firstGoal = 0;
for (let goal of goalsScored){
  console.log(`Goal  ${firstGoal += 1} : ${goal}`)
}

//Odds
const matchOdds = game.odds;
console.log(`Odd of victory Bayern Munich ${matchOdds.team1}`)
console.log(`Odd of Draw ${matchOdds.x}`)
console.log(`Odd of victory Borrussia Dortmund ${matchOdds.team2}`)
const properties = Object.entries(restaurant.openingHours);
 console.log(`These are the ${properties}`)

for(let item of properties){
  console.log(item)
}

//Sets in Javascript

const orderArray = [
    "Pasta",
    "Pizza",
    "Pizza",
    "Rissotto",
    "Pasta",
    "Pizza"
];

const orderSet = new Set(orderArray);
console.log(orderSet)
console.log(orderSet.size);
console.log(orderSet.has("Pizza"))
console.log(orderSet.has("Bread"))
console.log(orderSet.add("Garlic Bread"))
console.log(orderSet.delete("Rissotto"));

for (let order of orderSet){
  console.log(order ,"\n");
}

const restaurantMap = new Map();

restaurantMap.set('name','Classico Italiano')
restaurantMap.set(1,'Florenz Italy');
restaurantMap.set(2, 'Lisbon, Portugal');

restaurantMap.set('categories',[ "Pasta",
  "Pizza",
  "Pizza",
  "Rissotto",
  "Pasta",
  "Pizza"]).set('open',11).set('close',23);

console.log(restaurantMap);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

let events = [...new Set(gameEvents.values())]
console.log(events);
gameEvents.delete(64);
console.log(events);

//