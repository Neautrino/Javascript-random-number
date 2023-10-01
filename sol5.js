// Function to generate random number
const randomNumber = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

console.log("Random Number between 1 and 10: ")

// Function call
console.log(randomNumber(1, 10));
