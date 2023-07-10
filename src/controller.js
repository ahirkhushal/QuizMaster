import * as quizobj from "./questions.js";
import questionView from "./views/questionView.js";
import questionNoView from "./views/questionNoView.js";
import timerView from "./views/timerView.js";
import scoreView from "./views/scoreView.js";

const { questions } = quizobj.quizCompetitionstate;
let questionNext;

const controlQuestions = function (question) {
  questionNext = question;
  questionView.render(question, questions);
  questionNoView.render(question, questions);
  timerView.render(question, questions);
};

const controlScore = function (question) {
  scoreView.render(question, questions);
};

const init = function () {
  quizobj.addnextQueHandler(questions, controlQuestions);
  questionView.addselectButtonhandler(controlQuestions);
  controlScore(questionNext);
};

init();
