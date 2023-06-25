// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


//Variables de testeo
let empty = ""
let nulo = null
let number = 5
let boleano = true
let array = []
const objeto = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};
let saludo = 'Hola que tal'
let cutter = " "


//Función
const stringToDivide = ( string, character ) => {
  if ( string === null || string === "" ) {
    return console.warn( "Ingrese una cadena de texto por favor." );
  } else if ( typeof string != "string" ) {
    return console.error(
      "El dato ingresado no es una cadena de texto, por favor ingrese una cadena de texto."
    );
  } else {
    if ( character === undefined ) {
      return "No ingreso el caracter que cortara la cadena de texto.";
    } else {
      return string.split( character );
    }
  }
};


//Invocación de la función
console.log( stringToDivide( saludo, cutter))