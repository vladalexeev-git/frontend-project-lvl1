import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const progNum = 6;
const description = 'What number is missing in the progression?';

const progression = () => {
  const hiddenElemPos = getRandomNum(0, (progNum - 1));
  let startElem = getRandomNum(1, 100);
  const increaseCount = getRandomNum(2, 9);
  const prog = [startElem];

  for (let i = 0; i < progNum; i += 1) {
    startElem += increaseCount;
    prog.push(startElem);
  }
  const correctAnswer = prog[hiddenElemPos];
  prog[hiddenElemPos] = '..';

  const question = prog.join(' ');

  return cons(question, correctAnswer.toString());
};

export default () => gameBuild(progression, description);
