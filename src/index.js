import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const attemptsNum = 3;

export default (gameFunc, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  let i = 0;

  while (i < attemptsNum) {
    const gameData = gameFunc();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      i = attemptsNum + 1;
    }
  }

  const result = (i === attemptsNum) ? `Congratulations, ${userName}!` : `Lets try again, ${userName}!`;
  return console.log(result);
};
