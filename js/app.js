//window onload
$(() => {

  //make deck
  const deckOfCards = [];
  const cardSuits = ["\u2665", "\u2666", "\u2663", "\u2660"];
  const cardValues = [
    {face: "A", num: 1},
    {face: "2", num: 2},
    {face: "3", num: 3},
    {face: "4", num: 4},
    {face: "5", num: 5},
    {face: "6", num: 6},
    {face: "7", num: 7},
    {face: "8", num: 8},
    {face: "9", num: 9},
    {face: "10", num: 10},
    {face: "J", num: 10},
    {face: "Q", num: 10},
    {face: "K", num: 10}
  ];

  const createDeck = () => {
    for (let i = 0; i < cardSuits.length; i++) {
      for (let a = 0; a < cardValues.length; a++) {
        deckOfCards.push({face: cardValues[a].face, suit: cardSuits[i], num: cardValues[a].num});
      }
    }
  }
  // createDeck();

  //shuffle deck
  const newDeck = [];

  const shuffleDeck = () => {
    for (let i = 0; i < 52; i++) {
      let randomNum = Math.floor(Math.random() * deckOfCards.length);
      newDeck.push(deckOfCards[randomNum]);
      deckOfCards.splice(randomNum, 1);
    }
  }
  // shuffleDeck();
//------------------------------------------------------------------------------
  //set variables
  let bankroll = 100;
  let currentBet = 0;
  let currentHandDealer = 0;
  let currentHandPlayer = 0;
//------------------------------------------------------------------------------
  //create divs
  const $buttons = $('<div>').attr('id', 'buttons');
  $('#play-area').append($buttons);

  const $betCount = $('<div>').attr('id', 'bet-count').text("Current bet: " + currentBet);

  const $currentBankroll = $('<div>').attr('id', 'bankroll').text("Bankroll: " + bankroll);

  const $dealerHand = $('<div>').attr('id', 'dealer').text("Dealer's Hand");

  const $playerHand = $('<div>').attr('id', 'player').text("Player's Hand");

  //create buttons
  //play
  const $playBtn = $('<button>').addClass('button').text('Play!');
  $buttons.append($playBtn);

  //deal
  const $dealBtn = $('<button>').addClass('button').text('Deal');

  //hit
  const $hitBtn = $('<button>').addClass('button').text('Hit');

  //stand
  const $standBtn = $('<button>').addClass('button').text('Stand');

  //bet $1
  const $bet1 = $('<button>').addClass('bet-button').text('$1');

  //bet $5
  const $bet5 = $('<button>').addClass('bet-button').text('$5');

  //bet $10
  const $bet10 = $('<button>').addClass('bet-button').text('$10');
//------------------------------------------------------------------------------
  //play game
  const startGame = () => {
    createDeck();
    shuffleDeck();
    $playBtn.remove();
    $buttons.append($dealBtn);
    $buttons.append($bet1);
    $buttons.append($bet5);
    $buttons.append($bet10);
    $('#play-area').append($betCount);
    $('#play-area').append($currentBankroll);
    $('#play-area').append($dealerHand);
    $('#play-area').append($playerHand);
  }

  //deal cards
  const dealCards = () => {
    for (let i = 0; i < 2; i++) {
      let $card = $('<div>').addClass('card').text(newDeck[i].face + newDeck[i].suit);
      $('#dealer').append($card);
      currentHandDealer += newDeck[i].num;
      newDeck.splice(i, 1);
    }
    for (let i = 0; i < 2; i++) {
      let $card = $('<div>').addClass('card').text(newDeck[i].face + newDeck[i].suit);
      $('#player').append($card);
      currentHandPlayer += newDeck[i].num;
      newDeck.splice(i, 1);
    }
    $dealBtn.remove();
    $buttons.append($hitBtn);
    $buttons.append($standBtn);
  }

  //hit
  const hit = () => {
    if (currentBet > 0) {
    for (let i = 0; i < 1; i++) {
      let $card = $('<div>').addClass('card').text(newDeck[i].face + newDeck[i].suit);
      $('#player').append($card);
      currentHandPlayer += newDeck[i].num;
      newDeck.splice(i, 1);
    }
    } else {
      alert("Please place a bet to continue");
    }
    }

  //event listeners/handlers
  $playBtn.on('click', startGame);

  $bet1.on('click', () => {
    currentBet += 1;
    bankroll -= 1;
    $betCount.text("Current bet: " + currentBet);
    $currentBankroll.text("Bankroll: " + bankroll);
  })

  $bet5.on('click', () => {
    currentBet += 5;
    bankroll -=5;
    $betCount.text("Current bet: " + currentBet);
    $currentBankroll.text("Bankroll: " + bankroll);
  })

  $bet10.on('click', () => {
    currentBet += 10;
    bankroll -= 10;
    $betCount.text("Current bet: " + currentBet);
    $currentBankroll.text("Bankroll: " + bankroll);
  })

  $dealBtn.on('click', dealCards);

  $hitBtn.on('click', hit);














});//
