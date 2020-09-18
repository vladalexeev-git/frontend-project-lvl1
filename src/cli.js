import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Helllo ${name}!`);
};
