import engine from '../index.js';

const gameDesc = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const playRound = () => {
  const divisor = Math.floor(Math.random() * 24) + 2;
  const num1 = divisor * (Math.floor(Math.random() * 10) + 1);
  let num2 = divisor * (Math.floor(Math.random() * 10) + 1);
  if (num1 === num2) {
    num2 /= divisor;
  }
  const correctAnswer = String(getGCD(num1, num2));
  const question = `Question: ${num1} ${num2}`;

  return [question, correctAnswer];
};

const playGame = () => engine(playRound, gameDesc);

export default playGame;
