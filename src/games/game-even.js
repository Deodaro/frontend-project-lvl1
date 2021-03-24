import engine from '../index.js';

const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no".';

const playRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const isNumberEven = number % 2 === 0;
  const question = `Question: ${number}`;
  let correctAnswer = 'yes';
  if (!isNumberEven) {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const playGame = () => engine(playRound, gameDesc);

export default playGame;
