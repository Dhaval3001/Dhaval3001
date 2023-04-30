import React, { Component } from "react";
import "./App.css";
import Dice from "./components/dice/dice";
import Player from "./components/player/player";

const TARGET_SCORE = 100;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfPlayers: 2,
      scores: [],
      roundScore: 0,
      activePlayer: 0,
      dice1: 1,
      dice2: 1,
      gamePlaying: true,
    };
  }

  componentDidMount() {
    this.setState({
      scores: new Array(this.state.noOfPlayers).fill(0)
    })
  }

  rollDice = () => {
    if (this.state.gamePlaying) {
      // Generate two random numbers between 1 and 6 for each dice
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;

      // Update the state to reflect the new dice values
      this.setState({
        dice1: dice1,
        dice2: dice2,
      });

      // If both dice are 1, reset the current score and switch to the next player
      if (dice1 === 1 && dice2 === 1) {
        const currentScores = this.state.scores;
        currentScores[this.state.activePlayer] = 0;
        this.setState({
          roundScore: 0,
          scores: currentScores,
          activePlayer: this.state.activePlayer === 0 ? 1 : 0,
        });
      } else if (dice1 === 1 || dice2 === 1) {
        this.setState({
          roundScore: 0,
          activePlayer: this.state.activePlayer === 0 ? 1 : 0,
        });
      } else {
        // Otherwise, add the sum of the two dice to the round score
        this.setState({
          roundScore: this.state.roundScore + dice1 + dice2,
        });
      }
    }
  };

  holdScore = () => {
    if (this.state.gamePlaying) {
      // Add the current round score to the active player's total score
      const scores = this.state.scores.slice();
      scores[this.state.activePlayer] += this.state.roundScore;

      // Check if the active player has won the game (reached target score)
      if (scores[this.state.activePlayer] >= TARGET_SCORE) {
        // End the game and display a message
        this.setState({
          scores: scores,
          gamePlaying: false,
        });
        alert(`Player ${this.state.activePlayer + 1} has won the game!`);
      } else {
        // Otherwise, switch to the next player and reset the round score
        this.setState({
          scores: scores,
          roundScore: 0,
          dice1: 1,
          dice2: 1,
          activePlayer: this.state.activePlayer + 1 < this.state.noOfPlayers ? this.state.activePlayer + 1 : 0,
        });
      }
    }
  };

  newGame = () => {
    // Reset the game state to its initial values
    this.setState({
      scores: this.state.scores.fill(0),
      roundScore: 0,
      activePlayer: 0,
      dice1: 1,
      dice2: 1,
      gamePlaying: true
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Pig Dice Game</h1>
        <div className="player-panel">
          <div className="player-wrapper">
            {this.state.scores.map((score, i) => 
              (<Player
                score={score}
                key={'player-' + i}
                playerId={i+1}
                isActive={this.state.activePlayer === i}
              ></Player>)
            )}
          </div>
          <div>
            <b>Current Round</b>
            <p data-testid="round-score">{this.state.roundScore}</p>
          </div>
          <div className="dice-score">
            <Dice diceImage={this.state.dice1}></Dice>
            <Dice diceImage={this.state.dice2}></Dice>
          </div>
          <button className="btn btn-roll" onClick={this.rollDice} data-testid="roll-dice">
            Roll Dice
          </button>
          <button className="btn btn-hold" onClick={this.holdScore}>
            Hold
          </button>
          <button className="btn btn-new" onClick={this.newGame}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
