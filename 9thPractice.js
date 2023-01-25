/*
Title: 9th Practice; Making functions, with if statements and switches and declarations. 
*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 
  userInput === 'paper' || 
  userInput === 'scissors') {
    return userInput;
  } else {
    return (`error`);
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';

  } else 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won lol';
    } else { 
      return 'You beat the computer lol';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won lol';
    } else { 
      return 'You beat the computer lol';
    }
  }

   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won lol';
    } else { 
      return 'You beat the computer lol';
    }
  }

};

const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();
