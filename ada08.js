// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, Pe. miFuncion("xyz1,xyz2,xyz3,xyz4 y xyz5", "xyz") devolverá "1,2,3,4 y 5"
    //Variables...
    let cadena = 'Xyz1,xyz2,xyz3,xyz4 y xyz5'
    
    
    //Funciones...
    const deletePattern = ( string = undefined, pattern = undefined ) => {

         //Validaciones...

        if( !string ) return console.warn (
        'NO ha ingresado una cadena de texto.' )
        
        if( typeof string != 'string' ) return console.error (
        'El dato ingresado no es una cadena de texto.' )
        
        if( !pattern ) return console.warn (
            'NO ha ingresado el patrón a eliminar.')
            
        if ( typeof pattern != 'string' ) return console.error (
            'El patron ingresado no es una valor valído.')
        //Utilizamos constructor regExp para usar como patron el pattern
        //adicional añadimos las bandera a aplicar ('g = global, etc..')
        const regex = new RegExp( pattern, 'ig' );
            
        return console.info( string.replace( regex, '' ) )
    }
    
    deletePattern( cadena, 'xyz')