import React from 'react';
import ReactDOM from 'react-dom';
//Importar el componente Profile
import Profile from './components/ProfileComponent';

//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'

const container = document.getElementById('app');

ReactDOM.render(<Profile /> , container);
