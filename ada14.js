//14)Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0, 'C') devolvera 32°F.

//Función...
const convertDegrees = (degrees = undefined, toConvert = '') =>{
  
  if(typeof degrees != 'number') return console.error('NO ha ingresado un numero.')
  
  if(!toConvert) return console.info('No ha ingresado algun valor para hacer la conversión.')
  
  if(typeof toConvert != 'string') return console.error('El valor introducido NO es un caracter de texto.')

  //Pasamos el parametro a mayuscula por defecto.
  toConvert = toConvert.toUpperCase()
   
  if(toConvert != 'C' && toConvert != 'F') return  console.error('Caracter NO válido, Para hacer la conversión solo es necesario añadir "C" para Celsius o "F" para Fahrenheit.') 
       
   return toConvert === 'C'
   ? console.info(`${degrees}° grados Celsius son ${Math.round((degrees * 9 / 5) + 32) }° grados Fahrenheit `)
   : console.info(`${degrees}° grados Fahrenheit son ${Math.round((degrees - 32) * 5 / 9)}° grados Celsius `)
}

/*Validación de función.
convertDegrees(  'c' )
convertDegrees( 1 )
convertDegrees(  )
convertDegrees( 1, 'a' )
convertDegrees( 1, 'z' )
convertDegrees( 1, 2 )
convertDegrees( 1, {} )
convertDegrees( {}, 'c' )
convertDegrees( 1, [] )
convertDegrees( [], 'c' )
convertDegrees( 5, 'f' )
convertDegrees( 5, 'flaaca' )*/