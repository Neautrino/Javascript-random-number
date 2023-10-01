// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random integer between 1 and 100
var randomNumber = getRandomInt(1, 100);

console.log("Random Number: " + randomNumber);
