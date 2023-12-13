const newUserArray = ['Jonas', 'Kariuki'];
console.log(newUserArray)

const Jonas = {
    firstName : "Ian",
    lastName : "Kariuki",
    job : "Teacher",
    friends : newUserArray,

    calcAge : function (birthYear) {
                return  2037 - birthYear;
            }
}

Jonas.calcAge(1991);

console.log(`Jonas details ${Jonas.friends}`)
console.log(Jonas)

const interestedIn = prompt("What would you like to know about Jonas ?")
console.log(Jonas[interestedIn]);

if (Jonas[interestedIn]){
    console.log(Jonas[interestedIn])
}else {
    console.log("Wrong value")
}
