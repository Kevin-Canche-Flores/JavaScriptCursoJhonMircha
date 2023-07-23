//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const classifyNumbers = (arrayNumerico = []) => {
  if (arrayNumerico.length === 0) return console.warn("NO ha ingresado un array a validar.");

  if (!(arrayNumerico instanceof Array)) return console.error(`${arrayNumerico}, NO es un array.`);

  //Aplicamos el mmetodo every para verificar si el array contiene solamente NUMEROS, de lo contrario retornamos un console.error().
  const areAllNumbers = arrayNumerico.every((number) => typeof number === "number");
  if (!areAllNumbers) return console.error("Al menos un valor del array no es numérico.");

  const pares = []
  const impares = []

  arrayNumerico.forEach(number => {
    (number % 2 === 0)
    ? pares.push(number)
    :impares.push(number)
  })

  return console.info( {pares, impares} )
}
/*Validación de la función...
classifyNumbers([1,2,3,4,5,6,7,8,9,0])
classifyNumbers()
classifyNumbers('Hello world')
classifyNumbers(12456)
classifyNumbers(true)
classifyNumbers({})
classifyNumbers([2,2,2,2,2,2,2,2,2,,2,2,2,22,2,2])
*/