// Generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min=0, max=1000000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  const randomInteger = getRandomInt(1, 6); // Generates a random integer between 1 and 6
  console.log(randomInteger);
  