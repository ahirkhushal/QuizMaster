export class View {
  _data;
  _btnSubmit = document.querySelector("#submit-btn");
  _btnOption;
  _questions;
  render(data, questions) {
    this._questions = questions;
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._btnOption = document.querySelector(".options");
  }
}
