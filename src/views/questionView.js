class questionView {
  _data;
  _parentEl = document.querySelector(".question");
  _btnSubmit = document.querySelector("#submit-btn");
  _btnOption;
  //   _submit = document.querySelector("#");
  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._btnOption = document.querySelector(".options");
  }

  _generateMarkup() {
    return `<p class="questions"><span>${this._data.length}) </span> ${this._data[0].question}</p>
    <div class="options">
      <button class="option-button" id="option-1">
        <span>A)</span> ${this._data[0].options[0]}
      </button>
      <button class="option-button" id="option-2">
        <span>B)</span> ${this._data[0].options[1]}
      </button>
      <button class="option-button" id="option-3">
        <span>C)</span> ${this._data[0].options[2]}
      </button>
      <button class="option-button" id="option-4">
        <span>D)</span>  ${this._data[0].options[3]}
      </button>
    </div>`;
  }

  addselectButtonhandler() {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".option-button");
      if (!btn) return;
      // console.log();

      Array.from(this._btnOption.children).forEach((element) => {
        if (element.classList.value === "bgcolor") {
          element.classList.remove("bgcolor");
          element.classList.add("option-button");
        }
      });

      btn.classList.add("bgcolor");
      btn.classList.remove("option-button");

      this._btnSubmit.disabled = false;
      this.addSubmitHandler(btn);
    });
  }
  addSubmitHandler(btn) {
    this._btnSubmit.addEventListener("click", () => {
      const textContent = btn.textContent.trim();
      const answer = textContent.slice(textContent.indexOf(" ") + 1);
      // console.log(this._data[0].answer);

      if (this._data[0].answer === answer) {
        btn.style.backgroundColor = "blue";
        btn.style.color = "white";
      }

      if (this._data[0].answer !== answer) {
        Array.from(this._btnOption.children).forEach((el) => {
          const textContent = el.textContent.trim();
          const answer1 = textContent.slice(textContent.indexOf(" ") + 1);

          if (answer1 === this._data[0].answer) {
            el.style.backgroundColor = "blue";
            el.style.color = "white";
          }
          if (this._data[0].answer !== answer1) {
            el.style.backgroundColor = "red";
            el.style.color = "white";
            el.classList.add("wireframe");
            setTimeout(() => {
              el.classList.remove("wireframe");
            }, 500);
          }
        });
      }
    });
  }
}

export default new questionView();
// this._btnSubmit.disabled = false;
