function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log("Random Number between 50 and 200:")
  console.log(getRandomNumber(50, 200));