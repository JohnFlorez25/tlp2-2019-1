import React from 'react';

//traer el logo desde la carpeta de imagenes
import logoPoli from '../images/logoPoli.png';

//Importo los css a diferencia del logo no lo guardandolo en una variable, simplemente lo traemos
import "../styles/ProfileStyle.css"

class Profile extends React.Component {
    render(){
        return(
            <div className="Profile">
                <div className="Profile__header">
                    <img className="Profile__logo" src={logoPoli} alt="Logo del Poli" />
                </div>
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src="https://s3.us-east-2.amazonaws.com/eafitrequisitos/john.png" alt="Avatar" />
                    <h1 className="Profile__name">John Faber <br/> Florez Vasco </h1>
                </div>
                <div className="Profile__section-info">
                    <h3>Ingeniero Informático</h3>
                    <span> @johnfloro </span>
                </div>
                <div className="Profile__footer">
                    <p>#PoliAsamblea</p>
                </div>
            </div>
        )
    }
}

export default Profile;

