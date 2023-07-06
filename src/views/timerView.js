import { View } from "./View.js";

class timerView extends View {
  _parentEl = document.querySelector(".timerContainer");
  //   _time = document.querySelector("#time-left");

  _generateMarkup() {
    return ` <p id="timer">Time Left: <span id="time-left">${this._TimerMarkup()}</span> seconds</p>`;
  }

  _TimerMarkup() {
    let timer = 60;

    const updateTimer = function () {
      const timerEl = document.querySelector("#timer");
      timerEl.style.fontWeight = "Bold";
      if (timer <= 10) {
        timerEl.classList.add("timer-blink");
        timerEl.style.fontWeight = "Bold";

        if (timer < 0) {
          timerEl.classList.remove("timer-blink");

          return;
        }
      }
      document.querySelector("#time-left").textContent = timer;
      timer--;
      setTimeout(updateTimer, 1000);
    };

    setTimeout(updateTimer, 0);

    return timer;
  }
}

export default new timerView();
