import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import logo from '../images/logo.png'
import '../styles/NavBarStyle.css'

class NavBarComponent extends Component{
    render() {
        return(
             <div className="Navbar">
                <div className="container-fluid">
                    <Link className="NavBar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="Navbar__brand-text" >Poli Asamblea</span>
                    </Link>
                </div>
             </div>
        )
    }
}

export default NavBarComponent;