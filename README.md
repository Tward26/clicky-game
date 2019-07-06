# clicky-game

_Bug-Type Pokemon Memory Game built using React_

## Purpose:

This game was an exercise for me to learn how to use the React library. I learned how to lift state, create both stateful and stateless components, and the basic ins and outs of react. While stylistically simple there was a lot going on under the hood that I hadn't previously dealt with. The game was just a fun secondary feature to the actual learning taking place.

## How it works:

An initial JSON file made up of an array of objects of bug-type pokemon is read in to generate the cards for the game, this is then shuffled upon mounting of the App component to randomize the initial layout. Upon a player clicking one of the pokemon cards, their clicked card is checking against the already guessed array to see if this is a repeat or not. If the item has previously been clicked in the current game state then the score is reset to Zero and a message is displayed at the top saying the guess was incorrect and the game resets. If the guess is new, then the guess is added to the guessedArray, the score is increased, as well as top score if score would be higher than the top score currently displayed. The array is then shuffled again and the player must then select another tile until they have correctly guessed all 12 without any repeats.

## How to use:

The game is straight-forward, click pokemon tiles that you haven't yet clicked with the goal of clicking all 12 without any repeats. If you click a tile you haven't already clicked your score increases by one and the tiles are shuffled around. If you click a tile that you have previously guessed, your score is set back to 0 and the game resets.

## Contributors:

This project is maintained and contributed to solely by myself, Tyler Ward. All pokemon images taken from pokemon.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
