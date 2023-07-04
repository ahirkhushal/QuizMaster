import { quizCompetitionstate } from "./questions.js";
import questionView from "./views/questionView.js";

const controlQuestions = function () {
  const { questions } = quizCompetitionstate;
  console.log(questions);
  questionView.render(questions);
};

const init = function () {
  questionView.addselectButtonhandler(controlQuestions);
};

init();
