import { View } from "./View.js";

class questionNoView extends View {
  _parentEl = document.querySelector(".ProgressContainer");

  _generateMarkup() {
    return `<p id="progress">
  Question <span id="current-question">${this._data.questionNo}</span> of
  <span id="total-questions">${this._questions.length}</span>
</p>`;
  }
}

export default new questionNoView();
