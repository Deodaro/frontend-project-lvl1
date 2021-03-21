import readlineSync from 'readline-sync';

// const greeting = () => {
//   console.log('Welcome to the Brain Games!');
//   const name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
// };

// export const playGame = (game) => {
  // console.log('Welcome to the Brain Games!');
  // const name = readlineSync.question('May I have your name? ');
  // console.log(`Hello, ${name}!`);

  // const successMessage = () => {
  //   console.log(`Congratulations, ${name}!`);
  // };

  // const errorMessage = () => {
  //   console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  //   console.log(`Let's try again, ${name}!`);
  // };
  // const number = Math.floor(Math.random() * 100) + 1;

  // let count = 3;
  // while (count > 0) {
  //   game();
  //   count -= 1;
  // }
// };

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const userAnswer = () => {
  readlineSync.question('Your answer: ');
};

export const errorMessage = () => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

// export default playGame;
