let timeDiv = document.getElementById("timeDiv");
let warningDiv = document.getElementById("warning");
let confirmBtn = document.getElementById("confirm");
let heure = document.getElementById("heure");

// let interval;
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
  // timeRemaining();
  // affichage();
  mettreAJourTempsRestant();
});

// console.log(calculCurrentDate);
// console.log(calculAlarmDate);
// console.log(timeLeft);
// let tempsRestant = Math.ceil(timeLeft);
function affichage() {
  let currentTime = Time();
  let newP = document.createElement("p");

  // confirm.onclick = function () {
  console.log("okkk");
  let alarmList = document.getElementById("alarmList");
  // let heure = document.getElementById("heure");
  let alarmText = document.getElementById("alarmText");
  // alarmList.innerHTML = "";

  let confirmAlarm = heure.value;
  let confirmText = alarmText.value;
  // let calculCurrentDate = new Date(`2000-01-01T${currentTime}`);
  // let calculAlarmDate = new Date(`2000-01-01T${heure.value}`);
  // let timeLeft = Math.abs((calculAlarmDate - calculCurrentDate) / 1000 / 60);
  // To set two dates to two variables
  var date1 = new Date(`2000-01-01T${currentTime}`);
  var date2 = new Date(`2000-01-01T${heure.value}`);

  // To calculate the time difference of two dates
  var diffTime = date2.getTime() - date1.getTime();
  // setInterval(diffTime);
  console.log((diffTime / 3600000) * 60);
  // return timeLeft;
  // timeRemaining();
  // let interval = setInterval(() => {

  // if (confirmAlarm == "") {
  //   warningDiv.innerText = "Choisir une heure !";
  // } else if (confirmText == "") {
  //   warningDiv.innerText = "Remplir une description !";
  // } else {
  //   if (confirmAlarm > currentTime) {
  // alarmRegisted =
  //   confirmAlarm +
  //   " : " +
  //   confirmText +
  //   " : A venir. Temps restant : " +
  //   timeLeft +
  //   " min";
  // newP.innerHTML = heure.value;
  newP.innerHTML = (diffTime / 3600000) * 60;
  alarmList.append(newP);
  // interval = setInterval(affichage);

  // clearInterval(interval);
  // warningDiv.innerText = "";
  // interval = setInterval(timeLeft, 1000);
  // } else if (confirmAlarm < currentTime) {
  //   warning.innerText = "Choisir une heure postérieure !";
  // } else {
  //   newP.innerHTML = "Heure passée";
  //   alarmList.append(newP);
  //   warningDiv.innerText = "";
  // }
  // return newP;
}
// }, 1000);
// setInterval(affichage, 1000);
// return alarmRegisted;
// }
// affichage();
// };
// clearInterval(interval);
// confirmAlarm = "";
// confirmText = "";
// function afficher() {
//   confirmBtn.addEventListener("click", affichage());
// }

// recupTime();
// setInterval(() => {
//   Time();
// affichage();
//   // clearInterval(interval);
// }, 1000);

// définir la date de réveil
// const dateDeReveil = new Date("April 19, 2023 07:30:00");

// fonction pour mettre à jour le temps restant
function mettreAJourTempsRestant() {
  // confirm.onclick = function () {
  let currentTime = Time();
  let newP = document.createElement("p");

  // const dateDeReveil = new Date(`2023-04-19T${heure.value}`).getTime();
  // const maintenant = new Date().getTime();
  // const tempsRestant = dateDeReveil - maintenant;
  let date1 = new Date(`2000-01-01T${currentTime}`);
  let date2 = new Date(`2000-01-01T${heure.value}`);

  // To calculate the time difference of two dates
  let diffTime = date2.getTime() - date1.getTime();

  // calculer les heures, minutes et secondes restantes
  const heures = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((diffTime % (1000 * 60)) / 1000);

  // afficher le temps restant
  timeRestant = `Temps restant: ${heures}h ${minutes}m ${secondes}s`;
  newP.innerHTML = timeRestant;
  warningDiv.append(newP);
  // console.log(tempsRestant);
  // console.log(dateDeReveil);
  // console.log(maintenant);
  console.log(heure.value);
  console.log(timeRestant);

  // si le temps restant est écoulé, arrêter l'intervalle et afficher une alerte
  if (diffTime < 0) {
    clearInterval(interval);
    alert("Réveil !");
  }
  // };
}
// mettre à jour le temps restant toutes les secondes
// const interval = setInterval(mettreAJourTempsRestant(), 1000);
// setInterval(() => {
//   mettreAJourTempsRestant();
//   // affichage();
//   // clearInterval(interval);
// }, 1000);
