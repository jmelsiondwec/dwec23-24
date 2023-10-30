let elCrono;
let miFecha = new Date();
let laHora = document.getElementById("lahora");

const numero = prompt("Elije un número");
console.log(numero);

// Inicializo el tiempo para el cronómetro.
miFecha.setHours(0, 0, 0, 0);

// Inicializo el texto de "lahora".
laHora.innerHTML = "00:00:00";

function crono() {
  let horas = miFecha.getHours();
  let minutos = miFecha.getMinutes();
  let segundos = miFecha.getSeconds();
  
  segundos += 1;

  if(segundos == 60) {
    segundos = 0;
    minutos += 1;
    miFecha.setMinutes(minutos);
  }

  miFecha.setSeconds(segundos);

  if (horas < 10) { horas = "0" + horas; }
  if (minutos < 10) { minutos = "0" + minutos; }
  if (segundos < 10) { segundos = "0" + segundos; }

  laHora.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function reiniciarCrono() {
  // Inicializo el tiempo para el cronómetro.
  miFecha.setHours(0, 0, 0, 0);

  // Inicializo el texto de "lahora".
  laHora.innerHTML = "00:00:00";
}

function start() {
  elCrono = setInterval(crono, 1000);
}

function stop() {
  clearInterval(elCrono);
}

function reset() {
  setTimeout(reiniciarCrono, 0);
}