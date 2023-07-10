import { View } from "./View.js";

class questionView extends View {
  _parentEl = document.querySelector(".question");
  _btnclickCount = 0;
  _correctAnswersLogged = new Set();
  _WrongAnswersLogged = new Set();

  _generateMarkup() {
    return `<p class="questions"><span>(${this._data.questionNo}) </span> ${this._data.question}</p>
    <div class="options">
      <button class="option-button" id="option-1" style="font-weight: bold;">
        <span>A)</span> ${this._data.options[0]}
      </button>
      <button class="option-button" id="option-2" style="font-weight: bold;">
        <span>B)</span> ${this._data.options[1]}
      </button>
      <button class="option-button" id="option-3" style="font-weight: bold;" >
        <span>C)</span> ${this._data.options[2]}
      </button>
      <button class="option-button" id="option-4" style="font-weight: bold;">
        <span>D)</span>  ${this._data.options[3]}
      </button>
    </div>`;
  }

  addselectButtonhandler() {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".option-button");
      if (!btn) return;

      const findedEl = Array.from(this._btnOption.children).find((element) => {
        return element.classList.value === "bgcolor";
      });

      if (findedEl) {
        findedEl.classList.remove("bgcolor");
        findedEl.classList.add("option-button");
      }

      btn.classList.add("bgcolor");
      btn.classList.remove("option-button");

      this._btnSubmit.disabled = false;
      this.addSubmitHandler(btn);
    });
  }
  addSubmitHandler(btn) {
    this._btnSubmit.addEventListener("click", () => {
      this._btnSubmit.disabled = true;

      const textContent = btn.textContent.trim();
      const answer = textContent.slice(textContent.indexOf(" ") + 1);

      if (this._data.answer === answer.trim()) {
        this._btnclickCount++;
      }

      Array.from(this._btnOption.children).forEach((el) => {
        if (this._data.answer === answer.trim()) {
          btn.style.backgroundColor = "blue";
          btn.style.color = "white";
          el.disabled = true;
        }

        if (
          this._data.answer !== answer.trim() &&
          btn.classList.contains("bgcolor")
        ) {
          btn.style.backgroundColor = "red";
          btn.style.color = "white";
          btn.classList.add("wireframe");
          setTimeout(() => {
            btn.classList.remove("wireframe");
          }, 500);

          const textContent = el.textContent.trim();
          const answerEl = textContent
            .slice(textContent.indexOf(" ") + 1)
            .trim();

          if (answerEl === this._data.answer) {
            el.style.backgroundColor = "blue";
            el.style.color = "white";
          }

          el.disabled = true;
        }
      });

      this.updateScore(btn);
    });
  }

  updateScore(btn) {
    if (btn.textContent.trim().slice(2).trim() === this._data.answer) {
      Array.from(this._btnOption.children).forEach((el) => {
        if (!this._correctAnswersLogged.has(this._data.questionNo)) {
          document.querySelector(".score").textContent++;
          this._correctAnswersLogged.add(this._data.questionNo);
        }

        if (
          el.classList.contains("bgcolor") &&
          el.textContent.trim().slice(2).trim() !== this._data.answer
        ) {
          if (!this._WrongAnswersLogged.has(this._data.questionNo)) {
            document.querySelector(".score").textContent--;
            this._WrongAnswersLogged.add(this._data.questionNo);
          }
        }
      });
    } else {
      document.querySelector(".score").textContent;
    }
  }
}

export default new questionView();
