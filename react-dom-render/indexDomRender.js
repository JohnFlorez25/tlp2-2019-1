
// lo primero es importar dos herramientas React y ReactDom
import React from 'react'; 
//analogo a create element
import ReactDOM from 'react-dom'; 
//analogo a appendCHild

// const element = <h1>Helo, Poli Conference con React</h1>

// const container = document.getElementById('app');

// ----------------------------EJERCICIO PARA EXPLICAR JSX-----------------------------

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir a Platzi'
// );
// const name = 'Stephanie';
// const sum = () => 3 + 3;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy, {undefined}</h1>;

const jsx = (
    <div>
      <h1>Hola, soy Richard</h1>
      <p>Soy ingeniero frontend.</p>
    </div>
  );
  
  const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Richard'),
    React.createElement('p', {}, 'Soy ingeniero de la web.')
  );
  const container = document.getElementById('app');
  
  // ReactDOM.render(__qué__, __dónde__);


//el appendchILD TIENE SU REACTDOM, haciendo uso de su metodo render, y render
//va tomar dos argumentos, primero que quiero renderizar y el segundo donde

ReactDOM.render(element, container);

//react es javascript, debemos tenerlo siempre en cuenta




