import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';
import isEven from '../isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = `${randomNum}`;

  return cons(question, correctAnswer);
};
export default () => gameBuild(gameEven, description);
