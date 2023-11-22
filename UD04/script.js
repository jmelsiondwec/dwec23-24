/*
  ARRAYS  
*/

/* let a = [1, 2, 3];
console.log(a);
delete a[2];
console.log(a);

let i = 2;

if(a[i]) {
  console.log(a[i]);
} else {
  console.log("Slot vacío!");
} */

// Iterando Arrays

// let letras = [..."Hola amiguitos"];
// let aux = "";

// for(let letra of letras) {
//   aux += letra;
// }

//console.log(aux);

/* aux = "";
let suma = 0;
for(let [index, letra] of letras.entries()) {
  //suma += index;
  //aux += letra;
  if(index % 2 === 0) aux += letra;
}

console.log(aux);
//console.log("Suma: " + suma); */
// let index = 0;
// let mayusculas = "";
// console.log(letras);
// letras.forEach(letra => {
//   if(index % 2 === 0) {
//     mayusculas += letra.toUpperCase();
//   } else {
//     mayusculas += letra;
//   }
//   index++;
// });

// //console.log(mayusculas);

// let letra = "";
// let vocales = "";
// for(let i = 0; i < letras.length; i++) {
//   letra = letras[i];
  
//   if(/[haeiou]/.test(letra)) {
//     vocales += letra;
//   }
// }

//console.log(vocales);

// ARRAYS MULTIDIMENSIONALES
// let tabla = new Array(10);

// for(let i = 0; i < tabla.length; i++) {
//   tabla[i] = new Array(5); // Cada fila va a tener 5 columnas.
// }

// for(let fila = 0; fila < tabla.length; fila++) {
//   let miArrayInterior = tabla[fila];
//   for(let col = 0; col < miArrayInterior.length; col++) {
//     miArrayInterior[col] = fila * col;
//   }
// }

// console.log(tabla);

// MÉTODOS DE ARRAYS
// push()
// pop() Elimina el último elemento del array Y LO DEVUELVE

//let paco = ['joan', 'amparo', 'esther'];
//let otros = ['valentín', 'pepe'];
// console.log(paco);
// let elementoEliminado =  paco.pop();
// console.log(elementoEliminado);

// shift() Elimina el PRIMER elemento Y LO DEVUELVE
// unshift() Agrega uno o más elementos AL PRINCIPIO
// concat() Combina dos o más arrays y devuelve un nuevo array
//paco.unshift('valentín', 'pepe');

// let paco = ['joan', 'amparo', 'esther'];
// let otros = ['valentín', 'pepe'];
// let combinacion = paco.concat(otros);
//console.log(combinacion);
//console.log(otros.concat(paco));

// slice() Devuelve una copia (superficial)
// de una porción del array.
//let copiaPaco = paco.slice(1, 2);

// splice() Cambia el contenido de un array
// eliminando, reemplazando o agregando elementos.


//paco.splice(2, 0, ...otros.splice(0, 1), ...otros.splice(0, 1));
//console.log(paco);

// indexOf() Devuelve el primer índice en el que
// se encuentra un elemento dado. Devuelve -1 si
// no lo encuentra.

// let indice = paco.indexOf('Amparo');
// let cadena = "Hola cara de bola";
// indice = cadena.indexOf("a");
// indice = paco.lastIndexOf("amparo");
// console.log(indice);

// join() Une todos los elementos de un array
// en una cadena (utilizando un separador)

// let cadena = paco.join(' X ');
// console.log(cadena);

// sort() Ordena los elementos de un array
// alfabéticamente si son cadenas
// numéricamente si son números
//let paco = ['joan', 'amparo', 'esther', 'amparo', 'Zoraida', 'Bàrbara', 'Barbara'];
//let otros = [3, 4, 2, 10, -1, 0];
// console.log(paco.sort());
// console.log(otros.sort());
// Ordenar correctamente con sort => uso de parámetro
// Se trata de una función:
// - Debe recibir dos valores a comparar.
// - Como resultado debe:
//    - Devolver un valor positivo (1) si el primer valor
//      es superior al segundo.
//    - Devolver un valor negativo (-1) si el primer valor
//      es inferior al segundo.
//    - Devolver un valor cero (0) si los dos valores son
//      iguales o equivalentes para la ordenación.

//  sort en números
// let numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort(function(uno, dos) {
//   return uno - dos;
// }));

// console.log(numeros.sort((a, b) => b - a));

// sort en cadenas
//let paco = ['joan', 'Ángel', 'Amparo', 'esther', 'amparo', 'Zoraida', 'Bàrbara', 'Barbara'];

// console.log(paco.sort((a, b) => {
//   return (a.toLowerCase() > b.toLowerCase()) ? 1 :
//   (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
// }));

// console.log(paco.sort((a, b) => {
//   return a.localeCompare(b);
// }));

/*
  FUNCIONES
*/

//diHola();

// function diHola() {
//   console.log("Hola");
// }

// let resultado = multiplica(3, 10);
// console.log(resultado);

// function multiplica(c, d) {
//   let a = 10;
//   let b = 20;
//   return (a * b * c * d);
// }

