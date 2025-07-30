const result = document.querySelector("#result");
const computerChoiceVal = document.getElementById("computer-chose-val");
const choiceBtn = document.querySelectorAll(".choice-btn");
const humanScoreVal = document.getElementById("human-score-val");
const computerScoreVal = document.getElementById("computer-score-val");
const buttons = document.getElementById("buttons");
const body = document.body;
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;


choiceBtn.forEach(button => button.addEventListener("click", () => {
  humanChoice = button.textContent;
  getComputerChoice();
  computerChoiceVal.textContent = computerChoice;
  result.textContent = playRound();
  humanScoreVal.textContent = humanScore;
  computerScoreVal.textContent = computerScore;
  playGame();
}));


function getComputerChoice(){
  const CCNum = Math.floor(Math.random() * 3) + 1;
  switch(CCNum){
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
}


function playRound(){
  if (humanChoice == computerChoice) {
    return "It's a tie!";
  } 
    else if(computerChoice == "rock"){
      if(humanChoice == "paper"){
        humanScore++;
        return "Victory!";
      }
        else if(humanChoice == "scissors"){
          computerScore++;
          return "Defeat!";
        }
  } 
    else if(computerChoice == "paper"){
      if(humanChoice == "scissors"){
        humanScore++;
        return "Victory!";
      }
        else if(humanChoice == "rock"){
          computerScore++;
          return "Defeat!";
        }
  }
    else if(computerChoice == "scissors"){
      if(humanChoice == "rock"){
        humanScore++;
        return "Victory!";
      }
        else if(humanChoice == "paper"){
          computerScore++;
          return "Defeat!";
        }
  }
}

function playGame(){
   if (humanScore === 5 || computerScore === 5){
    const victor = humanScore == 5 ? "Game Over. ULTIMATE VICTORY!" : "Game Over. ULTIMATE DEFEAT!"
    result.textContent = victor;
    buttons.style.display = "none";

    const replay = document.createElement("button");
    replay.textContent = "Play again";
    body.appendChild(replay);
    replay.addEventListener("click", () => {
      location.reload();
    })
   }
}