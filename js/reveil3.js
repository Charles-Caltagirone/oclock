var alarms = [];

function addAlarm() {
  var time = document.getElementById("time").value;
  var name = document.getElementById("name").value;
  var alarm = { time: time, name: name };
  alarms.push(alarm);
  displayAlarms();
}

function displayAlarms() {
  var alarmList = document.getElementById("alarmList");
  alarmList.innerHTML = "";
  for (var i = 0; i < alarms.length; i++) {
    var alarm = alarms[i];
    var time = alarm.time;
    var name = alarm.name;
    var listItem = document.createElement("li");
    listItem.innerHTML = time + " - " + name;
    alarmList.appendChild(listItem);
  }
}

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("currentTime").innerHTML = timeString;
}

setInterval(updateTime, 1000);
