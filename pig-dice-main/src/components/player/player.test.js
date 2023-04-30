import React from "react";
import { render, screen } from "@testing-library/react";

import Player from "./player";
import userImage from "../../images/user.png";

describe("Player", () => {
  const props = {
    playerId: 1,
    score: 50,
    isActive: false,
  };

  it("renders the player profile image", () => {
    render(<Player {...props} />);
    expect(screen.getByAltText("User Logo")).toHaveAttribute("src", userImage);
  });

  it("renders the player ID", () => {
    render(<Player {...props} />);
    expect(screen.getByText("Player 1")).toBeInTheDocument();
  });

  it("renders the player score", () => {
    render(<Player {...props} />);
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  it("adds the is-active class if isActive prop is true", () => {
    render(<Player {...props} isActive={true} />);
    expect(screen.getByTestId('player').classList.contains("is-active")).toEqual(true);
  });

  it("does not add the is-active class if isActive prop is false", () => {
    render(<Player {...props} isActive={false} />);
    expect(screen.getByTestId('player').classList.contains("is-active")).toEqual(false);
  });
});
