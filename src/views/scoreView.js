import { View } from "./View.js";

class scoreView extends View {
  _parentEl = document.querySelector(".scoretextContainer");

  _generateMarkup() {
    return `<p class="scoretext">SCORE : <span class="score">${0}</span></p>`;
  }
}

export default new scoreView();
