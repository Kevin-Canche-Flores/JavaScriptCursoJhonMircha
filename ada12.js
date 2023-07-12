//12) Programa una función que determine si un número es primo (aquel que solo es divisible por si mismo y 1) o no, pe. miFuncion(7) devolvera true.

//Función...
const numberPrime = (number = undefined) => {
  if (!number) return console.warn("No ha ingresado un número.");

  if (typeof number != "number")
    return console.error("El dato ingresado NO es un número.");

  if (number === 0) return console.warn("Ingrese un número diferente de 0.");

  let boleano = false;

  for(let i = 2; i < number; i++){
    if(number % 2 === 0) boleano = true
    break
  }

  return boleano === false
    ? console.info(`El número ${number} es primo.`)
    : console.info(`El número ${number} no es primo.`);
};

//Verificar funciones...
// numberPrime(29)
//numberPrime('asd')
//numberPrime(0)
//numberPrime('string')
//numberPrime('123456')
//numberPrime(true)
//numberPrime(false)
//numberPrime(0)
//numberPrime({})
//numberPrime([])
