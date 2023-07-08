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

  // update(data, questions) {
  //   this._data = data;
  //   const newMarkup = this._generateMarkup();

  //   const newDOM = document.createRange().createContextualFragment(newMarkup);
  //   console.log(newDOM);
  //   const newElements = Array.from(newDOM.querySelectorAll("*"));
  //   console.log(newElements);

  //   const curElement = Array.from(this._parentEl.querySelectorAll("*"));
  //   console.log(Array.from(this._parentEl));
  //   // newElements.forEach((newEl, i) => {
  //   //   const curEl = curElement[i];

  //   //   if (
  //   //     !newEl.isEqualNode(curEl) &&
  //   //     newEl.firstChild?.nodeValue.trim() !== ""
  //   //   ) {
  //   //     curEl.textContent = newEl.textContent;
  //   //   }

  //   //   if (!newEl.isEqualNode(curEl)) {
  //   //     Array.from(newEl.attributes).forEach((attr) =>
  //   //       curEl.setAttribute(attr.name, attr.value)
  //   //     );
  //   //   }
  //   // });
  // }
}
