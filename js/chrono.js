let timerStart = document.getElementById("timerStart");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let tourBtn = document.getElementById("tourBtn");
let tour = document.getElementById("tour");
let contenu = document.getElementById("contenu");
let startIcon = document.getElementById("startIcon");
let sec = 0;
let min = 0;
let hrs = 0;
let defileTime;
let isPause = true;

function incrementationTime() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}
function affichage() {
  incrementationTime();
  timerStart.textContent =
    (hrs > 9 ? hrs : "0" + hrs) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}
function timer() {
  defileTime = setTimeout(affichage, 1000);
}

start.onclick = function () {
  if (isPause == true) {
    timer();
    isPause = false;
    startIcon.className = "fa-solid fa-pause";
  } else {
    clearTimeout(defileTime);
    isPause = true;
    startIcon.className = "fa-solid fa-play";
  }
};

reset.onclick = function () {
  clearTimeout(defileTime);
  tour.innerHTML = "";
  timerStart.textContent = "00:00:00";
  sec = 0;
  min = 0;
  hrs = 0;
  isPause = true;
};

tourBtn.onclick = function () {
  const p = document.createElement("p");
  p.innerHTML = timerStart.textContent;
  tour.append(p);
};
