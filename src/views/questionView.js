class questionView {
  _data;
  _parentEl = document.querySelector(".question");
  _btnSUmbit = document.querySelector("#submit-btn");
  _btnoptions = document.querySelector(".options");
  //   _submit = document.querySelector("#");
  render(data) {
    this._data = data;
    console.log(this._data);
    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
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

  addselectButtonhandler(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".option-button");
      const textContent = btn.textContent.trim();
      const number = textContent.slice(textContent.indexOf(" ") + 1);
      if (this._data[0].answer === number) {
        btn.style.backgroundColor = "blue";
        btn.style.color = "white";
      }

      this.addhandler(handler);
    });
  }
  addhandler(handler) {
    this._btnSUmbit.addEventListener("click", () => {
      console.log("ok");
    });
  }
}

export default new questionView();
