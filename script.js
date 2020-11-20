const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerCalculation(){

    const choices=["rock","paper","scissors"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];

}

function win(userChoice, computerChoice){
   // result_div.innerHTML= userChoice+ "  beats  " + computerChoice + "  You win!  ";
    result_div.innerHTML= `🎅${userChoice} beats ${computerChoice } 🧛‍♀️ You win!  `;



}
function lose(userChoice, computerChoice){
   // result_div.innerHTML= userChoice + "  loses to  " + computerChoice + "  You lost!  ";
   result_div.innerHTML= `🎅${userChoice} loses to ${computerChoice } 🧛‍♀️ You lost!  `;


}
function draw(userChoice, computerChoice){
    //result_div.innerHTML= userChoice + "  equals " + computerChoice + "  It's a draw!  ";
    result_div.innerHTML= `🎅${userChoice} equals ${computerChoice } 🧛‍♀️ It's a draw!  `;



}

function game(userChoice){
 const computerChoice=getComputerCalculation();
 /*console.log(userChoice);
 console.log(computerChoice);*/// you can see the affect of 2 choices.
    switch (userChoice + computerChoice) {
     case "rockscissors":
     case "paperrock":
     case "scissorspaper":
        win(userChoice,computerChoice);
      //console.log("User Wins!");
      break;
     case "rockpaper":
     case "scissorsrock":
     case "paperscissors":
        lose(userChoice,computerChoice);
        //console.log("Computer Wins!");
        break;
     case "rockrock":
     case "paperpaper":
     case "scissorsscissors":
        draw(userChoice,computerChoice);
        
        //console.log("It's a draw.");
        break;
    }

}


function main(){
  rock_div.addEventListener("click",function() {

    game ("rock");

})
  paper_div.addEventListener("click",function() {

    game ("paper");
    
})
  scissors_div.addEventListener("click",function() {

    game ("scissors");

})

}
main();

//Here is a button to refresh the page to play again.
function refreshPage(){
    window.location.reload();

}




/*(function (){

document.getElementById("rock").addEventListener("click", function  () {
    const userChoice = "rock"
}


document.getElementById("paper").addEventListener("click", function  () {
    const userChoice = "paper"


document.getElementById("scissors").addEventListener("click", function  () {

    const userChoice ="scissors"
    var computerChoice = Math.floor(Math.random()+1);


if (computerChoice <= 1) {
    computerChoice = "rock";
} else if(computerChoice <= 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}


var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);
});


})();*/