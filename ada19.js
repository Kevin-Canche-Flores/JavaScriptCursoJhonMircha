//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

//Comienzo de la función.......
const nameValidate = (name = undefined) => {
  //Validaciones
  if (!name) return console.info("No ha ingresado un nombre.");

  if (typeof name !== "string")
    return console.error("El dato ingresado no es valido.");

  if(name.length === 1) return console.error(`${name} no puede ser un nombre.`);

  if(name.length === 1) return console.error('El nombre no puede ser de un caracter.');

  if(name.length > 100) return console.error('El nombre NO puede ser mas de 100 caracteres.')
  //...................................................................................................................................................
  const regex = /^([A-Z])([a-zA-Z]{2,49})$/;
  let valido = true;
  let nameSinPunto = removePointEnd(name);
  let nameClean = removeAccents(nameSinPunto);
  let nameCut = nameClean.split(" ");

  for (word of nameCut) {
    if (!regex.test(word)) {
      valido = false;
      break;
    }
  }

  return console.info(
    valido === true
      ? `${nameSinPunto} es un nombre valido.`
      : `${nameSinPunto} es un nombre invalido.`
  );
};

//Removiendo punto final...
const removePointEnd = (string) => {
  return string.replace(/\.$/, "");
};

//Remplaza palabras con acento o tildes...
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");
};

// nameValidate('Kevin Abdiel Canche Flores');
// nameValidate('Jonathan MirCha');
// nameValidate({});
// nameValidate([]);
// nameValidate('');
// nameValidate(123456);
// nameValidate('Mamungkukumpurangkuntjunya Hill');

