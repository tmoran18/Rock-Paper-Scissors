
  const computerSelection = computerPlay();




//Computers Random Logic
function computerPlay(){
  const playRPS = ['Rock', 'Paper', 'Scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  return playRPS[randomNum];

}

//Play one round Computer vs Player
function playRound(playerSelection) {
  const computerSelection = computerPlay();
  switch (playerSelection + computerSelection) {
    case 'RockScissors':
    case 'ScissorsPaper':
    case 'PaperRock':
      alert('USER WINS');
      break;

    case 'RockPaper':
    case 'ScissorsRock':
    case 'PaperScissors':
  
      alert('USER LOSES');
      break;

    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorScissors':
      alert('TIE');
      break;
playRound();
}
}