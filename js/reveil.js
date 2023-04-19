// Définir un tableau pour stocker les alarmes
let alarms = [];

// Fonction pour ajouter une alarme
function addAlarm() {
  // Obtenir la valeur de l'heure et du nom de l'alarme
  let timeValue = document.getElementById("time").value;
  let nameValue = document.getElementById("name").value;

  // Ajouter l'alarme au tableau
  alarms.push({ time: timeValue, name: nameValue });

  // Actualiser l'affichage des alarmes
  displayAlarms();
}

// Fonction pour afficher les alarmes
function displayAlarms() {
  // Obtenir l'élément HTML où afficher les alarmes
  let alarmsDiv = document.getElementById("alarms");

  // Effacer le contenu de l'élément
  alarmsDiv.innerHTML = "";

  // Parcourir le tableau d'alarmes et ajouter chaque alarme à l'élément HTML
  for (let i = 0; i < alarms.length; i++) {
    let alarm = alarms[i];
    let now = new Date();
    let alarmTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      alarm.time.split(":")[0],
      alarm.time.split(":")[1]
    );
    let timeDiff = alarmTime - now;
    // console.log(alarmTime);
    // console.log(now);
    // console.log(timeDiff);

    // Calculer le temps restant avant l'alarme
    let seconds = Math.floor((timeDiff / 1000) % 60);
    let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

    alarmsDiv.innerHTML += `<p>${alarm.name} : ${alarm.time} (${hours} heures, ${minutes} minutes et ${seconds} secondes restantes)</p>`;
  }
}

// Fonction pour afficher l'heure actuelle
function displayCurrentTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let currentTimeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById(
    "current-time"
    ).innerHTML = `Heure actuelle : ${currentTimeString}`;
  }
  displayCurrentTime();
  
  // Actualiser l'affichage de l'heure actuelle et des alarmes créées toutes les secondes
  setInterval(displayCurrentTime, 1000);
  setInterval(displayAlarms, 1000);
