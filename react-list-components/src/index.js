import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'
import ProfileNew from './pages/ProfileNew';
import Profiles from './pages/Profiles'




const container = document.getElementById('app');


ReactDOM.render(<Profiles />, container);