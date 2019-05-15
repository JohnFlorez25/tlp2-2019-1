
<h2>Renderizando nuestra APP en React</h2>

React al basar el desarrollo de apps en componentes, necesitamos crear elementos HTML que definan nuestro componente, por ejemplo `<div>, <p>, <img>`.

También necesitaremos indicar cuando se trata de componentes creados por nosotros con React, como puede ser un `<Image />, <List />`

<h3>Haciendo uso de React.createElement</h3>

Todo esto podemos hacerlo con JavaScript con los métodos que nos ofrece React como `React.createElement.` Para poder hacer uso de esta función debemos importar react:
```javascript
/*Cuando se importa esta biblioteca
podemos hacer uso de 
React.createElement análogo 
a document.createElement*/

import React from 'react'; 
```
Veamos un ejemplo:

>Nota: React.createElement cuenta de tres partes
-El elemento que voy a crear
-Los atributos que tiene
-El contenido que deseo mostrar
```javascript
React.createElement(
    elemento,
    atributos,
    contenido
)
```

Imagina que quieres crear un componente `<h1>` Con JavaScript en React sería algo así:

>

```javascript
const element = React.createElement(
    'h1', 
    {}, 
    `Hola, soy John`
);

const container = document.getElementById('app');
```

Ahora y si defino una variable llamada name y quiero que se muestre este nombre en el elemento a crear, lo puedo hacer? claro que sí!!! sería de la siguiente forma:

```javascript
const name = 'Elizabeth';
const element = React.createElement('h1'
, {

}, 
`Hola, soy ${name}`);

const container = document.getElementById('app');
```

Miremos otro ejemplo, si deseo Mostrar mi nombre y mi profesión todo ello debe estar en una etiqueta `div`el nombre en una etiqueta `h1`y la profesión en una etiqueta `p`, haciendo uso de `React.createElement` sería así:

```javascript
  const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy John'),
    React.createElement('p', {}, 'Ingeniero Informático')
  );

  const container = document.getElementById('app');
```

Notamos que se empieza a ver un poco complejo nuestro código con respecto a lo sencillo que sería en html realizarlo: 
```html
<div>
    <h1> Hola soy john </h1>
    <p> Ingeniero Informático </p>
</div>
```

Ahora veamos como se haría lo mismo pero empleando sintaxis JSX:

<h3>Qué es JSX?</h3>

JSX es una extensión de JavaScript creada por Facebook para poder ser implementada en **React**. Sirve de preprocesador _(Como Sass o stylus en CSS) y transforma nuestro código a JavaScript, puede parecer qe estamos mezclando nuestro código HTML dentro de ficheros JavaScript, pero en realidad esto se debe a que React es Declarativo lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

```javascript
const jsx = (
    <div>
      <h1>Hola, soy John</h1>
      <p>Ingeniero Informático</p>
    </div>
);
```
Como puedes ver es mucho más práctico y legible esta sintaxis. Es prácticamente como escribir HTML pero no estás escribiendo HTML, es JavaScript.

##Haciendo uso de ReactDOM
Para que logremos ver nuestro contenido debemos hacer uso de ReactDOM.render, para ello debemos importar otra biblioteca:

```javascript
/*Cuando se importa esta biblioteca podemos hacer 
uso de ReactDOM.render análogo a appentChild*/
import ReactDOM from 'react-dom'; 
```
y render va tomar dos argumentos, primero que quiero renderizar y el segundo argumento, donde lo quiero rendecir:

```javascript
ReactDOM.render(element, container);
```

React es javascript, debemos tenerlo siempre en cuenta


