/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, gamePlaying, activePlayer, btnNew, dice, diceDisplay, rollDice, playerOneScore, PlayerTwoScore, PlayerOneCurrent, PlayerTwoCurrent, playerOne, playerTwo, holdBtn;


 scores = [0, 0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;
 diceDisplay= document.querySelector(".dice");
 rollDice = document.querySelector(".btn-roll");
 playerOneScore = document.getElementById("score-0");
 playerOneCurrent = document.getElementById("current-0");
 playerTwoScore = document.getElementById("score-1");
 playerTwoCurrent = document.getElementById("current-1");
 playerOne = document.querySelector(".player-0-panel");
 playerTwo = document.querySelector(".player-1-panel");
 holdBtn = document.querySelector(".btn-hold");
 btnNew = document.querySelector(".btn-new");

 diceDisplay.style.display = "none";
 playerOneScore.textContent = "0";
 playerOneCurrent.textContent = "0";
 playerTwoScore.textContent = "0";
 playerTwoCurrent.textContent = "0";




rollDice.addEventListener("click", function (){
if (gamePlaying) {
  // 1st random number
var dice = Math.floor(Math.random() * 6) + 1;
  // display result.
var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "block";
diceDOM.src = "dice-" + dice + ".png";

  // update the round score if the rolled number wast not a 1
  if (dice > 1) {
    //add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //next player

    nextPlayer();
  }
}

});


holdBtn.addEventListener("click", function(){
if (gamePlaying) {
  // add current score to global score
  scores[activePlayer] += roundScore;
  // update ui
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
  // check if player won the game
  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent ="Winner !"
    diceDisplay.style.display = "none";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    gamePlaying = false;
  } else {
    nextPlayer();
  }
}

});

btnNew.addEventListener("click", function(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  diceDisplay.style.display = "none";
  playerOneScore.textContent = "0";
  playerOneCurrent.textContent = "0";
  playerTwoScore.textContent = "0";
  playerTwoCurrent.textContent = "0";
  document.querySelector("#name-0").textContent ="player 1"
  document.querySelector("#name-1").textContent ="player 2"
  document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("winner");
  gamePlaying = true;
});


function nextPlayer(){
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  playerOneCurrent.textContent = "0";
  playerTwoCurrent.textContent = "0";

  playerOne.classList.toggle("active");
  playerTwo.classList.toggle("active");

  diceDisplay.style.display = "none";
};




//document.querySelector("#current-" + activePlayer).textContent = dice;

//var x = document.querySelector("#score-0").textContent;
//console.log(x);
