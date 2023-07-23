//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
//Importamos las funciones previas que habiamos utlizado en el ejercicio numero 7, remover palabras con acentos y luego remover los caracteres especiales..................

const vowelCounter = ( word = undefined ) => {
  //Validate word
  if(!word) return console.info('No ha ingresado alguna palabra o frase.')

  if(typeof word !== 'string') return console.error(`${word} NO es una palabra o frase.`)
 // .........................................................................................................................................................................
  //Validate vocals
  const regex = /[aeiou]/;
  let vowel = 0;
  let consonant = 0;
  //deleting blanks in laterals
  word = word.toLowerCase().trim();
  //deleting words with accents
  const wordRemoveAccent = removeAccents(word);
  //deleting specials chars
  const wordClean = removeSpecialChars(wordRemoveAccent);

  for (char of wordClean) regex.test(char) ? vowel++ : consonant++;

  if (vowel === 0 && consonant === 0) {
    return console.info(`La frase ${word} no contiene Vocales ni Consonantes.`);
  } else if (vowel === 0 && consonant === 1) {
    return console.info(
      `La frase ${word} no contiene Vocales pero tiene ${consonant} Consonate.`
    );
  } else if (vowel === 0 && consonant > 1) {
    return console.info(
      `La frase ${word} no contiene Vocales pero tiene ${consonant} Consonates.`
    );
  } else if (vowel === 1 && consonant === 0) {
    return console.info(
      `La frase ${word} contiene ${vowel} Vocal pero no tiene Consonates.`
    );
  } else if (vowel === 1 && consonant === 1) {
    return console.info(
      `La frase ${word} contiene ${vowel} Vocal y ${consonant} Consonate.`
    );
  } else if (vowel === 1 && consonant > 1) {
    return console.info(
      `La frase ${word} contiene ${vowel} Vocal y ${consonant} Consonates.`
    );
  } else if (vowel > 1 && consonant === 0) {
    return console.info(
      `La frase ${word} contiene ${vowel} Vocales y ${consonant} Consonates.`
    );
  } else if (vowel > 1 && consonant > 1) {
    return console.info(
      `La frase ${word} contiene ${vowel} Vocales y ${consonant} Consonates.`
    );
  } else if (vowel > 1 && consonant === 1) {
    return console.info(
      `La frase ${word} contiene ${vowel} Vocales y ${consonant} Consonate.`
    );
  } else {
    return console.error("Se ha producido un error, reintente de nuevo.");
  }
}
//Funciones secundarias...
//Remplaza palabras con acento o tildes...
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");
};

//Remueve todo tipo de caracteres incluyendo números...
//especiales incluyendo espacios en blanco...
const removeSpecialChars = (string) => {
  return string.replace(/[^a-zA-Z]/gi, "");
};

//Aplicación de la función...
vowelCounter('')
vowelCounter({})
vowelCounter([])
vowelCounter(123)
vowelCounter(true)
vowelCounter('Hola mundo')