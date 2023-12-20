 'use strict';
//
// console.log(addDec(1,4))
// // console.log(addExpression(13,14))
//
// function addDec(a, b){
//     a = a+b;
//     return a;
// }
//
// const addExpression = function (a, b){
//     a = a + b;
//     return a;
// }
//
// function deleteShoppingCart(){
//     console.log('All products deleted')
// }
//
// const Jonas = {
//     name : 'Jonas',
//     birthYear : 1991,
//     calcAge(){
//         console.log(this)
//     },
//     greet: () => console.log(`This is the original name ${this.name}`)
// }
//
// console.log('Jonas Age :: ', Jonas.calcAge())
// console.table(Jonas)

//Arrow function do not get their own this keyword.

 // const calcAgeArrow = birthYear =>  {
 //    console.log(2037 - birthYear);
 // }
 //
 // calcAgeArrow(1996)
 //
 // console.log(this);
 //
 // const calcAge = function (birthYear){
 //     console.log(2037 - birthYear)
 // }

 // Jonas.calcAge();
 //
 // Jonas.greet()

 // let age = 31;
 // let oldAge = age;
 // age = 30;
 // console.log(oldAge);

 const me = {
     name : 'Ian',
     age : 30,
 }

 const friend = me;
 friend.age = 27;

 console.log('Me object ', me);
 console.log('Friend object', friend);

 let lastName = 'Williams';
 let oldLastName = lastName;
 lastName = 'Davis';
 console.log(`Last name :: ${lastName} oldLast Name :: ${oldLastName}`)

 //Copying objects

 const Jessica = {
  firstName : 'Jessica',
  lastName : 'Williams',
  age : 27,
  family : ['Ely', 'Kennedy']
 };

 const JessicaCopy = Object.assign({},Jessica)

 JessicaCopy.age = 35
 JessicaCopy.lastName = 'Davis'
 JessicaCopy.family.push('Mary')

 console.table(Jessica)
console.table(JessicaCopy)