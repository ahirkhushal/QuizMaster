export class View {
  _data;
  _btnSubmit = document.querySelector("#submit-btn");
  _btnOption;

  render(data) {
    this._data = data;
    // let i = 0;
    // while (i < this._data.length) {
    //   i++;
    //   console.log(i);
    // }
    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._btnOption = document.querySelector(".options");
  }
}
