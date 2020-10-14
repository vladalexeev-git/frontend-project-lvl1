import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  let num1 = getRandomNum(2, 100);
  let num2 = getRandomNum(2, 100);
  const question = `${num1} ${num2}`;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) num1 %= num2;
    else num2 %= num1;
  }
  const correctAnswer = num1 + num2;

  return cons(question, correctAnswer.toString());
};

export default () => gameBuild(gcd, description);
