// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

//Variables a probar...
let vacio = null
let frase = "Hola Mundo"
let number = 12345
let boolean = true
const array = [1, 2, 3, 4, 5];
const objeto = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};


//Función 
const textCrop = ( text, number) => {
  if ( text === null || text === "" ) {
    return console.warn( 'No se ingreso una cadena de texto, por favor intente de nuevo.' )
  }
  else if ( typeof text != 'string' ) {
    return console.error( 'El dato que ingreso no es una cadena de texto.' )
  }
  else {
    if ( number === 0  || number === undefined) {
      return console.warn( 'No ingreso el cortador de la cadena.' )
    } else {
      return text.slice( 0, number )
    }
    }
  }


// Invocación de la función
console.log( textCrop( objeto, 4))