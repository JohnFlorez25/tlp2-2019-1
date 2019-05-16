<h1>Qué es un componente?</h1>

Los componentes en React son bloques de construcción.
Las aplicaciones hechas con React lo podemos interpretar haciendo referencia a las figuras de Lego.
Junta varias piezas __(componentes)__ y puedes construir un website tan pequeño o tan grande como quieras.

Los componentes serán barras de búsquedas, enlaces, encabezados, el header, el nav y demás elementos que identificamos en una página web.

<h2>”Componente” vs “elemento""</h2>

Recordemos aspectos de la programación orientada a objetos para definir este concepto:

>**Clase:** una clase es una plantilla, molde o modelo para poder crear un objeto, es decir, esta plantilla contiene las especificaciones de lo que deseo realizar. (Símil a Componente)
>
>**Objeto:** al tener una plantilla establecida (una clase) puedo empezar a crear multiples objetos de diferentes formas, teniendo en cuenta los atributos y métodos que me brinda la clase definida. (Un objeto es una instancia de una clase). (Símil a Elemento)

Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

<h2>Identificación de componentes</h2>

Para identificar los componentes debemos hacernos las siguientes preguntas: 

- **¿Qué elementos se repiten?** Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad.

- **¿Qué elementos cumplen una función muy específica?** Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

<h2>Aspectos a tener en cuenta al crear componentes</h2>

1. Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta. `components`
2. Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
3. El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

<h2>Creando nuestra unidad básica (Componente) en react</h2>

Es importante tener clara la estructura básica para crear un componente,
estos tienen las siguientes particularidades:
1. Como vamos a usar JSX debemos importar de React.
2. Un componente es una clase así que lo debemos definir con la palabra reserva `class``
3. Al ser un archivo `.js` debemos asegurar exportar este componente`export default``
4. Todo componente requiere por lo menos un metodo que es obligatorio y es **render**, el cual define el resultado que vamos a ver en pantalla, en este definimos lo que vamos a **retornar**.

Por ejemplo, si tengo un componente llamado Profile, su estructura básica sería:
```javascript
class Profile extends React.Component {
    render(){
        return(
            //Mi código JSX
            <h1>Estoy en mi componente Profile</h1>
        )
    }
}

export default Profile;
```

Para poder mostrar este componente debemos importarlo para su uso, para nuestro caso en la clase index.js se vería así:

>Nota: Recuerda que para mostrar nuestro componente debemos ponerlo en el ReactDOM.render debemos tener cuidado ya que al pasar el componente debemos mandarlo como un elemento! asi que nuestro componente debe ser enviado por parametro haciendo uso de `</>`
>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
//Importar el componente Profile
import Profile from './components/Profile';

const container = document.getElementById('app');

ReactDOM.render(<Profile /> , container);
```

<h2>Aplicar estilos a nuestros componentes</h2>
Tener en cuenta las siguientes consideranciones al momento de querer aplicar estilos:
1. Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
2. Para usar los estilos es necesario importarlos con import
3. React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino `className`
4. Es posible utilizar Bootstrap con React, sólo debe ser instalado con `npm install bootstrap` y debe ser importado en el index.js
5. Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js



__Que son los Props?__

Los props que es la forma corta de **properties** son argumentos de una función y en este caso serán los atributos de nuestro componente, esto es el analogo a los atributos que tiene una etiqueta html, por ejemplo, al crear una imagen usamos la etiqueta `<img>` y colocamos algunos atributos tales como `class`, `src` y `alt` obteniendo algo así:
```html
<img class="Profile__logo" src={logoPoli} alt="Logo del Poli"/> 
```
Estos **atributos de la etiqueta** son nuestros **props en react**

Estos props salen de una variable de la clase que se llama `this.props` y los valores son asignados directamente en el `ReactDOM.render().` Por ejemplo:

```javascript
ReactDOM.render(
<ProfileProps 
    firstName = 'Elizabeth' 
    lastName = 'Mejia Perez' 
    jobTitle = 'Software Architect'
    twitter = 'eliMeji'
    avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
    /> , 
    container);
```


