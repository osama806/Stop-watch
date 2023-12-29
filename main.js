let minute = document.getElementById("min");
let second = document.getElementById("sec");
let secondPart = document.getElementById("secParts");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let cycleBtn = document.querySelector(".lap");
let Laps = document.getElementById("laps");

let m = 0,
  s = 0,
  sp = 0,
  paused = false,
  Interval;

startBtn.addEventListener("click", start);
function start() {
  startBtn.classList.add("disabled");
  Interval = setInterval(function () {
    secondPart.innerText = sp += 1;
    if (sp == 99) {
      second.innerText = s += 1;
      sp = 0;
      if (s == 60) {
        minute.innerText = m += 1;
        second.innerText = "00";
        s = 0;
        if (m < 10) {
          minute.innerText = "0" + m;
        }
      } else if (s < 10) {
        second.innerText = "0" + s;
      }
    } else if (sp < 10) {
      secondPart.innerText = "0" + sp;
    }
  }, 10);
}
stopBtn.addEventListener("click", pause);
function pause() {
  if (!paused) {
    clearInterval(Interval);
    startBtn.classList.remove("disabled");
  }
}
resetBtn.addEventListener("click", reset);
function reset() {
  location.reload();
}
let i = 1;
cycleBtn.addEventListener("click", lapTimer);
function lapTimer() {
  Laps.innerHTML += "<p class='alert alert-light my-0 mx-auto' role='alert'>" + "Lap" + i + "  " + m + ":" + s + ":" + sp + "<p>";
  i++;
}
