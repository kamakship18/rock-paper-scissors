
const rockBtn = document.getElementById('rock');
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playHand = document.querySelector("#left");
const compHand = document.querySelector("#right");
const newMessage = document.querySelector("#whowon");
const playAgainBtn = document.querySelector("#playbutton");

// initial scores
let userScore = 0;
let compScore = 0;
let turnTill = 0;

// initially hands img
playHand.style.visibility = "hidden";
compHand.style.visibility = "hidden";
playAgainBtn.style.visibility = "hidden";

// computer's choice
function computerChoice() {
    const choice = Math.floor(Math.random() * 3);
    const hands = ["rock", "paper", "scissors"];
    compHand.src = `./assets/${hands[choice]}-hand.png`;
    return hands[choice];
}

// update scores and display winner message
function updateScore(hand1, hand2) {
    if (hand1 === hand2) {
    } else if ((hand1 === 'rock' && hand2 === 'scissors') ||
               (hand1 === 'paper' && hand2 === 'rock') ||
               (hand1 === 'scissors' && hand2 === 'paper')) {
        userScore++;
    } else {
        compScore++;
    }
    playerScore.innerHTML = userScore;
    computerScore.innerHTML = compScore;

    if (userScore === 5 || compScore === 5) {
        playAgainBtn.style.visibility = "visible";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
}
// to display winner message with popup
function displayWinnerPopup() {
    if (userScore >= 5 || compScore >= 5) {
        if (userScore > compScore) {
            newMessage.innerHTML = "You won the Game";
        } else if (compScore > userScore) {
            newMessage.innerHTML = "Computer Won";
        } else {
            newMessage.innerHTML = "Draw";
        }
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
    }
}

// event listener for play again button in popup
document.getElementById('playbutton').addEventListener("click", () => {
    location.href = "main.html";
});

// event listener for close button in popup
document.getElementById('closeBtn').addEventListener("click", () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});


// event listeners for buttons
function handleButtonClick(handType) {
    playHand.style.visibility = 'inherit';
    compHand.style.visibility = 'inherit';
    playHand.src = `./assets/${handType}-hand.png`;
    const computerHand = computerChoice();
    updateScore(handType, computerHand);
    displayWinnerPopup();
    //console.log('hello');
}

rockBtn.addEventListener('click', () => handleButtonClick('rock'));
paperBtn.addEventListener('click', () => handleButtonClick('paper'));
scissorBtn.addEventListener('click', () => handleButtonClick('scissors'));

// event listener for play again button
playAgainBtn.addEventListener("click", () => {
    location.href = "main.html";
});
