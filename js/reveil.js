var alarms = []; // tableau pour stocker les alarmes créées

function addAlarm() {
  var timeInput = document.getElementById("timeInput");
  var messageInput = document.getElementById("messageInput");

  // Vérifier si les deux inputs sont remplis
  if (timeInput.value == "" || messageInput.value == "") {
    alert("Les deux champs doivent être remplis!");
    return;
  }

  // Ajouter l'alarme au tableau
  var alarm = {
    time: timeInput.value,
    message: messageInput.value,
  };
  alarms.push(alarm);

  // Actualiser l'affichage des alarmes
  updateAlarms();
}

function updateAlarms() {
  var now = new Date();
  var pastAlarms = [];
  var futureAlarms = [];

  // Séparer les alarmes passées des alarmes à venir
  for (var i = 0; i < alarms.length; i++) {
    var alarmTime = new Date(now.toDateString() + " " + alarms[i].time);
    if (alarmTime <= now) {
      pastAlarms.push(alarms[i]);
    } else {
      futureAlarms.push(alarms[i]);
    }
  }

  // Afficher les alarmes passées et à venir
  var pastAlarmsDiv = document.getElementById("pastAlarms");
  var futureAlarmsDiv = document.getElementById("futureAlarms");
  pastAlarmsDiv.innerHTML = "";
  futureAlarmsDiv.innerHTML = "";

  for (var i = 0; i < pastAlarms.length; i++) {
    var alarmDiv = document.createElement("div");
    alarmDiv.innerHTML =
      "<b>Alarme passée à " +
      pastAlarms[i].time +
      ":</b> " +
      pastAlarms[i].message;
    pastAlarmsDiv.appendChild(alarmDiv);
  }

  for (var i = 0; i < futureAlarms.length; i++) {
    var alarmDiv = document.createElement("div");
    alarmDiv.innerHTML =
      "<b>Alarme à venir à " +
      futureAlarms[i].time +
      ":</b> " +
      futureAlarms[i].message;
    futureAlarmsDiv.appendChild(alarmDiv);
  }

  // Actualiser les alarmes à venir
  if (futureAlarms.length > 0) {
    var nextAlarmTime = new Date(
      now.toDateString() + " " + futureAlarms[0].time
    );
    var timeUntilNextAlarm = nextAlarmTime - now;

    setTimeout(function () {
      alert("Alarme: " + futureAlarms[0].message);
      futureAlarms.shift();
      // updateAlarms();
    }, timeUntilNextAlarm);
    // setInterval(updateAlarms, 1000);
  }
}

setInterval(function () {
  var now = new Date();
  document.getElementById("currentTime").innerHTML =
    "Heure actuelle: " + now.toLocaleTimeString();
}, 1000);
