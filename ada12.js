//12) Programa una función que determine si un número es primo (aquel que solo es divisible por si mismo y 1) o no, pe. miFuncion(7) devolvera true.

//Función...
const numberPrime = (number = undefined) => {
  if (!number) return console.warn("No ha ingresado un número.");

  if (typeof number != "number")
    return console.error("El dato ingresado NO es un número.");

  if (number === 0) return console.warn("Ingrese un número diferente de 0.");

  let verificar = number;
  if (Math.sign(number) === -1) verificar = number * -1;

  let count = 0;
  for (let i = verificar; i != 0; i--) {
    let cociente = verificar % i;
    if (cociente == 0) count++;
  }

  return count === 2
    ? console.info(`El número ${number} es primo.`)
    : console.info(`El número ${number} no es primo.`);
};

//Verificar funciones...
// numberPrime(29)
//numberPrime('asd')
//numberPrime(0)
//numberPrime(-29)
//numberPrime(-98)
//numberPrime('string')
//numberPrime('123456')
//numberPrime(true)
//numberPrime(false)
//numberPrime(0)
//numberPrime({})
//numberPrime([])