const container = document.querySelector(".container");

let matchedCard = 0;
let cardOne = null;
let cardTwo = null;
let disabledDeck = false;
let points = 0;
let pointsLevel=0;

const flipCard = (e) => {
  let clickedCard = e.target.closest('.card');
  if (clickedCard !== cardOne && !disabledDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disabledDeck = true;

    let cardOneImg = cardOne.querySelector(".back-view img").getAttribute('id');
    let cardTwoImg = cardTwo.querySelector(".back-view img").getAttribute('id');
    matchCards(cardOneImg, cardTwoImg);
  }
};

const matchCards = (icon1, icon2) => {
  if (icon1 === icon2) {
    matchedCard++;
    points += 2;
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = null;
    disabledDeck = false;
  } else {
    setTimeout(() => {
      if (cardOne) cardOne.classList.remove("flip");
      if (cardTwo) cardTwo.classList.remove("flip");
      cardOne = cardTwo = null;
      disabledDeck = false;
    }, 1200);
  }
};

const renderCards = (random) => {
  container.innerHTML = "";
  container.innerHTML += `<div id="cards" class="row"></div>`;
  const cardsContainer = document.querySelector("#cards");
  random.forEach((item) => {
    cardsContainer.innerHTML += `
        <div class="card col-3" id='card'>
          <div class="view front-view">
              <img src="/img/Logotipo.svg" height="20px">
          </div>
          <div class="view back-view">
              <img src="${item.img}" id="${item.nome}" width="40px" height="auto">
          </div>
        </div>
      `;
  });
};

const randomArray = (cards) => {
  matchedCard = 0;
  cardOne = cardTwo = null;

  const doubledCards = [...cards, ...cards];
  const random = doubledCards.sort(() => Math.random() - 0.5);

  renderCards(random);

  const cardsArray = document.querySelectorAll("#card");
  cardsArray.forEach((item) => {
    item.addEventListener("click", flipCard);
  });
};

// Extract game parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const game = urlParams.get('game');

// Determine the game code based on the selected game
let gameCode = '';
let cards = [];
let textoElement = document.getElementById("texto");
switch (game) {
  case '1':
    cards = [
      { id: 1, nome: "Card 1", img: "/img/jogos/Memoria/icon1.png" },
      { id: 2, nome: "Card 2", img: "/img/jogos/Memoria/icon2.png" },
      { id: 3, nome: "Card 3", img: "/img/jogos/Memoria/icon3.png" },
      { id: 4, nome: "Card 4", img: "/img/jogos/Memoria/icon4.png" },
      { id: 5, nome: "Card 5", img: "/img/jogos/Memoria/icon5.png" },
      { id: 6, nome: "Card 6", img: "/img/jogos/Memoria/icon6.png" }
    ];
    pointsLevel=1
    if (textoElement) {
      textoElement.textContent = "Jogo da Memoria - 4x3";
    }
    gameCode = 'Código para o Jogo 1';
    break;
  case '2':
    cards = [
      { id: 1, nome: "Card 1", img: "/img/jogos/Memoria/icon1.png" },
      { id: 2, nome: "Card 2", img: "/img/jogos/Memoria/icon2.png" },
      { id: 3, nome: "Card 3", img: "/img/jogos/Memoria/icon3.png" },
      { id: 4, nome: "Card 4", img: "/img/jogos/Memoria/icon4.png" },
      { id: 5, nome: "Card 5", img: "/img/jogos/Memoria/icon5.png" },
      { id: 6, nome: "Card 6", img: "/img/jogos/Memoria/icon6.png" },
      { id: 7, nome: "Card 7", img: "/img/jogos/Memoria/icon7.png" },
      { id: 8, nome: "Card 8", img: "/img/jogos/Memoria/icon8.png" },
      { id: 9, nome: "Card 9", img: "/img/jogos/Memoria/icon9.png" },
      { id: 10, nome: "Card 10", img: "/img/jogos/Memoria/icon10.png" }
    ];
    pointsLevel=2

    if (textoElement) {
      textoElement.textContent = "Jogo da Memoria - 5x4";
    }
    gameCode = 'Código para o Jogo 2';
    break;
  case '3':
    cards = [
      { id: 1, nome: "Card 1", img: "/img/jogos/Memoria/icon1.png" },
      { id: 2, nome: "Card 2", img: "/img/jogos/Memoria/icon2.png" },
      { id: 3, nome: "Card 3", img: "/img/jogos/Memoria/icon3.png" },
      { id: 4, nome: "Card 4", img: "/img/jogos/Memoria/icon4.png" },
      { id: 5, nome: "Card 5", img: "/img/jogos/Memoria/icon5.png" },
      { id: 6, nome: "Card 6", img: "/img/jogos/Memoria/icon6.png" },
      { id: 7, nome: "Card 7", img: "/img/jogos/Memoria/icon7.png" },
      { id: 8, nome: "Card 8", img: "/img/jogos/Memoria/icon8.png" },
      { id: 9, nome: "Card 9", img: "/img/jogos/Memoria/icon9.png" },
      { id: 10, nome: "Card 10", img: "/img/jogos/Memoria/icon10.png" },
      { id: 11, nome: "Card 11", img: "/img/jogos/Memoria/icon11.png" },
      { id: 12, nome: "Card 12", img: "/img/jogos/Memoria/icon12.png" },
    ];
    pointsLevel=5
    if (textoElement) {
      textoElement.textContent = "Jogo da Memoria - 6x4";
    }
    gameCode = 'Código para o Jogo 3';
    break;
  default:
    if (textoElement) {
      textoElement.textContent = "Jogo da Memoria";
    }
    gameCode = 'Código padrão';
}

randomArray(cards);
