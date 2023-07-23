//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validateEmail = (email = undefined) => {
  //Validaciones de entrada...
  if (!email) return console.warn('NO ha ingresado un correo a validar.');

  if (typeof email !== "string") return console.error(`${email}, No es un correo electrónico.`);

  //Creación del patrón de correo electrónico...
  const regex = new RegExp(
    "^([a-zA-Z0-9_\\-\\.]+)@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z]{2,})$"
  );

  //Validación de correo y retorna si es valido o no....
  return console.info(
    regex.test(email) ? "Correo Valido." : "Correo Invalido."
  );
};

// validateEmail()
// validateEmail(123456)
// validateEmail(true)
// validateEmail({})
// validateEmail('kevin')
// validateEmail('kevin@gamlail')
// validateEmail('correo@outlook.')
// validateEmail("jonmircha@gmail.com");