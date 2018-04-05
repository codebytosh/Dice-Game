/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times they want. Each result gets added to his ROUND score
- BUT, if the player rolls a '1', all his ROUND score gets deleted. After that, it's the next player's turn
- The player can choose to 'Keep', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points wins the game

*/

//Global Variables
var scores, totalScore, activePlayer;

scores = [0,0];
totalScore = 0;
activePlayer = 0;

//Set initial scores to 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//DOM

//No dice image when page is first loaded - CSS
document.querySelector(".dice").style.display = "none";

//Event Listner -> When the the roll btn is clicked
document.querySelector(".btn-roll").addEventListener("click", function() {
    
    //Random Number Generator
    var diceValue = Math.floor(Math.random() * 6) + 1;
    
    //Display the results -> Dice image
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + diceValue + ".png";
    
    //Update Scores
    
});