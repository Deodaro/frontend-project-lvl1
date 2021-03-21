#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import { greeting, userAnswer, errorMessage } from '../src/index.js';

const game = () => {
  const operations = ['+', '-', '*'];

  // greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  //

  //successMessage
  const successMessage = () => {
    console.log(`Congratulations, ${name}!`);
  };
  //

  let count = 3;
  while (count > 0) {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer = null;

    const errorMessage = () => {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
    };

    switch (randomOperation) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        correctAnswer = null;
    }

    // console.log(`Correct answer = ${correctAnswer}`);

    console.log('What is the result of the expression?');
    console.log(`Question: ${number1} ${randomOperation} ${number2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count -= 1;
    } else {
      return errorMessage();
      // console.log('ERROR MESSAGE');
    }
  }

  return successMessage();
};

// playGame(game);
game();

// если сделать так
// playGame(brainCalc());
// то получится исполняемый файл для запуска только этой игры
// а где тогда прописывать логику для brain-calc? В этом файле? В index? В отдельном файле в src?
