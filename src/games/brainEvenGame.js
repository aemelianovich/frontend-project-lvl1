import utils from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const question = utils.getRandomInt(0, 100);
  const correctAnswer = (utils.isEven(question)) ? 'yes' : 'no';

  return { question, correctAnswer };
};

// Add game functions into associated array
const gameFunctionsAndAttrs = { gameRules, getGameQuestionAndAnswer };

export default gameFunctionsAndAttrs;
