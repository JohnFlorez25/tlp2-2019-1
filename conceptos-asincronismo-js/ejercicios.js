/*

                        Callbacks

------------------------------------------------------------
1.- Muestra un mensaje en consola mediante un callback 
------------------------------------------------------------
*/


//mostrarMensaje(callback);


/*
------------------------------------------------------------
2.- Crear una función de orden superior que reciba como
    argumento un mensaje y callback. Según el callback que
    se pase como argumento, la función de orden superior
    debe mostrar el mensaje en un console.warn o en un console.log
------------------------------------------------------------
*/


/* ordenSuperior('Este mensaje va en un console.warn!', escribirWarning);
ordenSuperior('Este mensaje va en un console.log!', escribirLog); */

/*
------------------------------------------------------------
3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.
------------------------------------------------------------
*/



/* console.log( efectuarOperacion(5,3, suma) );
console.log( efectuarOperacion(5, 3, resta) );
console.log( efectuarOperacion(5, 3, multiplicacion) ); */

/*
------------------------------------------------------------
4.- Escribe una funcion de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayusculas o en minusculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO
------------------------------------------------------------
*/


/* console.log( cambiarFormato('PejeLagarto', mayus) );
console.log( cambiarFormato('PejeLagarto', minus) ); */

/*
------------------------------------------------------------
5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
    EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) 
    mediante un callback
------------------------------------------------------------
*/

// console.log(arregloFinal);