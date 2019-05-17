import React, { Component } from 'react';
import logo from '../images/logo.png'
import '../styles/NavBarStyle.css'

class NavBarComponent extends Component{
    render() {
        return(
             <div className="Navbar">
                <div className="container-fluid">
                    <a className="NavBar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="Navbar__brand-text" >Poli Asamblea</span>
                    </a>
                </div>
             </div>
        )
    }
}

export default NavBarComponent;