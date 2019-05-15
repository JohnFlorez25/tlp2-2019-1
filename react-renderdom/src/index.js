import React from 'react'; 
import ReactDOM from 'react-dom'; 

const name = 'John Faber';
const profesion = 'Ingeniero Informático';

const jsx = (
    <div>
      <h1>Hola, soy {name}</h1>
      <p>Profesion: {profesion}</p>
    <h5>Estoy desde JSX!!! =D</h5>
    </div>
);

const element = React.createElement(
'div',
{},
React.createElement('h1', {}, `Hola, soy ${name}`),
React.createElement('p', {}, `Profesion: ${profesion}`),
React.createElement('h5', {}, 'Estoy desde React.createElement =(')
);
const container = document.getElementById('app');
  
// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(element, container);

//ReactDOM.render(jsx, container);