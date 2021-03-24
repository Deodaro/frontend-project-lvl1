import engine from '../index.js';

const gameDesc = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (num1, num2, randomOperation) => {
  switch (randomOperation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const playRound = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const correctAnswer = String(calculate(num1, num2, randomOperation));
  const question = `${num1} ${randomOperation} ${num2}`;

  return [question, correctAnswer];
};

const playGame = () => engine(playRound, gameDesc);

export default playGame;
