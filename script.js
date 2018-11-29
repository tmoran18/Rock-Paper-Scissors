 
  let userScore = 0;
  let computerScore = 0;
  let userScore_span = document.getElementById("user-score");
  let computerScore_span = document.getElementById("computer-score");
  let resetText = document.querySelector(".reset");
  const scoreBoard_div = document.querySelector(".scoreboard");
  const result_p = document.querySelector(".result > p");
  const rock_div = document.getElementById("r");
  const scissors_div = document.getElementById("s");
  const paper_div = document.getElementById("p");
  const message_div = document.getElementById("message");

  /* Computers choice of R S P help in Array
  RandomNumber chooses a number between 0 - 2  returns a value in the array depending on what randomNumber chooses 
  */
  function getComputerChoice(){
    const choices = ['r','s','p'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
  }

  // ScoreReset function resets both scores and set the win/lose information back to default
function scoreReset(){
    message_div.addEventListener('click', function(){
      userScore=0;
      computerScore=0;
      userScore_span.innerHTML = 0;
      computerScore_span.innerHTML = 0;
      resetText.innerHTML = "Lets Play Rock Scissors Paper";
    })
  }

  scoreReset();//Runs the scoreReset Function

  // This function converts r,s,p to Rock / Scissor / Paper which is then utilised in the win/lose/draw functions
  function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    return "Paper";
  }

  // WIN FUNCTION. Adds 1 to userScore, displays score in userscore span tag, displays score in computerScore span tag, displays the You Won text.
  function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + "<br />" + "<strong />" + " YOU WIN!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow') }, 300);
  }

// LOSE FUNCTION. Adds 1 to computerScore, displays score in userscore span tag, displays score in computerScore span tag, displays the You Lost text.
  function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + "<br />" + "<strong />" +  " YOU LOST!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow') }, 300);
  }

  //This is the Draw function. Does not add any score to either player, displays the It's A Draw text.
  function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + "   =   " + convertToWord(computerChoice) + "<br />"+ "<strong />" + " IT'S A DRAW!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow') }, 300);
  }

//Game function, gets the computers choice from getComputerChoice function, compares it to users selection, then parses that into the Win function.
  function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
  }
  

  // The main function parses r s or p into the game parameter when clicked
   function main() {
     rock_div.addEventListener('click', function(){
      game("r");
     })

     scissors_div.addEventListener('click', function(){
      game("s");
     })

     paper_div.addEventListener('click', function(){
      game("p");
     })
    }

    main();//Runs the main function

    