//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2020) devolverá true.

//Función
const isCopicuous = ( number = null ) => {
  if( isNaN( number ) ) return console.info( 'No ha ingresado un número, por favor ingrese un valor numeríco.' )

  let numberReverse = number.toString().split('').reverse().join('')
  numberReverse = Number(numberReverse)

  return number === numberReverse 
  ? console.info( `${number} si es un número copicua.` )
  : console.info( `${number} no es un número copicua.` )
}

//Pruebas de la función...
isCopicuous(1002) // false
isCopicuous(1001) // true
isCopicuous(22)  // true
isCopicuous(2020) // false
isCopicuous(10310) // false
isCopicuous(10101)  //true


