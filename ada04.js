// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

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
let saludo = 'hola'
let repeater = -5


//Función 
const stringToRepeat = ( string, repeater ) => {
  if( string === null || string === "" ) {
    return 'Ingrese una cadena de texto, por favor.'
  }
  else if ( typeof string != 'string' ) {
    return 'El valor ingresado no es una cadena de texto, por favor ingrese una cadena de texto valida.'
  }
  else {
    if( repeater === 0 || repeater === null ) {
      return 'El numero de veces NO puede ser 0 o nulo, por favor ingrese un número valido.'
    }
    else if ( repeater < 0 ) {
      return 'El contador debe ser un número positivo.'
    }
    else {
      const space = string.trim()
      const result = ' ' + space 
      return result.repeat( repeater )
    }
  }
}

console.log( stringToRepeat( objeto, repeater ) )