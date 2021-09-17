console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create a function to run the card game where the user can determine the number of players and the number of cards per hand
// create storage for the x amount of players
// create storage to keep track of the player(s) with the highest score, with a score of 0;
// create storage to keep track of the current player's score
// create storage for the card deck
// create storage for the shuffled deck
// create a function to create a card deck, with each card having a rank and a suit
// - create storage for the output
// - create storage for the current card
// - create a list of the card ranks
// - create a list of the card suits
// - look at each suit
//   - look at each rank
//     - add the current suit to the current card
//     - add the current rank to the current card
//     - add the current card to the output
//     - clear the current card
// - return the output
// for each player
// - create storage for the current player
// - set a unique name
// - set a hand for cards
// - add the current player to the output
// create a card deck
// shuffle the deck
// for each player
// - deal the specified amount of cards in each hand
// - create storage for their score
// - if the rank is an ace
//   - add 11 to the score
// - if the rank is a jack, queen, or king
//    - add 10 to the score
//  - otherwise, add the value of the number rank to the score
// - give the current player a score
// - if the current player's score is greater than the score of the player who currently has the high score
//   - the current player is now the highest scorer
// - log the winner to the console

function cardGame(players, hand) {
  var cardPlayers = [];
  var highestScorer = { score: 0 };
  var cardDeck = [];
  var shuffled = [];
  function createCardDeck() {
    var output = [];
    var currentCard = {};
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    for (var s = 0; s < suits.length; s++) {
      for (var r = 0; r < ranks.length; r++) {
        currentCard.suit = suits[s];
        currentCard.rank = ranks[r];
        output.push(currentCard);
        currentCard = {};
      }
    }
    return output;
  }

  function calculateScore(currentPlayer) {
    var calculated = 0;
    for (var card = 0; card < hand; card++) {
      if (currentPlayer.cardHand[card].rank === 'ace') {
        calculated += 11;
      } else if (currentPlayer.cardHand[card].rank === 'jack' || cardPlayers[player].cardHand[card].rank === 'queen' || cardPlayers[player].cardHand[card].rank === 'king') {
        calculated += 10;
      } else {
        calculated += currentPlayer.cardHand[card].rank;
      }
      currentPlayer.score = calculated;
    }
    return calculated;
  }

  for (var i = 0; i < players.length; i++) {
    var currentPlayer = {};
    currentPlayer.name = players[i];
    currentPlayer.cardHand = [];
    cardPlayers.push(currentPlayer);
  }
  cardDeck = createCardDeck();
  shuffled = _.shuffle(cardDeck);
  for (var player = 0; player < cardPlayers.length; player++) {
    for (var deal = 0; deal < hand; deal++) {
      cardPlayers[player].cardHand.push(shuffled.shift());
    }
    cardPlayers[player].score = calculateScore(cardPlayers[player]);
    if (cardPlayers[player].score > highestScorer.score) {
      highestScorer = cardPlayers[player];
    }
  }
  console.log('value of cardPlayers;', cardPlayers);
  console.log('value of cardDeck:', cardDeck);
  console.log('value of shuffled:', shuffled);
  console.log('value of highestScorer:', highestScorer);
}

cardGame(['Aristotle', 'Babbage', 'Camus', 'Dante'], 2);
