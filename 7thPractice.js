/*
Title: 7th Practice; Making a Magic 8 Ball, through random, switches. 
*/

var userName = "Amy";

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = "How are you?";

console.log(`${userName}, ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 7);

let eightball = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`Magic Eight Ball says, ${eightBall}.`);

