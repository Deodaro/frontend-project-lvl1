import readlineSync from 'readline-sync';

const engine = (playRound, gameDesc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDesc);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = playRound();
    console.log(`Question: ${question}`);
    const userAnswer = String(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default engine;
