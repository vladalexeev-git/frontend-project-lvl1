import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import isEven from '../isEven.js';
import gameBuild from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  let isPrime = true;
  const num = getRandomNum(20, 24);
  const question = `${num}`;

  if (num === 2) isPrime = true;
  else if (isEven(num) || num < 2) isPrime = false;
  else {
    for (let i = (num - 1); i > 2; i -= 1) {
      if (num % i === 0) isPrime = false;
    }
  }

  const correctAnswer = (isPrime) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameBuild(gamePrime, description);
