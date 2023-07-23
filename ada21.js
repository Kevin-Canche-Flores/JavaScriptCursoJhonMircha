//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const duplicated = (arrayNumerico = undefined) => {
  if (!arrayNumerico) return console.warn("NO ingreso un array.");

  if (!(arrayNumerico instanceof Array))
    return console.error(`${arrayNumerico}, NO es un array.`);

  //Aplicamos el mmetodo every para verificar si el array contiene solamente NUMEROS, de lo contrario retornamos un error.
  const areAllNumbers = arrayNumerico.every((number) => typeof number === "number");
  if (!areAllNumbers) return console.error("Al menos un valor del array no es numérico.");

  const doble = arrayNumerico.map((number) => number * number)
  return console.info(doble);
};

//Invocación de la función...
duplicated(new Array(1, 2, 3, 4, 5));
duplicated();
duplicated({});
duplicated('hola');