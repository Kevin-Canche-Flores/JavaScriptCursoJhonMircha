//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

//Variable.
let greeting = 'Hola Mundo'


//Función.
const reverseToString = ( string = undefined ) => {
  if(!string) return console.warn( 'No ha ingresado una cadena de texto.' );

  if(typeof string != 'string') return console.error( 'El dato ingresado, no es una cadena de texto, por favor ingrese un texto.' );

   return console.info( string.split('').reverse().join('') )
  
}

//Aplicación de la función.
reverseToString( greeting )
reverseToString( [] )
reverseToString()
reverseToString("")