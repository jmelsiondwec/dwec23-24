/*
    FECHAS
*/

let parrafo = document.getElementById("fecha");

// new Date();
// new Date(milisegundos);
// new Date(fechaString);
// new Date(año, mes, día, horas, minutos, segundos, milisegundos);

let fecha = new Date(1970,0,1,0,0,36000);
parrafo.innerHTML = fecha.getTime();