$(document).ready(function() {
    
// Gem value variables
var gemValue1;
var gemValue2;
var gemValue3;

// Wins and losses variables
var wins = 0;
var losses = 0;

// Computer generated number to reach
var randomNumber;

// Current score of the user
var userScore;

//making function that will set the game 
function startGame(){

//Generate random number for user to reach (between 19 & 120)
randomNumber = 19 + Math.floor(Math.random() * 102);

//Generate numbers for each gem (between 1 & 12)
gemValue1 = 1 + Math.floor(Math.random() * 12);
gemValue2 = 1 + Math.floor(Math.random() * 12);
gemValue3 = 1 + Math.floor(Math.random() * 12);
gemValue4 = 1 + Math.floor(Math.random() * 12);

//set initial score to 0
userScore= 0;

//set HTML
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#userScore").html(userScore);
$("#randomNumber").html(randomNumber);

};

function winOrLose(){
    if(userScore > randomNumber){
        losses++;
        startGame();
    }
    if(userScore == randomNumber){
        wins++; 
        startGame();
    }
}

//start the game
startGame();

//setup on-click function for gems
$(".gem").on("click", function(){
var crystalValue = ($(this).attr("value"));

//if statement for if the value is "clicked" on
if(crystalValue == "gem1"){
    userScore += gemValue1;
}
else if(crystalValue == "gem2"){
    userScore += gemValue2;
}
else if(crystalValue == "gem3"){
    userScore += gemValue3;
}
else if (crystalValue == "gem4"){
    userScore += gemValue4;
}

//writes the score recorded from what was clicked
$("#userScore").html(userScore);

//checks to see if the function has met requirements
winOrLose();
});



});



