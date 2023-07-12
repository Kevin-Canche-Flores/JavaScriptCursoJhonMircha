//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

//Función...
const finalCost = (price = undefined, discount = undefined) => {
  if (!price) return console.warn("No ha ingresado una cantidad.");

  if( typeof price !== 'number' ) return console.error( `${price} es un dato invalido, por favor ingrese un dato valido.` )

  if(price === 0) return console.info(`${price} No se le puede aplicar descuento.`)

  if(price < 0) return console.error(`NO se aceptan valores negativos.`)

  if (!discount) return console.warn("No ha ingresado el descuento a aplicar.");

  if( typeof discount !== 'number' ) return console.error(`${discount} es un dato invalido, por favor ingrese un dato valido.` )

  if(discount === 0) return console.info(`${discount}% no aplica ningun descuento.`)

  if(discount < 0) return console.error(`Solo se acepta valores positivos.`)

  return console.info(`La cantidad ${price} con un descuento del ${discount}% queda en ${price - (price * discount / 100 )}`)

}

//finalCost(1000, 20)
//finalCost(100, 20)
//finalCost(0, 20)
//finalCost('12345', 20)
//finalCost(1000)
//finalCost(1000, 0)
//finalCost(1000, -20)
