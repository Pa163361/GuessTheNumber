"use strict";

const game = {
  num: Math.floor(Math.random() * 20) + 1,
  score: 20,
  highScore: 0,
  reset: function () {
    this.num = Math.floor(Math.random() * 20) + 1;
    this.score = 20;
  },
};

const checkNum = function () {
  let guessedNum = Number(document.getElementById("inp").value);
  document.getElementById("displayChosen").textContent = guessedNum;
  if (game.num === guessedNum) {
    console.log("You guessed it correctly!!! :)");
    game.highScore = Math.max(game.highScore, game.score);
    console.log(`Your score is ${game.score}`);
    document.getElementById("score").textContent = `Score: ${game.score}`;
    document.getElementById(
      "highScore"
    ).textContent = `High Score: ${game.highScore}`;
    document.getElementById("checkButton").disabled = true;
    document.getElementById("lbl").textContent =
      "You guessed it correctly!!! :)";
    game.reset();
  } else {
    game.score--;
    if (guessedNum > game.num) {
      document.getElementById("lbl").textContent = "It's high!!!";
      console.log("High!!!");
    } else {
      document.getElementById("lbl").textContent = "It's low!!!";
      console.log("Low!!!");
    }
    console.log(`Your score is ${game.score}`);
    document.getElementById("score").textContent = `Score: ${game.score}`;
    document.getElementById(
      "highScore"
    ).textContent = `High Score: ${game.highScore}`;
  }
};

const restart = function () {
  console.log("I'm coming here!");
  // values changing
  game.reset();

  // html renderings:
  document.getElementById("displayChosen").textContent = "?";
  document.getElementById("lbl").textContent = "Enter the number you guessed:";
  document.getElementById("score").textContent = `Score: ${game.score}`;
  document.getElementById(
    "highScore"
  ).textContent = `High Score: ${game.highScore}`;
  document.getElementById("checkButton").disabled = false;
  document.getElementById("inp").value = "";
};
