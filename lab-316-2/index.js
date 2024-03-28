// Create your game here!
// const app = document.querySelector("#app");
// const guess = document.createElement("p");
let userGuess;
let guessRemaining = 10;
const number = Math.floor(Math.random() * 100 + 1);

// if(location.reload){
while (guessRemaining >= 0) {
    if(guessRemaining === 0){
        alert(`the correct number was ${number}`);
        break;
    }
    if(guessRemaining === 10){
        userGuess = window.prompt("Guess a number between 1 and 100!");
        // break;
    }else{
        userGuess = window.prompt(`Guess a number between 1 and 100! :\n You have ${guessRemaining} guesses left`);
    }
    const userNumber = Number(userGuess);
    if (userGuess === null){
        break;
    } else if(userGuess === ''){
        alert("You need to enter a number");
        continue;
    }
    else if(userNumber === number){
        window.alert("Correct!");
        break;
    }
    else if(userNumber > number){
        window.alert("Too High!");
    }else if(userNumber < number){
        window.alert("Too Low!");
    }
    // else if(guessRemaining === 0){
    //     window.alert(`OUT OF GUESSES. THE  NUMBER WAS ${number}`);
    // }
    guessRemaining -= 1;
    // guess.textContent = `you have ${guessRemaining} guess remaining`;
    // app.appendChild(guess)
}


// }

// while (guessRemaining > 0) {
//   userGuess = parseInt(window.prompt("Guess a number between 0 and 10!"))
//     if (userGuess == correctNum) {
//         alert("You guessed correctly!");
//         break;
//     } else if (userGuess < correctNum) {
//         alert(`The guss is too low`);
//         userGuess = parseInt(window.prompt("Guess a number between 0 and 10!"))
//         guessRemaining--;
//         guess.textContent = `Guesses remaining: ${guessRemaining}`;
//         app.appendChild(guess);
//     } else if (userGuess > correctNum) {
//         alert("The guess is Too high!");
//         userGuess = parseInt(window.prompt("Guess a number between 0 and 10!"))
//         guessRemaining--;
//         guess.textContent = `Guesses remaining: ${guessRemaining}`;
//         app.appendChild(guess);
//     }
    
// }

// let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let correctNum = Math.floor(Math.random() * numArr.length);

// var userGuess = parseInt(window.prompt("Guess a number between 0 and 10!"))

// function checkNum(num) {
//   if (userGuess == correctNum) {
//     alert("You guessed correctly!");
//   } else {
//     if (userGuess < correctNum) {
//       alert("Too low!");
//     } else if (userGuess > correctNum) {
//       alert("Too high!");
//     }
//   }
// }

// checkNum(userGuess);
