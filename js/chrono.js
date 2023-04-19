let h1 = document.getElementsByTagName("h1")[0];
let start = document.getElementById("strt");
let reset = document.getElementById("rst");
let tourBtn = document.getElementById("tourBtn");
let tour = document.getElementById("tour");
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
  h1.textContent =
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
  } else {
    clearTimeout(defileTime);
    isPause = true;
  }
};

reset.onclick = function () {
  clearTimeout(defileTime);
  tour.innerHTML = "";
  h1.textContent = "00:00:00";
  sec = 0;
  min = 0;
  hrs = 0;
  isPause = true;
};

tourBtn.onclick = function () {
  const p = document.createElement("p");
  p.innerHTML = h1.textContent;
  tour.append(p);
};
