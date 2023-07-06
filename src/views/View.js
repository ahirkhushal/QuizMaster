export class View {
  _data;
  _btnSubmit = document.querySelector("#submit-btn");
  _btnOption;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._btnOption = document.querySelector(".options");
  }
}
