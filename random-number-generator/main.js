/**
 *
 * @param {number} max
 * @returns random number between 0 and max variable
 */

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Some Tests:
console.log(generateRandomNumber(10));
console.log(generateRandomNumber(100));
console.log(generateRandomNumber(1000));
