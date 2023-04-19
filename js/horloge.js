let time = document.getElementById("time");

function startTime() {
  let currentTime = new Date();
  let hours = checkTime(currentTime.getHours());
  let minutes = checkTime(currentTime.getMinutes());
  let seconds = checkTime(currentTime.getSeconds());

  time.innerHTML = hours + ":" + minutes + ":" + seconds;
  let refresh = setTimeout(startTime, 1000);
}

function checkTime(nombre) {
  // ajouter un zéro si le nombre est < 10
  if (nombre < 10) {
    nombre = "0" + nombre;
  }
  return nombre;
}

startTime();
