import React, { Component } from "react";
import userImage from "../../images/user.png";

class Player extends Component {

  render() {
    return (
      <div data-testid="player" className={`player-score ${this.props.isActive && 'is-active'}`}>
        <img className="player-profile" src={userImage} alt="User Logo"></img>
        <h4>Player {this.props.playerId}</h4>
        <p className="score" data-testid={"player-score-" + this.props.playerId + 1}>{this.props.score}</p>
      </div>
    );
  }
}

export default Player;
