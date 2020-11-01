import { cons } from '@hexlet/pairs';
import getRandomNum from '../random.js';
import runGame from '../index.js';

const lengthOfProg = 7;
const description = 'What number is missing in the progression?';

const makeProgression = (startElem, increaseCount) => {
  const progression = [startElem];

  for (let i = 0; i < lengthOfProg - 1; i += 1) {
    progression.push(progression[i] + increaseCount);
  }

  return progression;
};

const genGameData = () => {
  const indexOfElem = getRandomNum(0, (lengthOfProg - 1));
  const startElem = getRandomNum(1, 100);
  const increaseCount = getRandomNum(2, 9);
  const progression = makeProgression(startElem, increaseCount);

  const correctAnswer = progression[indexOfElem];
  progression[indexOfElem] = '..';

  const question = progression.join(' ');

  return cons(question, correctAnswer.toString());
};

export default () => runGame(genGameData, description);
