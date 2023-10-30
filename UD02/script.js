// Operadores Booleanos
// -> Permiten comparar expresiones booleanas con las que
//  se construyen condiciones que se pueden aplicar en
//  funciones, bucles, etc.

//  &&  AND Solo devuelve true cuando ambo operadores lo son.
/*
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false
*/

//  ||  OR  Devuelve true si cualquiera de ambos operadores lo es.
/*
    true || true -> true
    true || false -> true
    false || true -> true
    false || false -> false
*/
let a = false;
let b = false;

//  !   NOT Devuelve lo contrario al operando.
//console.log(!!a);

/*
    Se nos facilitan tres variables
    que contienen información sobre
    una ciudad.

    let esCapital; //boolean
    let numeroCiudadanos; // int
    let impuestoPorCiudadano; float

    - esCapital: será cierta si y solo
    si la ciudad es capital.
    - numeroCiudadanos: es el número
    de ciudadanos de esa ciudad.
    - impuestoPorCiudadano: es el
    impuesto medio mensual que paga
    un ciudadano de esa ciudad.

    Para nosotros, una Metrópolis
    será una ciudad si bien es una
    capital con más de 100000 ciudadanos
    o bien es una ciudad con más de
    200000 ciudadanos y una renta
    media de 720000000 al año.

    Dad una expresión booleana con las
    tres variables de tal manera que sea
    cierta si y solo si la ciudad es una
    Metrópolis.

*/

let esCapital = false;
let numeroCiudadanos = 200001;
let impuestoPorCiudadano = 300.4;

const primeraCondicion = esCapital && numeroCiudadanos > 100000;
const segundaCondicionA = numeroCiudadanos > 200000;
const segundaCondicionB = numeroCiudadanos * impuestoPorCiudadano * 12 > 720000000;
const segundaCondicion = segundaCondicionA && segundaCondicionB;
const esMetropolis = primeraCondicion || segundaCondicion;

//const esMetropolis = (esCapital && numeroCiudadanos > 100000) || ((numeroCiudadanos > 200000) && (numeroCiudadanos * impuestoPorCiudadano * 12 > 720000000));

console.log("¿Es Metrópolis?", esMetropolis);


