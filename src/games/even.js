import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const isEven = (num) => (num % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = `${randomNum}`;

  return cons(question, correctAnswer);
};
export default () => gameBuild(gameEven, description);
