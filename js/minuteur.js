let departMinutes = 0;
let temps = departMinutes * 60;
let selectTimer = document.getElementById("selectTimer");
let up = document.getElementById("up");
let down = document.getElementById("down");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let interval;
const timerElement = document.getElementById("timer");
timerElement.innerText = "00:00";

function minuteur() {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = minutes + ":" + secondes;
  temps = temps <= 0 ? 0 : temps - 1;

  if (temps == 0) {
    temps = 0;
    departMinutes = 0;
    alert("Temps à 0 !");
    clearInterval(interval);
  }
}
up.addEventListener("click", function () {
  departMinutes++;
  temps = departMinutes * 60;
  if (departMinutes >= 10) {
    timerElement.innerHTML = departMinutes + ":00";
  } else {
    timerElement.innerHTML = "0" + departMinutes + ":00";
  }
});
down.addEventListener("click", function () {
  departMinutes--;
  temps = departMinutes * 60;
  if (departMinutes >= 10) {
    timerElement.innerHTML = departMinutes + ":00";
  } else if (departMinutes < 0) {
    departMinutes = 0;
  } else {
    timerElement.innerHTML = "0" + departMinutes + ":00";
  }
});

start.addEventListener("click", function () {
  if (selectTimer.value != "") {
    departMinutes = selectTimer.value;
    temps = departMinutes * 60;
    selectTimer.value = "";
  }
  // temps = departMinutes * 60 - 1;
  clearInterval(interval);
  interval = setInterval(minuteur, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  // window.location.reload();
  clearInterval(interval);
  temps = 0;
  departMinutes = 0;
  selectTimer.value = "";
  timerElement.innerText = "0" + departMinutes + ":00";
});
