const choice = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice() {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1);
    return choice[Math.floor(randomNumber * choice.length)];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (ROCK, PAPER, SCISSOR):");
    return humanChoice.toUpperCase();
}

// ✅ Scores live outside so they accumulate across all 5 rounds
let humanscore = 0;
let computerscore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "ROCK"    && computerChoice === "SCISSOR") ||
        (humanChoice === "PAPER"   && computerChoice === "ROCK")    ||
        (humanChoice === "SCISSOR" && computerChoice === "PAPER")
    ) {
        humanscore++;
        return "You win this round!";
    } else {
        computerscore++;
        return "Computer wins this round!";
    }
}

function playGame() {
    const humanChoice   = getHumanChoice();
    const computerChoice = getComputerChoice(); // ✅ Fresh random choice each round

    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log("Human Score: " + humanscore + " | Computer Score: " + computerscore);
}

for (let i = 0; i < 5; i++) {
    playGame();
}