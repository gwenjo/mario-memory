//Code taken from https://github.com/taniarascia/memory/blob/master/js/script.original.js

let firstGuess = "";
let secondGuess = "";
let previousTarget = null;
let delay = 1800;
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
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
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

  resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(
    () => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

      resetBoard();
    }, 1800);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

// code taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

let time = 0;
let timer;
function startTimer() {
    timer = setInterval(function () {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

let clicked = flipCard;
if (timerOn === true) {
    startTimer();
    timerOn = true;
}

function reloadGame() {
  window.location.reload();
}

let startGame = function myFunction() {
  reloadGame();
};

if (count < 2) {
        count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {    
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }}
