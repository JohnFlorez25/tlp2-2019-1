import React from 'react';
import logoPoli from '../images/logoPoli.png';
import '../styles/ProfileStyles.css'

class Profile extends React.Component {
    render(){
                
        return(
            <div className="Profile">
                <div className="Profile__header">
                    <img className="Profile__logo" src={logoPoli} alt="Logo del Poli" />
                </div>
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src={this.props.avatarUrl} alt="Avatar" />
                    <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>
                <div className="Profile__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <span> @{this.props.twitter} </span>
                </div>
                <div className="Profile__footer">
                    <p>#PoliAsamblea</p>
                </div>
            </div>
        )
    }
}

export default Profile;