import React from "react";
import { render, screen } from "@testing-library/react";
import Dice from "./dice";
import dice1 from "../../images/dice_1.jpg";
import dice2 from "../../images/dice_2.jpg";
import dice3 from "../../images/dice_3.jpg";
import dice4 from "../../images/dice_4.jpg";
import dice5 from "../../images/dice_5.jpg";
import dice6 from "../../images/dice_6.jpg";

describe("Dice", () => {
  it("renders the correct dice image for dice 1", () => {
   render(<Dice diceImage={1} />);
    expect(screen.getByAltText("Dice")).toHaveAttribute("src", dice1);
  });

  it("renders the correct dice image for dice 2", () => {
   render(<Dice diceImage={2} />);
    expect(screen.getByAltText("Dice")).toHaveAttribute("src", dice2);
  });

  it("renders the correct dice image for dice 3", () => {
   render(<Dice diceImage={3} />);
    expect(screen.getByAltText("Dice")).toHaveAttribute("src", dice3);
  });

  it("renders the correct dice image for dice 4", () => {
   render(<Dice diceImage={4} />);
    expect(screen.getByAltText("Dice")).toHaveAttribute("src", dice4);
  });

  it("renders the correct dice image for dice 5", () => {
   render(<Dice diceImage={5} />);
    expect(screen.getByAltText("Dice")).toHaveAttribute("src", dice5);
  });

  it("renders the correct dice image for dice 6", () => {
   render(<Dice diceImage={6} />);
    expect(screen.getByAltText("Dice")).toHaveAttribute("src", dice6);
  });
});
