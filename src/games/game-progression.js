import engine from '../index.js';

const gameDesc = 'What number is missing in the progression?';

const playRound = () => {
  let number = Math.floor(Math.random() * 30) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const randomIndex = Math.floor(Math.random() * 10);
  const numbers = [];
  let currentAnswer = 0;

  for (let i = 0; i < 10; i += 1) {
    if (i === randomIndex) {
      numbers.push('..');
      currentAnswer = String(number);
    } else {
      numbers.push(number);
    }
    number += step;
  }

  const question = `Question: ${numbers.join(' ')}`;

  return [question, currentAnswer];
};

const playGame = () => engine(playRound, gameDesc);

export default playGame;
