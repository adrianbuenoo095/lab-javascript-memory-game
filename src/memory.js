class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) { return undefined };
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
    }
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++;

    const guessed = card1 === card2;

    if (guessed) {
      this.pairsGuessed++;
    }

    return guessed;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }
}
