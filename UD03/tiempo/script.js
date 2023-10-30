// setInterval() i setTimeOut()

/*  setTimeOut(funcionALlamar, milisegundos)
    Ejecuta la función funcionALlamar transcurrido el tiempo
    indicado en el segundo parámetro.

    setInterval(funcionALlamar, milisegundos)
    Ejecuta la función funcionALlamar de manera periódica,
    según el tiempo del segundo parámetro.

    clearInterval()
    Detiene la ejecución iniciada con setInterval()

    clearTimeOut()
    Detiene la ejecución inicada con setTimeOut()
*/
let elCrono;

function crono() {  
  let miFecha = new Date();
  let horas = miFecha.getHours();
  let minutos = miFecha.getMinutes();
  let segundos = miFecha.getSeconds();
  let ampm = "pm";

  if(horas > 12) {
    ampm = "pm";
    horas -= 12;
  } else {
    ampm = "am";
  }

  if(horas < 10) { horas = "0" + horas;}
  if(minutos < 10) { minutos = "0" + minutos;}
  if(segundos < 10) { segundos = "0" + segundos;}

  let laHora = document.getElementById("lahora");
  laHora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;
}

window.onload = function() {
  elCrono = setInterval(crono, 1000); 
}

function saluda() {
  console.log("Boquepasa");
}

