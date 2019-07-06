import React, { Component } from "react";
import Navbar from "./components/navbar/index";
import Header from "./components/header/index";
import Container from "./components/container/index";
import pokemonList from "./pokemon.json";
import PokeContainer from "./components/pokeContainer/index";

class App extends Component {
  state = {
    guessedArray: [],
    pokemonList,
    guess: "Click an Image to begin",
    score: 0,
    topScore: 0,
    class: ""
  };

  componentDidMount() {
    this.shuffle(pokemonList);
  }

  click = id => {
    if (this.repeatCheck(id)) {
      this.addToGuessedArray(id);
      this.topScoreCheck(this.state.score);
      this.shuffle(this.state.pokemonList);
    }
  };

  topScoreCheck = currentScore => {
    if (currentScore < this.state.topScore) {
      this.setState(state => {
        return {
          score: state.score + 1,
          guess: "Correct Guess",
          class: "correct"
        };
      });
    } else {
      this.setState(state => {
        return {
          score: state.score + 1,
          guess: "Correct Guess",
          topScore: state.topScore + 1,
          class: "correct"
        };
      });
    }
    if (currentScore === 12) {
      this.setState(state => {
        return {
          guess: "You won, all 12 pokemon correctly guessed!",
          class: "win"
        };
      });
    }
  };

  /* Fisher-Yates Shuffle
    https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  */

  shuffle = arr => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    this.setState(state => {
      return { pokemonList: newArr };
    });
  };

  repeatCheck = clickId => {
    //checks to see if clickedElement has already been guessed
    let notGuessed = true;
    for (let i = 0; i < this.state.guessedArray.length; i++) {
      if (this.state.guessedArray[i].id === clickId) {
        this.shuffle(this.state.pokemonList);
        this.setState(state => {
          return {
            score: (state.score = 0),
            guess: "Incorrect Guess - The Game has Reset",
            class: "incorrect",
            guessedArray: []
          };
        });
        notGuessed = false;
        return notGuessed;
      }
    }
    return notGuessed;
  };

  addToGuessedArray = clickId => {
    let newGuess = null;
    this.state.pokemonList.forEach((element, index) => {
      if (element.id === clickId) {
        newGuess = this.state.pokemonList[index];
      }
    });
    this.setState(state => ({
      guessedArray: [...state.guessedArray, newGuess]
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          guess={this.state.guess}
          score={this.state.score}
          topScore={this.state.topScore}
          class={this.state.class}
        />
        <Header />
        <Container>
          {this.state.pokemonList.map(pokemon => (
            <PokeContainer
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              click={this.click}
            />
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
