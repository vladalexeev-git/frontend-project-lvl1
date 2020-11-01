import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }

  return a + b;
};

const genGameData = () => {
  const num1 = getRandomNum(2, 100);
  const num2 = getRandomNum(2, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);

  return cons(question, correctAnswer.toString());
};

export default () => runGame(genGameData, description);
