'use strict';
/*
// innerText gives us the values of the element
console.log(document.querySelector('.message').innerText);

// textContent is used to changed the value of the HTML element
document.querySelector('.message').textContent = 'Will it work?';
// document.querySelector('h1').textContent = 'This is my Number!';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 13;

// value attribute helps us to change the value of the element
document.querySelector('.guess').value = '21';
console.log(document.querySelector('.guess').value);
*/
// addEventListener

// Manipulation of HTML elements using JavaScript(DOM)

// let randomNumber = Math.floor(Math.random() * 20 + 1);

// let score = 20;

// let highscore = 0;
// document.querySelector('.check').addEventListener('click', () => {
//   const guessedValue = Number(document.querySelector('.guess').value);
//   // this statement checks if the value entered is 0
//   if (!guessedValue) {
//     document.querySelector('.message').textContent =
//       'THIS NUMBER IS FORBIDDEN 🚫🚫';
//   } else if (guessedValue === randomNumber) {
//     // here the statement is checked if it matches
//     document.querySelector('.number').textContent = randomNumber;
//     document.querySelector('.message').textContent = 'THE NUMBER IS CORRECT🙌';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.highscore').textContent = score;
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guessedValue > randomNumber) {
//     if (score >= 0) {
//       document.querySelector('.message').textContent =
//         'THE NUMBER IS TOO HIGH!';
//       document.querySelector('.score').textContent = score;
//       score--;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER!';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#FF3232';
//     }
//     //here the statement returns if the number is greater
//   } else if (guessedValue < randomNumber) {
//     if (score >= 0) {
//       document.querySelector('.message').textContent = 'THE NUMBER IS TOO LOW!';
//       document.querySelector('.score').textContent = score++;
//       score--;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER!';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#FF3232';
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   randomNumber = Math.floor(Math.random() * 20 + 1);
//   document.querySelector('.message').textContent = 'START GUESSING!';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// Implementing the DRY Principle, optimization of our code

let randomNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;

let highscore = 0;

// a function to display the messages

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guessedValue = Number(document.querySelector('.guess').value);
  // this statement checks if the value entered is 0
  if (!guessedValue) {
    displayMessage('THIS NUMBER IS FORBIDDEN 🚫🚫');
  } else if (guessedValue === randomNumber) {
    // here the statement is checked if it matches
    document.querySelector('.number').textContent = randomNumber;
    displayMessage('THE NUMBER IS CORRECT🙌');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessedValue !== randomNumber) {
    if (score >= 0) {
      // using a ternary operator instead of multiple if conditions
      displayMessage(
        guessedValue > randomNumber
          ? 'THE NUMBER IS TOO HIGH!'
          : 'THE NUMBER IS TOO LOW!'
      );
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      displayMessage('GAME OVER!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF3232';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage('START GUESSING!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
