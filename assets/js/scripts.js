//Code taken from https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
    
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this; //first card
        return;
    }

    hasFlippedCard = false;
    secondCard = this; //second card

    //calls function to see if the cards match
    checkIfMatch(); 
}

function checkIfMatch() {
    if (firstCard.dataset.frame === secondCard.dataset.frame) {
    match();
    return;
    }

    unflipCards();
}

function match() {
    firstCard.removeEventListener("click", flipCard);
    firstCard.classList.add('bg_yes');

    secondCard.removeEventListener("click", flipCard);
    secondCard.classList.add('bg_yes');

  reset();
}

function unflipCards() {
    //prevents other clicks 
    lockBoard = true; 
    firstCard.classList.add('bg_no');
    secondCard.classList.add('bg_no');

    //used to keep the cards visiable for short time
    setTimeout(() => {
        firstCard.classList.remove("flip");
        firstCard.classList.remove('bg_no');

        secondCard.classList.remove("flip");
        secondCard.classList.remove('bg_no');

      reset();
    }, 
    1300);
}

//shuffle cards
(function shuffle() {
    cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 14);
    card.style.order = randomPosition;
  });
})();


//Reset the game/ Play again
function reset() {
    setTimeout(() => {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];

        card.forEach(cardReset => cardReset.classList.remove('flip'));
        card.forEach(cardBg => cardBg.classList.remove('bg_yes'));
        
        card.forEach(cardBg => cardBg.classList.remove('bg_no'));
        shuffle();
        card.forEach(cards => cards.addEventListener('click', flipCard));
        }, 900); 
    }

cards.forEach((card) => card.addEventListener("click", flipCard));

//Reset the Game
function reloadGame() {
    window.location.reload();
}

let resetGame = function myFunction() {
    reloadGame();
};

const instruc = document.getElementById('instruction-msg');

//Closing window
function closeWindow() {
    instruc.style.display = 'none';
    lockBoard = false;
}    