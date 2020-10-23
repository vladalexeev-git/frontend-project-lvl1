import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const description = 'What is the result of the expression?';

const getCalc = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    default:
      result = num1 * num2;
  }

  return result;
};

const genGameData = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operators = ['-', '+', '*'];
  const indexOfOperator = getRandomNum(0, 2);
  const question = `${num1} ${operators[indexOfOperator]} ${num2}`;
  const correctAnswer = getCalc(num1, num2, operators[indexOfOperator]);

  return cons(question, correctAnswer.toString());
};

export default () => gameBuild(genGameData, description);
