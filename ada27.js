/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo,
director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. ------check-------
  - Valida que el título no rebase los 100 caracteres. ------check-------
  - Valida que el director no rebase los 50 caracteres. ------check-------
  - Valida que el año de estreno sea un número entero de 4 dígitos. ------check-------
  - Valida que el país o paises sea introducidos en forma de arreglo. ------check-------
  - Valida que los géneros sean introducidos en forma de arreglo. ------check-------
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*. ------check-------
  - Crea un método estático que devuelva los géneros aceptados*. ------check-------
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición. ------check-------
  - Crea un método que devuelva toda la ficha técnica de la película. ------check-------
  - Apartir de un arreglo con la información de 3 películas genera 3  
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir,
  Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

// Inicio del programa...

// --------------------------------------------FUNCIONES SECUNDARIAS PARA LAS VALIDACIONES DE LOS DATOS INTRUDUCIDOS A LA CLASE MOVIE-----------------------------------------------
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
const validateId = ( cadena ) => {
  if(!cadena) throw new Error("No ha ingresado el id de la pelicula.")

  if(typeof cadena !== 'string') throw new Error(`${cadena}, No es un string.`)

  const pattern = new RegExp(/tt\d{7}$/)
  if(!pattern.test(cadena)) throw new Error("El ID del IMDB debe tener 9 caracteres, los primeros 2 caracteres deben ser 'tt' y los 7 restantes numeros.")

  return cadena
}

// - Valida que el título no rebase los 100 caracteres.
const validateTittle = ( cadena ) => {
  if(!cadena) throw new Error("No ha ingresado el título de la película.")

  if(typeof cadena !== 'string') throw new Error(`${cadena}, No es un string.`)

  if(cadena.length > 100) throw new Error(`El título: ${cadena}, NO puede ser mayor a 100 caracteres.`)

  return cadena
}