/*
  OBJETOS
*/

// let unCliente = {
//   nombre: "Peter",
//   apellido: "Jackson",
//   'dirección fiscal': "c/ Desconocida",
//   "-+-+-+": "boquepasa",
//   pago: {
//     tipo: "Visa",
//     tarjeta: "123456789",
//     "fecha de caducidad": "nunca"
//   },
//   vencimiento: 30
// }

// unCliente["vencimiento"] = 60;
// unCliente["-+-+-+"]
// console.log(unCliente.apellido);
// console.log(unCliente.pago["fecha de caducidad"]);

// console.log(unCliente);
// console.log(unCliente["-+-+-+"]);

// Métodos como elementos

// let estudiante = {
//   id: 2,
//   nombre: "Joan",
//   diHola : function() {
//     return "Hola";
//   },
//   notas: [10, 0, 4]
// }

// estudiante.apellido = "Melsión";

// estudiante.diAdios = function() {
//   return "Adiós";
// }

// console.log(estudiante.diAdios());

// this

// let factura = {
//   descripcion: "Factura de prueba",
//   precio: 100.0,
//   iva: 21.0,
//   subTotal: function() {
//     return this.precio;
//   },
//   total: function() {
//     return this.precio + (this.precio * this.iva) / 100
//   }
// }

// console.log(factura);
// console.log(factura.total());

// CONSTRUCTORES

// function Web() {
//   this.url = "http://localhost";
//   this.nombre = "Localhost";

//   this.muestraInformacion = function() {
//     return "url: " + this.url + "\n" + "Web: " + this.nombre;
//   }
// }
// Web.prototype.visitas = 2;
// Web.prototype.miFuncion = function() {
//   return "Hola";
// }


// let unaWeb = new Web();
// unaWeb.url = "https://www.fcbarcelona.cat";
// unaWeb.nombre = "Més que un club";

//console.log(unaWeb.miFuncion());
// console.log(unaWeb.muestraInformacion());

// const ciudades = [
//   {
//     municipio: "Zaragoza",
//     provincia: "Zaragoza"
//   },
//   {
//     municipio: "Ávila",
//     provincia: "Ávila"
//   },
//   {
//     municipio: "madrid",
//     provincia: "madrid"
//   },
//   {
//     municipio: "Barcelona",
//     provincia: "Barcelona"
//   }
// ];

// console.log(ciudades);

// function ordenaPorFavor() {
//   ciudades.sort((a, b) => {
//     return a.provincia.localeCompare(b.provincia);
//   });
// }

// ordenaPorFavor();
// console.log(ciudades);

//  ES6
// const miArray = ["A", "b", "C"];
// miArray.push("D");
// const A = "a";
// //A = "b";
// miArray[1] = "B";
// console.log(miArray);

// DESESTRUCTURACIÓN
// const numeros = [1, 2, 3];

// const [a, b, c] = numeros;

// console.log(b);

// const persona = {
//   nombre: "Andreu",
//   edad: 33
// };

// const {nombre, edad} = persona;
// console.log(nombre);

// const nombre = "Josep";
// const edad = 33;

// const persona = {
//   nombre,
//   edad
// }

// console.log(persona.nombre);

// Template Strings - Plantillas de Cadenas
// operador de interpolación ${}

// const nombre = "Bob Esponja";
// const edad = 32;

// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// console.log(mensaje);

// Operador spread ...
// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];
// console.log(nuevosNumeros);

// Parámetros por defecto
// function saludar(nombre = "Invitado") {
//   console.log(`Hola, ${nombre}`);
// }
// saludar();

// Parámetros rest (rest parameter)
// function sumar(...numeros) {
//   let resultado = 0;

//   for(let numero of numeros) {
//     resultado += numero;
//   }

//   console.log(typeof resultado);
//   return resultado;
// }

// let a = 10;
// console.log(sumar(4, -1, 6, 3, 65, 1001, -666, a));

// Funciones Flecha () => {}

// function sumar(a, b) {
//   return a + b;
// }

// const sumar = (a, b) => {
//   return a + b;
// };

// console.log(sumar(3, 5));

// MÉTODOS DE ARRAYS
// forEach(): Ejecuta una función (nuestra) una vez
// por cada elemento del array.
// const numeros = [1, 2, 3, 4, 5];

// const multiplica = (n) => {
//   return n * 2;
// }

// numeros.forEach((numero) => {
//   console.log(multiplica(numero));
// });

// console.log(numeros);

// map(): Crea un nuevo array con los resultados de
// aplicar una función a cada elemento del array.
// const dobleNumero = numeros.map((numero) => {
//   return multiplica(numero);
// })
//const dobleNumero = numeros.map(multiplica());


// console.log(dobleNumero);

// filter(): Crea un nuevo array con todos los elementos
// que cumplan una condición determinada.
// const numerosPares = numeros.filter((numero) => {
//   return numero % 2 === 0;
// });

// console.log(numerosPares);

// reduce(): Aplica una función a un acumulador y a cada
// elemento del array (de izquierda a derecha) para
// reducirlo a un ÚNICO valor.

