import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const genGameData = () => {
  const num = getRandomNum(2, 99);
  const question = num.toString();
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => runGame(genGameData, description);
