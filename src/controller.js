import { quizCompetitionstate } from "./questions.js";
import questionView from "./views/questionView.js";
// import optionView from "./views/optionView.js";

// console.log(quizCompetitionstate);

const controlQuestions = function () {
  const { questions } = quizCompetitionstate;
  questionView.render(questions);
};

controlQuestions();

const init = function () {};
questionView.addselectButtonhandler();
init();
