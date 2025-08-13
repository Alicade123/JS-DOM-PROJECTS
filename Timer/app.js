const text = document.getElementById("text");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
let time = 0;
text.textContent = `${time}s`;
let isPause = false;
let ourInterval = null;
//Button Validations
function validation() {
  if (time === 0) {
    [decrement, start, reset].forEach((btn) => {
      btn.setAttribute("disabled", true);
    });
  } else if (time > 0) {
    [decrement, start, reset].forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  }
}
validation();
//Increment
increment.addEventListener("click", () => {
  time += 1;
  validation();
  text.textContent = `${time}s`;
});

//Decrement
decrement.addEventListener("click", () => {
  if (time > 0) {
    time -= 1;
    validation();
    text.textContent = `${time}s`;
  }
});

//Reset
reset.addEventListener("click", () => {
  time = 0;
  validation();
  text.textContent = `${time}s`;
});

//Start / Stop
start.addEventListener("click", function () {
  if (start.textContent === "Start") {
    start.textContent = "Stop";
    [decrement, increment, reset].forEach((btn) =>
      btn.setAttribute("disabled", true)
    );
    isPause = false;

    ourInterval = setInterval(() => {
      if (time > 0 && !isPause) {
        time--;
        text.textContent = `${time}s`;
      } else if (time === 0) {
        clearInterval(ourInterval);
        increment.removeAttribute("disabled");
        start.textContent = "Start";
        validation();
      }
    }, 1000);
  } else {
    start.textContent = "Start";
    isPause = true;
    clearInterval(ourInterval);
    [decrement, increment, reset].forEach((btn) =>
      btn.removeAttribute("disabled")
    );
  }
});
