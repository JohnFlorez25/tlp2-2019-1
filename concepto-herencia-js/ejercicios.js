/*

                        Herencia

------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro {
    constructor(materia, calificaciones){
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    calcularPromedio(){

        let sumaTotal = 0;

        for(let i=0; i<this.calificaciones.length; i++){
            sumaTotal += this.calificaciones[i];
        }

        return (sumaTotal/this.calificaciones.length);
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const profe_1 = new MaestroDeFisica('fisica', [7,8,5,1,10,5,2,3,5], 8);
const profe_2 = new MaestroDeMusica('musica', [9,10,9,8,9,9,6,7,10], 2);

/* console.log( profe_1.calcularPromedio() );
console.log( profe_2.calcularPromedio() ); */

/*
------------------------------------------------------------
2.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------
*/

/*
------------------------------------------------------------
3.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
------------------------------------------------------------
*/

/* const lavadora = new Lavadora(7800, 'blanco', 20, 6);
lavadora.setConsumoEnergetico(100);
console.log( lavadora.precioFinal()); */

/*
------------------------------------------------------------
4.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros 
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia
------------------------------------------------------------
*/

/*
------------------------------------------------------------
5.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
------------------------------------------------------------
*/
