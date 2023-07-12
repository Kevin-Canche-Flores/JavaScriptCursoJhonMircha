//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


//Función...
const binaryToDecimal = (number = undefined, base = undefined) => {
  if( !number ) return console.warn('No ha ingresado un número a validar.')

  if( typeof number !== 'number' ) return console.error( `${number} es un dato invalido, por favor ingrese un número.` )

  if( number === 0) return console.warn(`${number} en el sistema binario o decimal es igual.`)

  if(number < 0) return console.error('Solo Numeros enteros positivos son validos.')

  if( !base ) return console.warn('No ha ingresado la base para hacer la conversión de números.')

  if( typeof base !== 'number' ) return console.error( `${base} es un dato invalido, por favor ingrese un número.` )

  if( base !== 2 && base !== 10 ) return console.error( 'Valor de base no reconocido.' )

  let result = [];
  let numberToEvaluate = number

  if (base === 10) {
    //Convertir a binario el número decimal...
    while (numberToEvaluate > 0) {
      result.unshift(numberToEvaluate % 2);
      numberToEvaluate = Math.trunc(numberToEvaluate / 2);
    }
    return console.info(`El número decimal ${number} en binario es: ${result.join('')}`);
  } else {
     //Convertir a decimal el número binario...
    numberToEvaluate = numberToEvaluate.toString().split("").reverse();
    for (let i = 0; i < numberToEvaluate.length; i++) {
      let decimal = Number(numberToEvaluate[i] * 2)
      decimal = Math.pow(decimal, i) * numberToEvaluate[i]
      result.unshift(decimal)
    }
    return console.info(`El número binario ${number} en decimal es: ${result.reduce((a, b) => a + b)}`)
  }
}

//Invocación de funciones...
//binaryToDecimal(100, 2)
//binaryToDecimal(1100100, 2)