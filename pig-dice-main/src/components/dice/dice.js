import React, { Component } from "react";
import dice1 from "../../images/dice_1.jpg";
import dice2 from "../../images/dice_2.jpg";
import dice3 from "../../images/dice_3.jpg";
import dice4 from "../../images/dice_4.jpg";
import dice5 from "../../images/dice_5.jpg";
import dice6 from "../../images/dice_6.jpg";

const DICES = [dice1, dice2, dice3, dice4, dice5, dice6];

class Dice extends Component {

  render() {
    return (
      <div data-testid="dice" className="dice-wrapper">
        <img className="dice" src={DICES[this.props.diceImage - 1]} alt="Dice"></img>
      </div>
    );
  }
}

export default Dice;
