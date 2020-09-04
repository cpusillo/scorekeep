// Define our players.
var player1 = {
    name: "Player 1",
    score : 0,
    winner : "",
    scoreBoard : document.querySelector(".p1score"),
    reset : function() {
      player1.score = 0;
      player1.scoreBoard.textContent = player1.score;
      player1.scoreBoard.style.color = "#000000";
      player1.winner = "";
    }
  }
  
  var player2 = {
    name : "Player 2",
    score : 0,
    winner : "",
    scoreBoard : document.querySelector(".p2score"),
    reset : function() {
      player2.score = 0;
      player2.scoreBoard.textContent = player2.score;
      player2.scoreBoard.style.color = "#000000";
      player2.winner = "";
    }
  }
  
  // Define our buttons
  var player1Btn = document.querySelector("#player1Btn");
  var player2Btn = document.querySelector("#player2Btn");
  var resetBtn = document.querySelector("#resetBtn");
  var numInput = document.querySelector("input[type='number']");
  
  // Define our winning score elements
  var winnerText = document.querySelector("#winnerText");
  var winningScoreDisplay = document.querySelector(".winningScoreDisplay");
  var winningScore = 5;
  
  // Define what our player1Btn click event does
  player1Btn.addEventListener("click", function(){
    player1.score += 1;
      if (player1.score == winningScore && player2.winner != true){
      player1.scoreBoard.textContent = player1.score;
      player1.scoreBoard.style.color = "green";
      player1.winner = true;
      winnerText.textContent = player1.name + " has won!";
      
    }
      if (player1.score < winningScore && player2.winner != true){
      player1.scoreBoard.textContent = player1.score;
      }
      
  });
  
  // Define what our player2Btn click event does
  player2Btn.addEventListener("click", function(){
    player2.score += 1;
     if (player2.score < winningScore && player1.winner != true){
      player2.scoreBoard.textContent = player2.score;
      }
    if (player2.score == winningScore && player1.winner != true){
      player2.scoreBoard.textContent = player2.score;
      player2.scoreBoard.style.color = "green";
      player2.winner = true;
      winnerText.textContent = player2.name + " has won!";
    }
     
  });
  
  numInput.addEventListener("change", function(){
      winningScoreDisplay.textContent = Number(numInput.value);
      winningScore = numInput.value;
       // Don't let the users cheat! 
      // Reset game if number is changed after game-start.
      if (player1.score || player2.score > 0){
          reset();
      }
  });

  
  // Define what our reset button does.
  resetBtn.addEventListener("click", function(){
    reset();
  });
  
  // Define the reset function.
  function reset(){
    // Call objects' reset function
    player1.reset();
    player2.reset();
  
    numInput.value = "";
    winnerText.textContent = "";
  
    winningScoreDisplay = winningScore;
  }
