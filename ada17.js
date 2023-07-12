//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//Función...

const howYearsLastNow = (year = undefined, month = undefined, date = undefined) => {
  //Validaciones primarias.............
  if(year === undefined && month === undefined && date === undefined) return console.error('NO ha ingresado la fecha.')
  //Validación entrada del dato del año.............................................................................................
  if(!year) return console.info('No ha ingresado el año a validar.')

  if(typeof year !== 'number') return console.error(`'${year}' NO es un valor aceptado.`)

  //Validación de la entrada de dato del mes.......................................................................................
  if(!month) return console.info('No ha ingresado el mes a validar.')

  if(typeof month !== 'number') return console.error(`'${month}' NO es un valor aceptado.`)

  //Validación de entrada de dato del día...........................................................................................
  if(!date) return console.info('No ha ingresado el día a validar.')

  if(typeof date !== 'number') return console.error(`'${date}' NO es un valor aceptado.`)
 
  //Validacíon de la fecha con regex... 
  const regex = /^[1-9]?(\d{1}|\d{3})\/(0?[1-9]|1[0-2])\/(0?[1-9]|[1-2][0-9]|3[0-1])$/;
  const stringDate = year + '/' + month + '/' + date
  if(!regex.test(stringDate)) return console.error('Fecha Invalida, al menos un dato es incorrecto.')
  //Preparando las comparaciones de ambos años...
  const currentDate = new Date(stringDate)
  const yearToday = new Date(Date.now())
  
  return console.info(`Los años que han pasado desde ${currentDate.getFullYear()} hasta el día de hoy es de ${yearToday.getFullYear() - currentDate.getFullYear()} años.`)
}
/*
howYearsLastNow(1923,11,20)
howYearsLastNow(12,0,78)
howYearsLastNow('')
howYearsLastNow(1985,13,10)
*/
