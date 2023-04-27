// Définir un tableau pour stocker les alarmes
let alarms = [];
let interval;
let timeDiv = document.getElementById("timeDiv");
let errorMessage = document.getElementById("errorMessage");
let alarmsPast = document.getElementById("finishedAlarms");
let alarmSound = new Audio("../assets/alarm.mp3");

function Time() {
  let currentClock = new Date();
  let hours = checkTime(currentClock.getHours());
  let minutes = checkTime(currentClock.getMinutes());
  let seconds = checkTime(currentClock.getSeconds());
  let actualTime = hours + ":" + minutes + ":" + seconds;
  timeDiv.innerHTML = actualTime;
}
Time();

function checkTime(nombre) {
  if (nombre < 10) {
    nombre = "0" + nombre;
  }
  return nombre;
}

// Fonction pour ajouter une alarme
function addAlarm() {
  // Obtenir la valeur de l'heure et du nom de l'alarme
  let timeValue = document.getElementById("time").value;
  let nameValue = document.getElementById("name").value;
  if (timeValue == "" || nameValue == "") {
    errorMessage.innerText = "Veuillez renseigner les champs !";
  } else {
    // Ajouter l'alarme au tableau
    alarms.push({ time: timeValue, name: nameValue });
  }

  // Actualiser l'affichage des alarmes
  displayAlarms();
}

// Fonction pour afficher les alarmes
function displayAlarms() {
  // Obtenir l'élément HTML où afficher les alarmes
  let alarmsPost = document.getElementById("alarmsPost");

  // Effacer le contenu de l'élément
  alarmsPost.innerHTML = "";

  // Afficher l'heure actuelle
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Parcourir le tableau d'alarmes et ajouter chaque alarme à l'élément HTML
  for (let i = 0; i < alarms.length; i++) {
    let alarm = alarms[i];
    let alarmTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      alarm.time.split(":")[0],
      alarm.time.split(":")[1]
    );
    let timeDiff = alarmTime - now;

    // Calculer le temps restant avant l'alarme
    let secondsRemaining = Math.floor((timeDiff / 1000) % 60);
    let minutesRemaining = Math.floor((timeDiff / (1000 * 60)) % 60);
    let hoursRemaining = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

    // Vérifier si l'alarme est terminée
    if (timeDiff <= 0) {
      // Ajouter l'alarme terminée dans une autre div
      alarmsPast.innerHTML += `<p>${alarm.name} : ${alarm.time}</p>`;
      // Supprimer l'alarme du tableau
      alarms.splice(i, 1);
      // Afficher une alerte
      alert(alarmSound.play(),`Alarme "${alarm.name}" terminée !`);
      continue;
      // } else {
      //   alarmSound.pause();
    }

    alarmsPost.innerHTML += `<p>${alarm.name} : ${alarm.time} (${hoursRemaining}h, ${minutesRemaining}m et ${secondsRemaining}s restantes)</p>`;
  }
}

// Actualiser les alarmes toutes les secondes
interval = setInterval(function () {
  Time();
  displayAlarms();
}, 1000);
