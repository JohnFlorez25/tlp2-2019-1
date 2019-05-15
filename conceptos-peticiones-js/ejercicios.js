/*
----------------------------------------------------------------
                        Peticiones
----------------------------------------------------------------
*/

// Módulo empleado para hacer peticiones http
const request = require('request');

/*
----------------------------------------------------------------
1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.

                    https://pokeapi.co/
----------------------------------------------------------------
*/

const URL_POKEMON = "http://pokeapi.co/api/v2/pokemon/103/";

/* request.get( URL_POKEMON, (error, response, body) => { 
    response.statusCode == 200 
    ? console.log(                          
        `Types: ` +                         
        JSON.parse(body)                    
            .types                          
            .map(type => type.type.name)    
    )                                       
    : console.log(error);                  
});*/              
                                            



/*
----------------------------------------------------------------
2.- Hacer una funcion que haga una peticion 
    (Ejemplo: peticionLibro(“i robot”);
    Buscar un libro y traer el o los autores del primer libro
    
        http://openlibrary.org/search.json?q=i+robot) 
----------------------------------------------------------------
*/


//peticionLibro("por quien doblan las campanas");


/*
----------------------------------------------------------------
3.- Hacer una petición por autor y devolver la lista de 
    sus libros

        http://openlibrary.org/search.json?author=asimov
----------------------------------------------------------------
*/


//peticionAutor('lovecraft');

/*
----------------------------------------------------------------
4.- Hacer una peticion y devolver el género de la banda deseada

    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
----------------------------------------------------------------
*/

/* request.get('http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse', (err, res, body) => {
    const respuesta = JSON.parse(body);
    const artista = respuesta.artists[0].strArtist;
    const genero = respuesta.artists[0].strGenre;
    console.log(`${artista} es de género ${genero}`);
}); */


/*
----------------------------------------------------------------
5.- Hacer una petición a la swapi a un personaje y obtener 
    sus películas.

                    https://swapi.co/
----------------------------------------------------------------
*/


/*
----------------------------------------------------------------
6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta hoy.

                    https://api.nasa.gov/
----------------------------------------------------------------
*/


/*
----------------------------------------------------------------
7.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un objeto con el nombre, sus moves, tipos, tamaño 
    y peso.

                      https://pokeapi.co/
----------------------------------------------------------------
*/

