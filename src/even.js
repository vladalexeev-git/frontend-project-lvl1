import readlineSync from 'readline-sync';
import randomNum from './random.js';
import name from './cli.js';

const isEven = (num) => (num % 2 === 0);

export default () => {
  const userName = name();
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i;
  for (i = 0; i < 3; i += 1) {
    const question = randomNum(1, 100);
    console.log(`Question: ${question}`);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      i = 7;
    }
  }
  if (i < 7) return console.log(`Congratulations, ${userName}!`);
  return console.log(`Let's try again, ${userName}!`);
};
