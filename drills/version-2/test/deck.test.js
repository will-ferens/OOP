const { expect } = require('chai');
var Card = require('../deck').Card;
var Deck = require('../deck').Deck;

describe('Card', function() {
  it('has a rank and suit', function() {
    var card = new Card('ace', 'spades');
    expect(card.rank).to.equal('ace');
    expect(card.suit).to.equal('spades');

    var card = new Card('king', 'diamonds');
    expect(card.rank).to.equal('king');
    expect(card.suit).to.equal('diamonds');
  });
});

describe('Deck', function() {
  it('starts off with an empty array of cards', function() {
    var deck = new Deck();

    expect(deck.cards).to.deep.equal([]);
  });

  it('can add card instances', function() {
    var aceSpades = new Card('ace', 'spades');
    var kingDiamonds = new Card('king', 'diamonds');

    var deck = new Deck();
    deck.add(aceSpades);
    deck.add(kingDiamonds);

    expect(deck.cards).to.deep.equal([aceSpades, kingDiamonds]);
  });

  it('can filter cards by suit', function() {
    var aceSpades = new Card('ace', 'spades');
    var kingSpades = new Card('king', 'spades');
    var jackClubs = new Card('jack', 'clubs');
    var kingHearts = new Card('king', 'hearts');

    var deck = new Deck();

    deck.add(aceSpades);
    deck.add(kingSpades);
    deck.add(jackClubs);
    deck.add(kingHearts);

    expect(deck.filter('spades')).to.deep.equal([aceSpades, kingSpades]);
    expect(deck.filter('clubs')).to.deep.equal([jackClubs]);
    expect(deck.filter('hearts')).to.deep.equal([kingHearts]);
  });

  it('can populate multiple cards', function() {
    var deck = new Deck();
    deck.populate([['ace', 'spades'], ['king', 'hearts'], ['jack', 'clubs']]);

    expect(deck.cards[0] instanceof Card).to.equal(true);

    expect(deck.cards.length).to.equal(3);
    expect(deck.cards[0].rank).to.equal('ace');
    expect(deck.cards[0].suit).to.equal('spades');
  });
});
