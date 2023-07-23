//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const minMax = (arrayNumerico = []) => {
  if (arrayNumerico.length === 0) return console.warn("NO ha ingresado un array a validar.");

  if (!(arrayNumerico instanceof Array))
    return console.error(`${arrayNumerico}, NO es un array.`);

  //Aplicamos el mmetodo every para verificar si el array contiene solamente NUMEROS, de lo contrario retornamos un error.
  const areAllNumbers = arrayNumerico.every((number) => typeof number === "number");
  if (!areAllNumbers) return console.error("Al menos un valor del array no es numérico.");

  let min = arrayNumerico[0]
  let max = arrayNumerico[0]

  arrayNumerico.forEach(number => {
    if(number < min) min = number
    if(number > max) max = number
  })

  console.log([max, min]) 
}

// minMax( new Array(1, 4, 5, 99, -66) )
// minMax()
// minMax(['hola', 'mundo'])
// minMax(123456)
// minMax({})
// minMax('Hola mundo')
// minMax(true)