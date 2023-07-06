import { View } from "./View.js";

class scoreView extends View {
  _parentEl = document.querySelector(".scoretextContainer");

  _generateMarkup() {
    return `<p class="scoretext">SCORE : <span class="score">${this._scoreMarkup()}</span></p>`;
  }

  _scoreMarkup() {
    let score = 0;
    const updateScore = function () {
      document.querySelector(".score").textContent = score;
      score++;
    };

    setTimeout(updateScore, 0);
    return score;
  }
}

export default new scoreView();