// - Valida que el director no rebase los 50 caracteres.
const validateDirector = ( cadena ) => {
  if(!cadena) throw new Error("No ha ingresado el nombre del director.")

  if(typeof cadena !== 'string') throw new Error(`${cadena}, No es un string.`)

  if(cadena.length > 50) throw new Error(`El nombre del director NO puede ser mayor de 50 caracteres.`)

  const validateName = cadena.slice().split('').some(element => { return new RegExp(/[\d!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/, 'ig').test(element) })
  if(validateName) throw new Error(`${cadena}, No es un nombre valido, por favor ingrese un nombre sin números y sin caracteres especiales.`)

  return cadena
}

//- Valida que el año de estreno sea un número entero de 4 dígitos.
const validatePremiere = ( year ) => {
  if(!year) throw new Error('NO se ingreso el año de estreno.')

  if(typeof year !== 'number') throw new Error(`${year}, NO es de tipo númerico el dato ingresado.`)

  if(!(new RegExp(/^\d{4}$/).test(year))) throw new Error(`${year} invalido, El año de estreno debe estar conformado por 4 dígitos.`)

  return year
}

// - Valida que el país o paises sea introducidos en forma de arreglo y Valida que los géneros sean introducidos en forma de arreglo.
const validateEntriesFormOfArray = ( array ) => {
  if(!array) throw new Error('No ingreso un Arreglo')

  if( !(array instanceof Array) ) throw new Error(`${array},estos valores deben ser introducidos en forma de arreglo.`)

  //Validación por medio de filter en caso de que un valor sea diferente de un string...
  const foundErrors = array.slice().filter( (element) => typeof element !== 'string')

  if(foundErrors == 1) throw new Error(`${foundErrors}, No es un valor valido.`)
  if(foundErrors > 1) throw new Error(`${foundErrors.join(', ')}, No son valores validos.`)

  return array
}

//Valida que los géneros introducidos esten dentro de los géneros aceptados*.
const validateAcceptedGenres = ( array ) => {
 
  //Tomamos el método estatico de la clase para hacer la validación de los generos.
  const genresApproved = Movie.genresAccept().map(genre => genre.toLowerCase())
  //Pasamos a minuscula las datos del array
  const genres = array.slice().map(genre => genre.toLowerCase())
  //Para el manejo de errores.
  const invalidGenres = []
 
  genres.map( genre => {
    if( !(genresApproved.includes(genre)) ) invalidGenres.push(genre)
  }) 

  //Validación si se encontro errores y en dado caso que si se encuentre enviarlo al array de errores.
  if(invalidGenres.length == 1 ) throw new Error(`El genero ${invalidGenres.toString()} no es abmitido en la lista de los generos.`)
  if(invalidGenres.length > 1 ) throw new Error(`Los generos ${invalidGenres.join(', ')}., No son abmitidos.`)
  
  //Si todo sale bien se devuelve el array.
  return array
}

//Valida que la calificación sea entre 1 y 10 pudiendo ser decimal.
const validateRange = ( number ) => {
  if( typeof number !== 'number'  ) throw new Error(`${number}, El dato introducido no es de tipo número.`)

  let num = parseFloat(number)
  if( !(num > 0 && num <= 10) ) throw new Error('Rango de calificación proporcionado invalido, rango de números validos son entre el número 1 y número 10.')

  const regex = /^(10(\.0)?|[1-9](\.\d)?)$/;
  if( !(regex.test(num) )) throw new Error('Calificación invalida no se encuentra en el rango de entre 1 y 10 pudiendo ser decimal.')

  return number
}

/*-------------------------------------------------------------------------------------------CREACIÓN DE LA CLASE------------------------------------------------------------------------------------------ */

class Movie {
  constructor({id = undefined, tittle = undefined, director = undefined, premiere = undefined, countries = undefined, genres = undefined, qualification = undefined}){
    // Creacion de Array para el manejo de errores...
    this.errores = []
    
    // Función para validar que este correcta la variable id y envuelto en trycatch para hacer un mejor manejo de errores.
    try {
    //validateId(id)
    this.id = validateId(id)
    } catch (error) {
    this.errores.push(error)
    }
    // Función para validar que este correcto el titulo.
    try {
     // validateTittle(tittle)
      this.tittle = validateTittle(tittle)
    } catch (error) {
      this.errores.push(error)
    }
    //Funcion para validar que el nombre del director no rebase los 50 caracteres.
    try {
      validateDirector(director)
      this.director =  validateDirector(director)
    } catch (error) {
      this.errores.push(error)
    }
    // Función para validar el año de estreno sea un número y sea conformado por 4 digitos.
    try {
     // validatePremiere(premiere)
      this.premiere = validatePremiere(premiere)
    } catch (error) {
      this.errores.push(error)
    }
    // Funcion para validar que las countries entren en forma de arreglo.
    try {
      //validateEntriesFormOfArray(countries)
      this.countries = validateEntriesFormOfArray(countries)
    } catch (error) {
      this.errores.push(error)
    }
    try{
    //1-Función para validar la entrada de géneros en formato de array
      validateEntriesFormOfArray(genres)
    //2-Valida que los géneros introducidos esten dentro de los géneros aceptados*.
    //  validateAcceptedGenres(genres)
      this.genres = validateAcceptedGenres(genres)
    } catch (error) {
      this.errores.push(error)
    }
    //Valida que la calificación sea entre 1 y 10 pudiendo ser decimal.
    try {
    //  validateRange(qualification)
      this.qualification = validateRange(qualification)
    } catch (error) {
      this.errores.push(error)
    }

    if (this.errores.length > 0) {
      console.error("No se pudo crear la clase Movie debido a los siguientes errores:");
      this.errores.forEach((error) => console.error(error));
      throw new Error("No se pudo crear la instancia de la clase Movie debido a errores en los datos proporcionados.");
    }
  }

  //Esta es la forma en la que se crea un metodo estatíco en JS....
  static genresAccept(){
   return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Snow', 'Thriller', 'War', 'Western']
  }

  ObtenerFichaTecnica(){
    return `ID : ${this.id}\n
            Título : ${this.tittle}\n
            Director : ${this.director}\n
            Premiere : ${this.premiere}\n
            Países : ${this.countries}\n
            Genero : ${this.genres}\n
            Calificación : ${this.qualification}\n
          `
  }

}

const peliculas = [
  {
    id: "tt0111171",
    tittle: "The Shawshank Redemption",
    director: "Frank Darabont",
    premiere: 1994,
    countries: ["Estados Unidos"],
    genres: ["Drama", "Crime"],
    qualification: 12.3
  },
  {
    id: "tt0071562",
    tittle: "The Godfather",
    director: "Francis Ford Coppola",
    premiere: 1972,
    countries: ["Estados Unidos"],
    genres: ["Crime", "Drama"],
    qualification: 9.2
  },
  {
    id: "tt0468569",
    tittle: "The Dark Knight",
    director: "Christopher Nolan",
    premiere: 2008,
    countries: ["Estados Unidos", "Reino Unido"],
    genres: ["Action", "Drama", "Crime"],
    qualification: 9.0
  }
];

const intanciasPeliculas = []

for(let [indiceMovie, ValorMovie] of peliculas.entries()){
  try {
    const peli = new Movie (ValorMovie)
    console.log(`Pelicula No. ${indiceMovie + 1}\n
                              ${peli.ObtenerFichaTecnica()}`)
    intanciasPeliculas.push(peli)

  } catch (error) {
    console.log(`Pelicula No. ${indiceMovie + 1} No se pudo crear.\n
    ${error}`
    )}
}
