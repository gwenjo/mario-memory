//Code taken from https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

//html element
const cards = document.querySelectorAll(".memory-card");

//Memory card
let hasFlippedCard = false;
let gameBoard = false;
let firstCard, secondCard;
    
function flipCard() {
    if (gameBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this; //The first card clicked
        return;
    }

    hasFlippedCard = false;
    secondCard = this; //The second card clicked

    //Calls function to see if the cards match
    checkIfMatch(); 
}

function checkIfMatch() {
    if (firstCard.dataset.frame === secondCard.dataset.frame) {
    match();
    return;
    }

    unflipCards();
}

//Matching cards
function match() {
    firstCard.removeEventListener("click", flipCard);
    firstCard.classList.add('bg_yes');

    secondCard.removeEventListener("click", flipCard);
    secondCard.classList.add('bg_yes');

  reset();
}

function unflipCards() {
    //Prevents other clicks 
    gameBoard = true; 
    firstCard.classList.add('bg_no');
    secondCard.classList.add('bg_no');

    //Used to keep the cards visiable for short time
    setTimeout(() => {
        firstCard.classList.remove("flip");
        firstCard.classList.remove('bg_no');

        secondCard.classList.remove("flip");
        secondCard.classList.remove('bg_no');

      reset();
    }, 
    1300);
}

//Shuffle the cards
(function shuffle() {
    cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 14);
    card.style.order = randomPosition;
  });
})();

//Reset the game/ Play again
function reset() {
    
    setTimeout(() => {
        [hasFlippedCard, gameBoard] = [false, false];
        [firstCard, secondCard] = [null, null];

        cards.forEach(cardBg => cardBg.classList.remove('bg_yes'));
        cards.forEach(cardBg => cardBg.classList.remove('bg_no'));

        cards.forEach(cards => cards.addEventListener('click', flipCard));
        }, 700); 
    }

cards.forEach((card) => card.addEventListener("click", flipCard));

//Reload the Game
function reloadGame() {
    window.location.reload();
}

let resetGame = function myFunction() {
    reloadGame();
};

//html element
const instruc = document.getElementById('instruction-msg');

//Close Instruction window
function closeWindow() {
    instruc.style.display = 'none';
    gameBoard = false;
}    