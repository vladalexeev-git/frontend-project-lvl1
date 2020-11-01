import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const lengthOfOperators = operators.length;

const getCalc = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return `There is no result of the expression for the received operator: '${operator}' `;
  }
};

const genGameData = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const indexOfOperator = getRandomNum(0, (lengthOfOperators - 1));

  const question = `${num1} ${operators[indexOfOperator]} ${num2}`;
  const correctAnswer = getCalc(num1, num2, operators[indexOfOperator]);

  return cons(question, correctAnswer.toString());
};

export default () => runGame(genGameData, description);
