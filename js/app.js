//window onload
$(() => {

  //make deck
  const deckOfCards = [];
  const cardSuits = ["hearts", "diamonds", "clubs", "spades"];
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
        deckOfCards.push({face: cardValues[a].face, suit: cardSuits[i], value: cardValues[a].num});
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
//------------------------------------------------------------------------------
  //create buttons
  //play
  const $playBtn = $('<button>').addClass('button').text('Play!');
  $('#play-area').append($playBtn);

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

  //create divs
  const $betCount = $('<div>').attr('id', 'bet-count').text("Current bet: " + currentBet);

  const $currentBankroll = $('<div>').attr('id', 'bankroll').text("Bankroll: " + bankroll);

//------------------------------------------------------------------------------
  //play game
  const startGame = () => {
    createDeck();
    shuffleDeck();
    $playBtn.remove();
    $('#play-area').append($dealBtn);
    $('#play-area').append($hitBtn);
    $('#play-area').append($standBtn);
    $('#play-area').append($bet1);
    $('#play-area').append($bet5);
    $('#play-area').append($bet10);
    $('#play-area').append($betCount);
    $('#play-area').append($currentBankroll);
  }

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















});//
