import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/ProfileComponent';
import ProfileNew from './pages/ProfileNew';
//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'

const container = document.getElementById('app');


ReactDOM.render(<ProfileNew />, container);

// ReactDOM.render(
// <Profile 
//     firstName = 'Elizabeth' 
//     lastName = 'Mejia Perez' 
//     jobTitle = 'Software Architect'
//     twitter = 'eliMeji'
//     avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
//     /> , 
//     container);