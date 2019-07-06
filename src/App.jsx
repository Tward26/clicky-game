import React, { Component } from "react";
import Navbar from "./components/navbar/index";
import Header from "./components/header";
import Container from "./components/container/index";
import pokemonList from "./pokemon.json";
import PokeContainer from "./components/pokeContainer/index";

class App extends Component {
  state = {
    guessedArray: [],
    pokemonList,
    guess: "Click an Image to begin",
    score: 0,
    topScore: 0
  };

  click = id => {
    this.setState(state => {
      return { score: state.score + 1, guess: "Correct Guess" };
    });
    this.clickGuess(id);
    // console.log(this.state.guessedArray);
    // console.log(this.state.pokemonList);
  };

  //To do list
  //Logic to shuffle array elements
  //Logic to update top score
  //Logic to

  //Something still wrong with this
  clickGuess = clickedId => {
    //checks to see if clickedElement has already been guessed
    this.state.guessedArray.forEach((element, index) => {
      if (element.id === clickedId) {
        this.setState(state => {
          return {
            score: (state.score = 0),
            guess: "Incorrect Guess - The Game has Reset",
            guessedArray: []
          };
        });
      }
    });

    //adds clickedElement to guessedArray
    let newGuess = null;
    this.state.pokemonList.forEach((element, index) => {
      if (element.id === clickedId) {
        newGuess = this.state.pokemonList[index];
      }
    });
    console.log("newGuess", newGuess);
    this.setState(state => ({
      guessedArray: [...this.state.guessedArray, newGuess]
    }));
    console.log("Updated Guess Array", this.state.guessedArray);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          guess={this.state.guess}
          score={this.state.score}
          topScore={this.state.topScore}
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
