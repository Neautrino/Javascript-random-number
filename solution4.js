function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log("Random Number between 1 and 50: ")
console.log( randomNumber(1, 50) );
