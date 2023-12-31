import { View } from "./View.js";

class timerView extends View {
  _parentEl = document.querySelector(".timerContainer");

  _generateMarkup() {
    return ` <p id="timer">Time Left: <span id="time-left">${this._TimerMarkup()}</span> seconds</p>`;
  }

  _TimerMarkup() {
    let timer = 15;
    let timeoutId;
    let bodyEl = document.body;

    const updateTimer = () => {
      let timerEl = document.querySelector("#timer");

      timerEl.style.fontWeight = "Bold";

      if (timer <= 10) {
        bodyEl.classList.add("timer-blink");
        timerEl.style.fontWeight = "Bold";
      }

      if (timer < 0) {
        bodyEl.classList.remove("timer-blink");
        Array.from(this._btnOption.children).forEach((el) => {
          el.disabled = true;
        });
        clearTimeout(timeoutId);
        return;
      }

      document.querySelector("#time-left").textContent = timer;
      timer--;
    };

    const checkButtonColor = () => {
      const blueButton = Array.from(this._btnOption.children).find((el) => {
        return el.style.backgroundColor === "blue";
      });

      if (blueButton) {
        clearTimeout(timeoutId);
        bodyEl.classList.remove("timer-blink");
      } else {
        updateTimer();
        timeoutId = setTimeout(checkButtonColor, 1000);
      }
    };

    const resetScore = function () {
      timer = 15;
      clearTimeout(timeoutId);
      bodyEl.classList.remove("timer-blink");

      updateTimer();
      timeoutId = setTimeout(checkButtonColor, 1000);
    };

    document.querySelector("#next-btn").addEventListener("click", resetScore);

    setTimeout(checkButtonColor, 0);
    return timer;
  }
}

export default new timerView();
