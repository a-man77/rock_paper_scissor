const choice = ["ROCK", "PAPER", "SCISSOR"];
const randomBufer = new  Uint32Array(1);
window.crypto.getRandomValues(randomBufer);
const randomNumber = randomBufer[0] / (0xFFFFFFFF + 1);
const computerChoice = choice[Math.floor(randomNumber * choice.length)];
console.log("Computer choice: " + computerChoice);