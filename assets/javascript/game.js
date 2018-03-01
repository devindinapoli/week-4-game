$(document).ready(function() {
    
var gemValue1;
var gemValue2;
var gemValue3;
var gemValue4;

var wins = 0;
var losses = 0;
var randomNumber;
var userScore;

function startGame(){

randomNumber = 19 + Math.floor(Math.random() * 102);
gemValue1 = 1 + Math.floor(Math.random() * 12);
gemValue2 = 1 + Math.floor(Math.random() * 12);
gemValue3 = 1 + Math.floor(Math.random() * 12);
gemValue4 = 1 + Math.floor(Math.random() * 12);

userScore = 0;

$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#userScore").html(userScore);
$("#randomNumber").html(randomNumber);
};

function winOrLose(){
    
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

startGame();

$(".gem").on("click", function(){
var crystalValue = ($(this).attr("value"));

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

$("#userScore").html(userScore);

winOrLose();
});

});



