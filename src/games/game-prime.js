import engine from '../index.js';

const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const playRound = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;

  return [question, correctAnswer];
};

const playGame = () => engine(playRound, gameDesc);

export default playGame;
