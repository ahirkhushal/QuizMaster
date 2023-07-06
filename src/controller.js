import { quizCompetitionstate } from "./questions.js";
import questionView from "./views/questionView.js";
import questionNoView from "./views/questionNoView.js";
import timerView from "./views/timerView.js";
import scoreView from "./views/scoreView.js";

const { questions } = quizCompetitionstate;
const controlQuestions = function () {
  console.log(questions);
  questionView.render(questions);
};

const controlQuestionNumber = function () {
  questionNoView.render(questions);
};

const controltimer = function () {
  timerView.render(questions);
};

const controlScore = function () {
  scoreView.render(questions);
};

const init = function () {
  questionView.addselectButtonhandler(controlQuestions);
  // scoreView.updater();
  controlQuestionNumber();
  controlScore();
  controltimer();
};

init();
