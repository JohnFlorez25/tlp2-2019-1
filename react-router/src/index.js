import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'
// Creamos un nuevo componente llamado APP es aca donde voy a tener
//Browser Router y voy a añadir mis rutas
import App from './components/App'




const container = document.getElementById('app');


ReactDOM.render(<App />, container);