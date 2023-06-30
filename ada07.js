//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//Variables...
let word = "SomOs o no somos";
let word2 = "  áMor";
let word3 = "dabale arroz a la zorra el abad";
let word4 = "¿Acaso hubo búhos acá?";
let word5 = "Son robos o sobornos";
let word6 = "reconocer";
let word7 = "Son robos o sobornos";
let word8 = "Son robos o sobornos";
let string = '     H3¡¡l""}}aá,   + m!!und++o*';
let string25 = "además, canción, cañfé, pared, ´árbol, lápiz, mártir";

//Funciones...
//Función Principal...
const isAPalindrome = (string = undefined) => {
  //Validaciones...
  if (!string) return console.warn("NO ha ingresado una palabra o frase a validar.");

  if (typeof string != "string") return console.error("El dato ingresado NO es una cadena de texto.");

  const stringWithoutTildes = removeAccents(string);
  const newString = removeSpecialChars(stringWithoutTildes);
  const str = newString.toLowerCase();
  const invertedStr = str.split("").reverse().join("");

  return console.log(str === invertedStr
      ? `${string}, si es un palíndromo.`
      : `${string}, no es un palíndromo.`
  );
};

//Funciones secundarias...

//Remplaza palabras con acento o tildes...
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");
};

//Remueve todo tipo de caracteres
//especiles incluyendo espacios en blanco...
const removeSpecialChars = (string) => {
  return string.replace(/[^a-zA-Z0-9]/gi, "");
};

//Llamada de las funciones..
// isAPalindrome ( string )
// isAPalindrome ( word2 )
// isAPalindrome ( string25 )
// isAPalindrome ( word )
// isAPalindrome ( word3 )
isAPalindrome(word4);
isAPalindrome(word5);
isAPalindrome(word6);
