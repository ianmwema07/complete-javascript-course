'use strict';
/*
console.log(document.querySelector('.number'))
document.querySelector('.number').textContent = "1234";
console.log(document.querySelector('.number').textContent);
document.querySelector('.guess').value = 123;
*/

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(20)
document.querySelector('.score').value = score;

const getValue =  function () {
    console.log(document.querySelector('.guess').value)
    const guess = Number(document.querySelector('.guess').value)
    console.log('Guess is of type off :: ', typeof guess)
    if (!guess){
        //When there is no input
        document.querySelector('.message').textContent = "No guess"
    } else if(guess === randomNumber){
        //if the guessed number is equal to the random number
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.message').textContent = "Correct guess"
        highScore(score);
    } else if((guess > randomNumber)  ) {
        //when guess is too high and guess is too low
        if(score > 0) {
            document.querySelector('.message').textContent = "The guess is too high"
            console.log('Score value :: ', score)
            score--;
            document.querySelector('.score').textContent = score;
        }
          else {
            document.querySelector('.message').textContent = 'You lost the game'
        }
    }
    else if(guess < randomNumber){
        if(score > 0) {
            document.querySelector('.message').textContent = "The guess is low"
            console.log('Score value :: ', score)
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game'
        }
    } else {
            document.querySelector('.message').textContent = 'You lost the game'
        }

}
document.querySelector('.highscore').textContent = localStorage.getItem('highScore');
document.querySelector('.check').addEventListener('click',getValue)

document.querySelector('.again').addEventListener('click',pageReload);

function pageReload(){
    location.reload()
}

function highScore(score){
    let currentHighSocre = parseInt(localStorage.getItem('highScore'));
    if(!currentHighSocre){
        localStorage.setItem('highScore',score)
        console.log("No current highscore in existence")
    } else  {
        console.log("High score exists")
        if(parseInt(score) > currentHighSocre){
            console.log('Current score is greater than the highscore')
            localStorage.setItem('highScore',score);
            document.querySelector('.highscore').textContent = localStorage.getItem('highScore');
        } else {

        }
    }

}
