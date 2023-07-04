//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como producto de todos los números enteros positivos desde 1 hasta n) pe. miFuncion(5) devolverá 120.

//Función...
const factorial = (number = 0 ) => {
  if(isNaN(number)) return console.error('El dato ingresado no es un número.')

  if(number === 0) return console.warn( 'El valor ingresado no puede ser 0.' )

  if(Math.sign(number) === -1) return console.error( 'El número ingresado debe ser positivo.' )
  
  if(Number.isInteger(number) === false ) return console.warn( 'El número ingresado debe ser de tipo entero.' )

  let x = 1
  let y = null
  for(let i = 1; i < number; i++){
    y = i + 1;
    z = x * y
    x = z
    
  }
  console.info(z)
}

//Prueba de la función....
factorial(5) // 120
factorial(4) // 24
factorial("Hola mundo lalala") //El dato ingresado no es un número.
factorial(12.231) //El número ingresado debe ser de tipo entero.
factorial(-1888) //El número ingresado debe ser positivo.
factorial(true)  //El número ingresado debe ser de tipo entero.