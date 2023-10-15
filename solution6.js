
const randomNumberGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Random Number between input minimum and maximum: ");

console.log(randomNumberGenerator(54, 98));
