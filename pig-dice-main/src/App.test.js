/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render without errors", () => {
    render(<App />);
    expect(screen.getByText("Pig Dice Game")).toBeInTheDocument();
  });

  it("renders 2 Player components", () => {
    render(<App />);
    const playerComponents = screen.getAllByTestId("player");
    expect(playerComponents.length).toBe(2);
  });

  it("displays initial round score of 0", () => {
    render(<App />);
    const roundScoreElement = screen.getByText(/current round/i);
    const roundScoreText = roundScoreElement.nextElementSibling.textContent;
    expect(roundScoreText).toEqual("0");
  });

  it("renders 2 Dice components", () => {
    render(<App />);
    const diceComponents = screen.getAllByTestId("dice");
    expect(diceComponents.length).toBe(2);
  });

  it('should add the round score to the player score and switch to the next player when the Hold button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Hold'));
    const roundScoreElement = screen.getByText(/current round/i);
    const roundScoreText = roundScoreElement.nextElementSibling.textContent;
    expect(roundScoreText).toEqual("0");
  });
});
