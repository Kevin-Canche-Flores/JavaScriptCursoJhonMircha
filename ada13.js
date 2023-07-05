//13)Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá impar.

    const isPar = (number = undefined) => {
      if (!number) return console.warn("No ha ingresado un número a validar.");

      if (typeof number != "number")
        return console.error("NO ha ingresado un número.");

      return number % 2 === 0
        ? console.info(`El número ${number} es par.`)
        : console.info(`El número ${number} es impar.`);
    };
    
   isPar({})              //NO ha ingresado un número.
   isPar([])              //NO ha ingresado un número.
   isPar(true)            //NO ha ingresado un número.
   isPar(false)           //No ha ingresado un número a validar.
   isPar('asdffggkdnc')   //NO ha ingresado un número.
   isPar('125455')        //NO ha ingresado un número.
   isPar(0)               //No ha ingresado un número a validar.
   isPar(101)             //impar
   isPar(10)              //par
   isPar('101')           //NO ha ingresado un número.