import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const genGameData = () => {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum.toString();

  return cons(question, correctAnswer);
};
export default () => gameBuild(genGameData, description);
