import React from 'react';
import NavBarComponent from '../components/NavBarComponent'
import ProfileComponent from '../components/ProfileComponent'
import header from '../images/logo.png'
import '../styles/ProfileNew.css'

class ProfileNew extends React.Component{
    render(){
        return(
            <div>
                <NavBarComponent />
                <div className="ProfileNew__hero">
                    <span className="ProfileNew__hero-text">
                        "Bienvenido a nuestro portal,
                        nos encanta que hagas parte de esta 
                        comunidad, SomosPoli!!
                    </span>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ProfileComponent     
                                        firstName = 'Elizabeth' 
                                        lastName = 'Mejia Perez' 
                                        jobTitle = 'Software Architect'
                                        twitter = 'eliMeji'
                                        avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProfileNew;