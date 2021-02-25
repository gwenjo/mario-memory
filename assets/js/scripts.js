//Code taken from https://github.com/taniarascia/memory/blob/master/js/script.original.js

let delay = 1300;
let timerOn = true;

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

    secondCard = this; //second card

    checkForMatch(); //calls function to see if the cards match
}

function checkForMatch() {
    if (firstCard.dataset.frame === secondCard.dataset.frame) {
    disableCards();
    return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

  reset();
}

function unflipCards() {
    lockBoard = true; //prevents other clicks 
    setTimeout( //used to keep the cards visiable for short time
    () => {
        firstCard.classList.remove("flip");

        secondCard.classList.remove("flip");

      reset();
    }, 
    1300);
}


(function shuffle() {
  cards.forEach((card) => {
    var ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();


// Reset the game, new game
function reset() {
    setTimeout(() => {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
        card.forEach(cardReset => cardReset.classList.remove('flip'));
        card.forEach(cardBg => cardBg.classList.remove('bg_green'));
        // Remove the red background in that case when the user start a new game
        // while a not matched pair is stil not flipped back.  
        card.forEach(cardBg => cardBg.classList.remove('bg_red'));
        shuffle();
        card.forEach(cards => cards.addEventListener('click', flipOver));
        }, 800);
        // For the case the player don't close the game finished window.
        closeWindow();  
    }


cards.forEach((card) => card.addEventListener("click", flipCard));

//Reset the Game
function reloadGame() {
  window.location.reload();
}

let resetGame = function myFunction() {
  reloadGame();
};

const info = document.getElementById('instruction-msg');

//Closing window
function closeWindow() {
    info.style.display = 'none';
    done.style.display = 'none';
    gameLock = false;
}    