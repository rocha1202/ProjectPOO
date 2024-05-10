const container = document.querySelector(".container");

const cards = [
  { id: 1, nome: "Card 1", letter: "A" },
  { id: 2, nome: "Card 2", letter: "B" },
  { id: 3, nome: "Card 3", letter: "C" },
  { id: 4, nome: "Card 4", letter: "D" },
  { id: 5, nome: "Card 5", letter: "E" },
  { id: 6, nome: "Card 6", letter: "F" },
  { id: 7, nome: "Card 7", letter: "G" },
  { id: 8, nome: "Card 8", letter: "H" },
  { id: 9, nome: "Card 9", letter: "A" },
  { id: 10, nome: "Card 10", letter: "B" },
  { id: 11, nome: "Card 11", letter: "C" },
  { id: 12, nome: "Card 12", letter: "D" },
  { id: 13, nome: "Card 13", letter: "E" },
  { id: 14, nome: "Card 14", letter: "F" },
  { id: 15, nome: "Card 15", letter: "G" },
  { id: 16, nome: "Card 16", letter: "H" },
];

const random = cards.sort(() => Math.random() - 0.5);

const renderCards = () => {
  container.innerHTML = "";
  container.innerHTML += `<div id="cards"></div>`;
  const cards = document.querySelector("#cards");
  random.map((item) => {
    cards.innerHTML += `
      <div id='card' class='col-3'>
        <div class="view front-view">
            <p class="text-danger">${item.nome}</p>
        </div>
        <div class="view back-view">
          <p class="text-danger" id='letter'>${item.letter}</p>
        </div>
      </div>
      `;
  });
};

renderCards();

const cardsArray = document.querySelectorAll("#card");

let matchedCard = 0;
let cardOne;
let cardTwo;
let disabledDeck = false;
let points = 0;

const flipCard = (e) => {
  let clickedCard = e.target;
  if (clickedCard !== cardOne && !disabledDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disabledDeck = true;

    let cardOneLetter = cardOne.querySelector("#letter").innerText;
    let cardTwoLetter = cardTwo.querySelector("#letter").innerText;
    matchCards(cardOneLetter, cardTwoLetter);
  }
};

const matchCards = (letter1, letter2) => {
  if (letter1 === letter2) {
    matchedCard++;
    points += 10;
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    disabledDeck = false;
    if (matchedCard === 8) {
      if (confirm("Quer jogar novamente?")) {
        setTimeout(() => {
          return renderCards();
        }, 1000);
      }
    }
    return;
  } else {
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = cardTwo = "";
      disabledDeck = false;
    }, 1200);
  }
};

cardsArray.forEach((item) => {
  item.addEventListener("click", flipCard);
});