// const suma = numeros.reduce((acumulador, numero) => {
//   return acumulador + numero;
// }, 0);

// console.log(suma);

// find(): Devuelve el primer elemento del array que
// cumpla una determinada condición.
// const numeroEncontrado = numeros.find((numero) => {
//   return numero < 3;
// });
// console.log(numeroEncontrado);

// findIndex(): Devuelve el índice del primer elemento
// del array que cumple con una función de prueba
// o -1 si no encuentra ná.
// const indiceEncontrado = numeros.findIndex((numero) => {
//   return numero < 3;
// });
// console.log(indiceEncontrado);

// some(): Comprueba si al menos un elemento del array
// cumple una condición determinada.
// const tieneNumeroPar = numeros.some((numero) => {
//   return numero % 2 === 0;
// });
//console.log(tieneNumeroPar);

// if(numeros.some((numero) => {
//   return numero % 2 === 0;
// })) {
//   console.log("fungiciona");
// }

// every(): Comprueba si TODOS los elementos cumplen
// una condición determinada.
// const todosNumerosPares = numeros.every((numero) => {
//   if(numero > 3) {
//     return numero % 2 === 0;
//   } else {
//     return numero % 6 === 0;
//   }
// });
// console.log(todosNumerosPares);

// CLASES - class

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   saludar() {
//     console.log(`Hola, soy ${this.nombre}.`);
//   }
// }

// const joan = new Persona("Joan");
//console.log(joan);
//joan.saludar();

// HERENCIA
// class Empleado extends Persona {

//   constructor(nombre, salario) {
//     super(nombre);
//     this.salario = salario;
//   }

//   trabajar() {
//     console.log(`${this.nombre} está trabajando.`);
//   }
// }

//const maria = new Empleado();
//maria.nombre = "Olga";
//console.log(maria.nombre);
//maria.saludar();
//maria.trabajar();

// Símbolos
/*
  Los símbolos son una nueva clase de datos introducida por ES6.
  Son valores únicos e inmutables.
  Se pueden utilizar como identificadores de propiedades de objetos.
*/

// const id = Symbol("id");
// const persona = {
//   nombre: "Joan",
//   [id]: 1
// };
// console.log([id]);

// ITERADORES
// Son objetos que implementan el protocolo de iteración en JavaScript.
// Permiten recorrer y acceder a los elementos de una colección uno a uno.

// const numeros = [1, 2, 3];
// const iterador = numeros[Symbol.iterator]();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// SET
// Permite almacenar valores ÚNICOS de cualquier tipo.
// No permite duplicados y ofrece métodos para agregar,
// eliminar y verificar la existencia de elementos.

// const setNumeros = new Set();
// setNumeros.add(1);
// setNumeros.add(2);
// setNumeros.add(3);

//console.log(setNumeros.has(2));
//setNumeros.delete(2);
//console.log(setNumeros.has(2));

//console.log(setNumeros.size);
//console.log(setNumeros);

//const iteratorNumeros = setNumeros[Symbol.iterator]();
//console.log(iteratorNumeros.next());

// MAP
// Permite almacenar PARES clave-valor, donde cada clave es ÚNICA.
// Permite operaciones de búsqueda, inserción y eliminación.

// const mapaNombres = new Map();
// mapaNombres.set("nombre", "Ana");
// mapaNombres.set("edad", 33);
// mapaNombres.set("profesion", "Desarrollador");

// console.log(mapaNombres.get("nombre"));
// console.log(mapaNombres.has("edad"));
// mapaNombres.delete("edad");
// console.log(mapaNombres.has("edad"));
// console.log(mapaNombres.size);
// console.log(mapaNombres);

// COOKIES
/*
  Las utilizamos para:
  - Monitorizar la actividad de los usuarios.
  - Mantener opciones de visualización o de aspecto
  para el usuario.
  - Almacenar variables en el lado cliente.
  - Identificación o autenticación.

  CREAR UNA COOKIE
*/
// function crearCookie(usuarioCookie) {
//   console.log("Creando la cookie...");
//   usuarioCookie += ";expires=Mon, 6 Nov 2023 12:15:00 GMT";
//   document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);
// }

// function leerCookies() {
//   console.log("Leyendo las cookies...");
//   console.log(decodeURIComponent(document.cookie));
// }

/*
  LOCAL STORAGE

  setItem(clave, valor)

  getItem(clave)
*/

function guardaValores() {
  console.log("Guardando valores en el Local Storage...");
  let usuariosWeb = {
    nombre: "Joan",
    apellido: "Melsión"
  };
  localStorage.setItem("usuarios", JSON.stringify(usuariosWeb));
}

function leerValores() {
  console.log("Leyendo valores en el Local Storage...");
  let valor = JSON.parse(localStorage.getItem("usuarios"));
  console.log(valor == null ? "La clave no se ha encontrado." : valor);
}

/*
  RECURSIVIDAD  
*/

function factorial(numero) {

  if(numero == 0) return 1;

  return (numero * factorial(numero - 1));
}

let numero = factorial(6);
console.log(numero);





