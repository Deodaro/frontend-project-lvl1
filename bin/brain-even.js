#!/usr/bin/env node
import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 3;

  const successMessage = () => {
    console.log(`Congratulations, ${name}!`);
  };

  while (count > 0) {
    const number = Math.floor(Math.random() * 100) + 1;
    const isNumberEven = number % 2 === 0;
    let correctAnswer = 'no';
    if (isNumberEven) {
      correctAnswer = 'yes';
    }
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const errorMessage = () => {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
    };

    if ((isNumberEven && userAnswer === 'yes') || (!isNumberEven && userAnswer === 'no')) {
      console.log('Correct!');
      count -= 1;
    } else {
      return errorMessage();
    }
  }

  return successMessage();
};

game();
