// Your code here
class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }
}
class Deck {
  constructor() {
    this.cards = []
  }
  add(card) {
    this.cards.push(card)
  }
  filter(suit) {
   return this.cards.filter(current => {
      return current.suit === suit
    })
  }
  populate(array) {
    array.forEach(current => {
      return this.cards.push(new Card(current[0], current[1]))
    })
    return this.cards
  }
  
}

module.exports = {
  Card,
  Deck
}
