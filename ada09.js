//Programa una función que obtenga un número aleatorío entre 501 y 600.

const numberRandom = () => {
  return console.info (`El número aleatorio comprendido entre 501 y 600 es: ${( Math.floor( Math.random() * (600 - 501 + 1 ) +500 ))}`)
}

numberRandom()
numberRandom()
numberRandom()