const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const winMessage = document.getElementById('win-message');
const finalScoreDisplay = document.getElementById('final-score');

const emojis = [
    '🐶', '🐱', '🐭', '🐹', '🐰',
    '🦊', '🐻', '🐼', '🐨', '🐯',
    '🦁', '🐮', '🐷', '🐸', '🐵'
];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;
let lockBoard = false;

function initGame() {
    cards = [...emojis, ...emojis];
    shuffle(cards);
    matchedPairs = 0;
    score = 0;
    scoreDisplay.textContent = score;
    flippedCards = [];
    lockBoard = false;
    winMessage.classList.add('hidden');

    gameBoard.innerHTML = '';
    cards.forEach((emoji, index) => {
        const card = createCard(emoji, index);
        gameBoard.appendChild(card);
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(emoji, index) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.emoji = emoji;
    cardElement.dataset.index = index;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.textContent = emoji;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardElement.appendChild(cardInner);

    cardElement.addEventListener('click', flipCard);

    return cardElement;
}

function flipCard() {
    if (lockBoard) return;
    if (this === flippedCards[0]) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.emoji === card2.dataset.emoji;

    if (match) {
        disableCards();
        updateScore();
    } else {
        unflipCards();
    }
}

function disableCards() {
    flippedCards[0].removeEventListener('click', flipCard);
    flippedCards[1].removeEventListener('click', flipCard);

    setTimeout(() => {
        flippedCards[0].classList.add('matched');
        flippedCards[1].classList.add('matched');

        flippedCards[0].style.visibility = 'hidden';
        flippedCards[1].style.visibility = 'hidden';

        resetBoard();
        checkWin();
    }, 1000);
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        flippedCards[0].classList.remove('flipped');
        flippedCards[1].classList.remove('flipped');
        resetBoard();
    }, 1500);
}

function updateScore() {
    score += 2;
    scoreDisplay.textContent = score;
}

function resetBoard() {
    [flippedCards, lockBoard] = [[], false];
}

function checkWin() {
    matchedPairs++;
    if (matchedPairs === emojis.length) {
        finalScoreDisplay.textContent = score;
        winMessage.classList.remove('hidden');
    }
}

function restartGame() {
    initGame();
}

initGame();