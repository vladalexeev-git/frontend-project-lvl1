import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const description = 'What is the result of the expression?';

const gameCalc = () => {
  let correctAnswer;
  let operator;
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const num3 = getRandomNum(1, 3);
  switch (num3) {
    case 1:
      correctAnswer = num1 - num2;
      operator = '-';
      break;
    case 2:
      correctAnswer = num1 + num2;
      operator = '+';
      break;
    default:
      correctAnswer = num1 * num2;
      operator = '*';
  }
  const question = `${num1} ${operator} ${num2}`;
  return cons(question, correctAnswer.toString());
};
export default () => gameBuild(gameCalc, description);
