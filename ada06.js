//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

//Variables
let string = '   Hola Mundo adios Mundo Mundo   '
let word = 'mundo'


//Función.
const wordToCounter = ( string = undefined, wordSearch = undefined ) => {
  //Validaciones
  if(!string) return console.warn( 'No ha ingresado una cadena de texto.' );

  if(typeof string != 'string') return console.error( 'El dato ingresado, no es una cadena de texto, por favor ingrese un texto.' );

  if(!wordSearch) return console.warn( 'No ha ingresado la palabra a buscar en el texto.' )

  if(typeof wordSearch != 'string') return console.error( 'El dato que ingreso no es una palabra, por favor ingrese una palabra a buscar.' )

  const lowerCaseString = string.trim().toLowerCase()
  const cut = lowerCaseString.split(' ')
  let count = 0;
  
 
  for (let i = 0; i < cut.length; i++)
    if (wordSearch === cut[i]) {
      count++
    }
    return console.log( count === 1
    ? `La palabra "${wordSearch}" se ha repetido en la frase ${count} vez.`
    : count > 1 
    ? `LA palabra "${wordSearch}" se ha repetido en la frase ${count} veces.`
    : `LA palabra "${wordSearch}" NO se ha encontrado en la frase.`)

}

//Invocación de función.
wordToCounter( string, word )