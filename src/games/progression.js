import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import gameBuild from '../index.js';

const lengthOfProg = 6;
const description = 'What number is missing in the progression?';

const getProgression = (startElem, increaseCount) => {
  let progression = [startElem];

  for (let i = 0; i < lengthOfProg; i += 1) {
    progression = [...progression, progression[i] += increaseCount];
  }

  return progression;
};

const genGameData = () => {
  const indexOfElem = getRandomNum(0, (lengthOfProg - 1));
  const startElem = getRandomNum(1, 100);
  const increaseCount = getRandomNum(2, 9);
  const progression = getProgression(startElem, increaseCount);

  const correctAnswer = progression[indexOfElem];
  progression[indexOfElem] = '..';

  const question = progression.join(' ');

  return cons(question, correctAnswer.toString());
};

export default () => gameBuild(genGameData, description);
