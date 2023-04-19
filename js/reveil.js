let timeDiv = document.getElementById("timeDiv");
let warningDiv = document.getElementById("warning");
let confirmBtn = document.getElementById("confirm");
let interval;
// let alarmRegisted;

function Time() {
  let currentClock = new Date();
  let hours = checkTime(currentClock.getHours());
  let minutes = checkTime(currentClock.getMinutes());
  let seconds = checkTime(currentClock.getSeconds());
  // let currentTime = hours + ":" + minutes;
  let actualTime = hours + ":" + minutes + ":" + seconds;
  timeDiv.innerHTML = actualTime;
  return actualTime;
}
Time();

// ajouter un zéro si le nombre est < 10
function checkTime(nombre) {
  if (nombre < 10) {
    nombre = "0" + nombre;
  }
  return nombre;
}

confirmBtn.addEventListener("click", () => {
  affichage();
});

function timeRemaining() {
  let currentTime = Time();
  let newP = document.createElement("p");

  // confirm.onclick = function () {
  console.log("okkk");
  let alarmList = document.getElementById("alarmList");
  let heure = document.getElementById("heure");
  let alarmText = document.getElementById("alarmText");
  // alarmList.innerHTML = "";

  let confirmAlarm = heure.value;
  let confirmText = alarmText.value;
  let calculCurrentDate = new Date(`2000-01-01T${currentTime}`);
  let calculAlarmDate = new Date(`2000-01-01T${heure.value}`);
  let timeLeft = Math.abs((calculAlarmDate - calculCurrentDate) / 1000 / 60);
  let tempsRestant = Math.ceil(timeLeft);
  // return timeLeft;
}

function affichage(confirmAlarm, confirmText, currentTime, newP) {
  timeRemaining();
  // let interval = setInterval(() => {

  if (confirmAlarm == "") {
    warningDiv.innerText = "Choisir une heure !";
  } else if (confirmText == "") {
    warningDiv.innerText = "Remplir une description !";
  } else {
    if (confirmAlarm > currentTime) {
      alarmRegisted =
        confirmAlarm +
        " : " +
        confirmText +
        " : A venir. Temps restant : " +
        timeLeft +
        " min";
      newP.innerHTML = alarmRegisted;
      alarmList.append(newP);
      // setInterval(affichage);

      // clearInterval(interval);
      // warningDiv.innerText = "";
      // interval = setInterval(timeLeft, 1000);
    } else if (confirmAlarm < currentTime) {
      warning.innerText = "Choisir une heure postérieure !";
    } else {
      newP.innerHTML = "Heure passée";
      alarmList.append(newP);
      // warningDiv.innerText = "";
    }
  }
  // }, 1000);
  // setInterval(affichage, 1000);
  // return alarmRegisted;
}
// affichage();
// };
// clearInterval(interval);
// confirmAlarm = "";
// confirmText = "";
// function afficher() {
//   confirmBtn.addEventListener("click", affichage());

// }

// setInterval(() => {
//   Time();
// affichage();
//   // clearInterval(interval);
// }, 1000);
