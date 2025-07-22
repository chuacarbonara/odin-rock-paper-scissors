
function getComputerChoice() {
  let CCNum = Math.floor(Math.random() * 3) + 1;
  if (CCNum == 1) {
    return "rock";
  }
  else if (CCNum == 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}


function getHumanChoice() {
  let HCNum = prompt("Rock, paper or scissors?");

  if (HCNum.toLowerCase() === "rock") {
    return "rock";
  } else if (HCNum.toLowerCase() === "paper") {
    return "paper";
  } else if (HCNum.toLowerCase() === "scissors") {
    return "scissors";
  }
};


function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
    return;
  }
  if (humanChoice == "rock") {
    switch (computerChoice) {
        case "paper":
            console.log("Defeat!");
            computerScore ++;
            break;
        default:
            console.log("Victory!");
            humanScore ++;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
        case "rock":
            console.log("Victory!");
            humanScore ++;
            break;
        default:
            console.log("Defeat!");
            computerScore ++;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
        case "rock":
            console.log("Defeat!");
            computerScore ++;
            break;
        default:
            console.log("Victory!");
            humanScore ++;
    }
  }
}

function playGame(){
    for (let i=0; i<5; i++){
        let computerChoice=getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
        console.log('Computer:',computerChoice,'You:',humanChoice,'\nComputer score:',computerScore,'Your score:',humanScore);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();