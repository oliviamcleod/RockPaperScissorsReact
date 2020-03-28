import React, { useState, useEffect } from "react";
import css from "./App.module.css";
import Input from "../Input";
import Button from "../Buttons";

//compare the two and decide winner
//Tell player what computer move was
//Tell player who won

// if player wins, player tally increases by 1

//Take in a username (input field)
//Store the username as a variable when the player presses enter
//Display username at the top of the page.
//Display it by the scores

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  function playerChooses(id) {
    if (id === "rock") {
      setPlayerChoice("rock");
    } else if (id === "paper") {
      setPlayerChoice("paper");
    } else {
      setPlayerChoice("scissors");
    }
    computerChooses();
  }

  async function computerChooses() {
    const randomNumber = Math.random();

    if (randomNumber <= 0.33) {
      setComputerChoice("rock");
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
      setComputerChoice("paper");
    } else {
      setComputerChoice("scissors");
    }
    compareChoices();
  }

  function compareChoices() {
    switch (playerChoice) {
      case "rock":
        playRock();
        break;
      case "paper":
        playPaper();
        break;
      case "scissors":
        playScissors();
        break;
    }
  }

  function playRock() {
    switch (computerChoice) {
      case "rock":
        setResult("draw");
        break;
      case "paper":
        setResult("you lose");
        break;
      case "scissors":
        setResult("you win");
        break;
    }
  }
  function playPaper() {
    switch (computerChoice) {
      case "rock":
        setResult("you win");
        break;
      case "paper":
        setResult("draw");
        break;
      case "scissors":
        setResult("you lose");
        break;
    }
  }
  function playScissors() {
    switch (computerChoice) {
      case "rock":
        setResult("you lose");
        break;
      case "paper":
        setResult("you win");
        break;
      case "scissors":
        setResult("draw");
        break;
    }
  }

  return (
    <div className="App">
      <h1 className={css.title}>Rock Paper Scissors!</h1>
      <Input />
      <Button playerChooses={playerChooses} id="rock" value="rock" />
      <Button playerChooses={playerChooses} id="paper" />
      <Button playerChooses={playerChooses} id="scissors" />
      <h2 className={css.title}>Player:{playerChoice}</h2>
      <h2 className={css.title}>Computer:{computerChoice}</h2>
      <h2 className={css.title}>{result}</h2>
    </div>
  );
}

export default App;
