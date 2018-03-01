$(document).ready(function() {
    
// Gem value variables
var gemValue1;
var gemValue2;
var gemValue3;
var gemValue4;

var wins = 0;
var losses = 0;
var randomNumber;
var userScore;

//function that will set the game 
function startGame(){

//Generate random number for user to reach (between 19 & 120)
randomNumber = 19 + Math.floor(Math.random() * 102);

//Generate numbers for each gem (between 1 & 12)
gemValue1 = 1 + Math.floor(Math.random() * 12);
gemValue2 = 1 + Math.floor(Math.random() * 12);
gemValue3 = 1 + Math.floor(Math.random() * 12);
gemValue4 = 1 + Math.floor(Math.random() * 12);

//set initial score to 0
userScore = 0;

//set HTML
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#userScore").html(userScore);
$("#randomNumber").html(randomNumber);

};
//creates the function to check if the user has won or lost
function winOrLose(){

    //added audio for losing and winning (SHOULD work)
    var audioWin = document.createElement('audio');
    var audioLose = document.createElement('audio');
    audioWin.setAttribute('src', 'assets/victory.mp3');
    audioLose.setAttribute('src', 'assets/loser.mp3');
        
    if(userScore > randomNumber){
        losses++;
        audioLose.play();
        startGame();
    }
    
    if(userScore == randomNumber){
        wins++;
        audioWin.play(); 
        startGame();
    }
   
}

//start the game
startGame();

//setup on-click function for gems
$(".gem").on("click", function(){

//makes crystalValue equal to the attribute "value" from images with the class "gem"
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



