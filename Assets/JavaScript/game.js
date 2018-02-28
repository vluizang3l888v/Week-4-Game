// JQ loads here //
$(document).ready(function() {


var wins = 0;
var losses = 0;
//Will make a number between 19-120
var randomNumber = ((Math.floor(Math.random() *101)) +19);        
var playerTotal = 0;
// Generate random number between 1-12 for 4 crystals.
var blueScore = ((Math.floor(Math.random() *12) +1));
var greenScore = ((Math.floor(Math.random() *12) +1));
var redScore = ((Math.floor(Math.random() *12) +1));
var yellowScore = ((Math.floor(Math.random() *12) +1));
    


//Assigns values to random number & crystals. 
document.getElementById("random-number").innerHTML = randomNumber;
document.getElementById("img1").value = blueScore;
document.getElementById("img2").value = greenScore;
document.getElementById("img3").value = redScore;
document.getElementById("img4").value = yellowScore;
//.value is like go to this specific place of the variable. 


// when my crystal is clicked, the crystal random value will be added to player total. 
//
function endGame(){
    if(playerTotal === randomNumber){
        wins++; //GO UP 
        randomNumber = ((Math.floor(Math.random() *101)) +19); //MATH
        playerTotal = 0;
        document.getElementById("wins").innerHTML = ("Wins: " + wins);	//ADD THEM.					
        document.getElementById("random-number").innerHTML = randomNumber;			
        document.getElementById("total").innerHTML = playerTotal;
    }
    else if(playerTotal > randomNumber){
        losses++; // GO DOWN 
        randomNumber = ((Math.floor(Math.random() *101)) +19); //MATH
        playerTotal = 0;
        document.getElementById("losses").innerHTML = ("Losses: " + losses); // ADD THEM. 						
        document.getElementById("random-number").innerHTML = randomNumber;			
        document.getElementById("total").innerHTML = playerTotal;
    }
}
//


//JQ COMMANDS
$("body").on("click", "#img1", function(){
    playerTotal = (playerTotal + blueScore);
    document.getElementById("total").innerHTML = playerTotal;
    console.log(playerTotal);
    endGame(); //CALL THE FUNCTION 
});

$("body").on("click", "#img2", function(){
    playerTotal = (playerTotal + greenScore);
    document.getElementById("total").innerHTML = playerTotal;
    console.log(playerTotal);
    endGame(); //CALL THE FUNCTION 
});

$("body").on("click", "#img3", function(){
    playerTotal = (playerTotal + redScore);
    document.getElementById("total").innerHTML = playerTotal;
    console.log(playerTotal);
    endGame(); //CALL THE FUNCTION 
});

$("body").on("click", "#img4", function(){
    playerTotal = (playerTotal + blueScore);
    document.getElementById("total").innerHTML = playerTotal;
    console.log(playerTotal);
    endGame();  // CALL THE FUNCTION
});




// click functions below. 
$("#RedDiamond").click(function(){
    alert("VIRUS DOWNLOADED");
});

$("#BlueDiamond").click(function(){
    alert("WORM INSTALLED");
});

$("#YellowDiamond").click(function(){
    alert("YOUR IDENTITY HAS BEEN DELETED");
});

$("#GreenDiamond").click(function(){
    alert("you have been swatted!");
});
//begin win loss code here. 


}); //JQ ends here. 