// Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//Variables a probar.
let vacio = null
let frase = "Hola Mundo"
let number = 12345
let boolean = true
const array = [1, 2, 3, 4, 5];
const objeto = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

//Declaracion de la funcion
const contarCaracteres = ( text ) => {
  
  //Validando tipos de entrada de dato
  if(text === null || text == ""){
    return "No envio ni un dato, ingrese un dato por favor."
  }
  else if (typeof text === "string"){
    return text.length
  }
  else if (typeof text === "number" || typeof text === "boolean"){
    return "Error, el dato ingresado, no es un texto."
  }
  else if (Array.isArray ( text ) ){
    let convertirArray = text.join("")
    return convertirArray.length
  }
  else if (Object.prototype.toString.call(text) === '[object Object]'){
    let convertirObjeto = JSON.stringify(text)
    return convertirObjeto.length
  }
}

//Invocacion de la funcion
  console.log( contarCaracteres ( frase ) )