// Function 
// function displayWelcomeMessage(){
//     const name = prompt ("please enter your name")
//     alert ("welcome," + name )
//  }
// displayWelcomeMessage()

// Quote generator
// function generateQuote() {
//     const quotes = [
//       "how are you",
//       "who are you",
//       "guess the character",
//       "here we got"
//     ];

//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
// }


// console.log(generateQuote());

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
generateRandomNumber();
var randomQuote = generateQuote();
console.log(randomQuote); 
var randomNumber = generateRandomNumber();
console.log(randomNumber);

