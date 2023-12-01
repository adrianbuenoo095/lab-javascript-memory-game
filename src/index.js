const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
        </div>
        `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  function toggle(element, classes) {
    classes.forEach(className => element.classList.toggle(className));
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      const pairsClicked = document.getElementById("pairs-clicked");
      const pairsGuessed = document.getElementById("pairs-guessed");

      console.log("Card clicked: ", card);
      toggle(card.children[0], ["back", "front"]);
      toggle(card.children[1], ["back", "front"]);

      memoryGame.pickedCards.push(card);

      // console.log(pickedCardsLength.length)
      let pickedCardsLength = memoryGame.pickedCards.length;

      // console.log(card.classList.add("turned"))

      if (pickedCardsLength === 2) {
        let firstPair = memoryGame.pickedCards[0];
        let secondPair = memoryGame.pickedCards[1];

        let cardOne = firstPair.getAttribute("data-card-name");
        let cardTwo = secondPair.getAttribute("data-card-name");
        let isAMatch = memoryGame.checkIfPair(cardOne, cardTwo);
        let isItFinished = memoryGame.checkIfFinished();


        if (isAMatch) {
          firstPair.children[1].classList.add("blocked");
          secondPair.children[1].classList.add("blocked");
          memoryGame.pickedCards = [];
        }

        if (isItFinished) {
          document.querySelector("#memory-board").innerHTML = "";
          let h1 = document.createElement("h1");
          h1.style.color = "pink";
          h1.innerHTML = "YOU WON!!!";
          document.querySelector("#memory-board").appendChild(h1);
        }
      } else {
        setTimeout(() => {
          toggle(firstPair.children[0], ["back", "front"]);
          toggle(firstPair.children[1], ["back", "front"]);
          toggle(secondPair.children[0], ["back", "front"]);
          toggle(secondPair.children[1], ["back", "front"]);
        }, 1000);
        memoryGame.pickedCards = [];
      }
      pairsClicked.innerHTML = memoryGame.pairsClicked;
      pairsGuessed.innerHTML = memoryGame.pairsGuessed;

    });
  });
});
