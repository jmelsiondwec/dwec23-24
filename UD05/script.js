//querySelector
//parámetro: un selector CSS

//const para = document.querySelector('p');
//console.log(para);

//querySelectorAll
//parámetro: selector CSS
// const paras = document.querySelectorAll('p');
// console.log(paras);
//console.log(paras[0]);

// paras.forEach(para => {
//   console.log(para);
// });

// getElementById
// parámetro: nombre del identificador
// const titulo = document.getElementById('titulo');
// console.log(titulo);

//getElementsByClassName
//parámetro: nombre de la clase asociada a ese elemento.
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

//getElementsByTagName
//parametro: nombre del tag del elemento.
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// Modificar el contenido de la página
//innerHTML, innerText
//let para = document.querySelector('p');
// let paras = document.querySelectorAll('p');
// let p1 = paras[0];
// let contenidoP1 = p1.innerText;
// console.log(contenidoP1);
// p1.innerText = "Requete";
// contenidoP1 = p1.innerText;
// console.log(contenidoP1);

// Obtener y establecer atributos
// let enlace = document.querySelector('a');
// let url = enlace.getAttribute("href");
// console.log(url);
// enlace.setAttribute('href', 'http://www.seat.es');
// url = enlace.getAttribute("href");
// console.log(url);

// Añadir y elimnar estilos
//style
// let error = document.querySelector('body > div.error');
// error.style.backgroundColor = "lightblue";
// error.style.backgroundColor = "";

// Añadir y eliminar clases
// let error = document.querySelector('body > div.error');
// error.classList.add("paco");
// error.classList.remove("error");

// let paras = document.getElementsByTagName('p');
// let hijo = paras[2];
// console.log(hijo);
// let padre = hijo.parentNode;
// console.log(padre);
// let primerHermano = padre.firstElementChild;
// console.log(primerHermano);
// let siguienteHermano = hijo.nextElementSibling;
// console.log(siguienteHermano);

// EVENTOS
// Referenciamos el elemento del DOM.
const par = document.querySelector('p');
// Creamos un evento para ese elemento.
par.addEventListener('click', (e) => {
  //escribeLog();
  console.log(e.target.innerText);
  e.target.innerText = "Texto cambiado";
  console.log(e.target.innerText);
});
// Creamos otro evento para ese elemento.
// par.addEventListener('mouseover', () => {
//   escribeOtroLog();
// });

function escribeLog() {
  console.log('He hecho clic sobre el primer párrafo');
}

function escribeOtroLog() {
  console.log('He pasado el puntero sobre el primer párrafo');
}

document.addEventListener("keydown", (e) => {
  console.log("Tecla presionada: " + e.key);
});


