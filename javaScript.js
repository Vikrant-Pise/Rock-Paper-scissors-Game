let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranId = Math.floor(Math.random() * 3); // 1)Math.floor remove decimal value.2)Random number.
  return options[ranId];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Try Again";
  msg.style.backgroundColor = "#081b31";
  
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   
  } else {
    comScore++;
    compScorePara.innerText = comScore;
    msg.innerText = `You Loos. ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "Red";
   
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  //Logic

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "scissors" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
