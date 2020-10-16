import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import isEven from '../isEven.js';
import gameBuild from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  let isPrime = true;
  let correctAnswer;
  const n = getRandomNum(1, 100);
  const question = `${n}`;

  if (n === 2) {
    correctAnswer = (isPrime) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  }
  if (isEven(n)) {
    isPrime = false;
    correctAnswer = (isPrime) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  }
  for (let i = (n - 1); i > 1; i -= 1) {
    if (n % i === 0) isPrime = false;
  }

  correctAnswer = (isPrime) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameBuild(gamePrime, description);
