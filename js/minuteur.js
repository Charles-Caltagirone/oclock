let departMinutes = 0;
let temps = departMinutes * 60;
let selectTimer = document.getElementById("selectTimer");
let up = document.getElementById("up");
let down = document.getElementById("down");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let newTimer = document.getElementById("newTimer");
let interval;
const timerElement = document.getElementById("timer");

function minuteur() {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = minutes + ":" + secondes;
  temps = temps <= 0 ? 0 : temps - 1;
}
up.addEventListener("click", function () {
  departMinutes++;
  temps = departMinutes * 60 - 1;
  newTimer.innerHTML = departMinutes + ":00";
});
down.addEventListener("click", function () {
  departMinutes--;
  temps = departMinutes * 60 - 1;
  newTimer.innerHTML = departMinutes;
});

start.addEventListener("click", function () {
  if (selectTimer.value != "") {
    temps = selectTimer.value * 60 - 1;
  }
  clearInterval(interval);
  interval = setInterval(minuteur, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  window.location.reload();
});
