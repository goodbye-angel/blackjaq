# Blackjaq!

Blackjaq is a browser-based game using modified rules for the casino game Blackjack, or 21. The goal of the game is to have the hand whose value comes closest to 21 without going over. The user is able to make bets, choose to "Hit" or "Stand" based on the cards showing on the screen, and accumulate money. If the user loses all their money, they lose the game. If they reach $300, they win!

It's called Blackjaq because my name is Jaq, and I like puns.

##  Overview

The game uses a standard 52-card deck, which is shuffled at the beginning of the game and used throughout multiple rounds, until the player wins, loses, or refreshes the browser. If the deck has less than 15 cards remaining, it will be reshuffled.

After pressing "Play" to create a deck, shuffle the cards, and initialize the game, the user may press "Deal" to have the Dealer start dispensing cards. Both the Dealer and Player are dealt two cards to start - both of the Player's cards face-up, one of the Dealer's cards face-up and one face-down.

The Player must place an initial bet, and then has the choice to "Hit" (take another card) or "Stand" (stay with their cards). The user may press "Hit" and get another card as many times as they'd like, until the value of their hand exceeds 21. If the user presses "Stand," the Dealer's face-down card will be revealed, and they will deal cards to their own hand until it totals 17 or more.

At this point the Player's and Dealer's hands will be evaluated, and whichever has the highest total without going over 21 wins the round. If this is the Player, they will win twice the money they bet during the round.

At any point during the round:
- If the value of the cards in the Player's hand exceed 21, they "bust", and lose the money they bet during the round.
- If the Dealer's hand exceeds 21, they bust, and the Player wins twice the money they bet during the round.
- If the Player's hand totals exactly 21, they get a Blackjack, and win three times the money they bet during the round.
- If the player reaches a win or lose condition, the game will reset and the user may play again.

## Rules
- The user must place an initial bet, and may continue to bet throughout the round.
- Aces have a value of 1 at all times.
- The user loses if they lose all their money.
- The user wins if they reach $300.

## Technologies Used
Blackjaq was built using HTML, CSS, JavaScript, and jQuery.

## Future Improvements
- Aces are worth 1 or 11 depending on circumstances
- Red suit symbols for hearts and diamonds
- Image for the back of cards
- Functionality for split and double
- Modals to replace pop-ups
- Current value of hand displayed
- "All in" button to bet all of current bankroll

### Play!
Blackjaq is hosted online at https://goodbye-angel.github.io/blackjaq/

### About the styling
I grew up playing card games on Windows 95, and wanted to emulate the simple, blocky, colorful style of those games. Nostalgia!

### Author
This game was built with lots of love by Jaq Dunham as a project for the Web Development Immersive Remote program at General Assembly in November, 2017.
