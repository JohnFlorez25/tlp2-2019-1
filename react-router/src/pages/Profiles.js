import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../components/NavBarComponent';
import ProfileList from '../components/ProfileListComponent';
import confLogo from '../images/logoPoli.png'
import '../styles/Profiles.css'

class Profiles extends React.Component{

    state = {
        data: [
            {
                "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                "firstName": "Juan",
                "lastName": "Perez",
                "email": "juan_perez@gmail.com",
                "jobTitle": "Legacy Brand Director",
                "twitter": "JuanPerez22221-7573",
                "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
              },
              {
                "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                "firstName": "Maryem",
                "lastName": "Ruiz",
                "email": "myruiz@hotmail.com",
                "jobTitle": "Human Research Architect",
                "twitter": "myRuiz61545",
                "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
              },
              {
                "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                "firstName": "John",
                "lastName": "Florez",
                "email": "johnfloro@hotmail.com",
                "jobTitle": "National Markets Officer",
                "twitter": "JohnFloro96105",
                "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
              }
        ]
    }
    render(){
        return (
            <div>
                <Navbar />
                <div className="Profiles">
                    <div className="Profiles__hero">
                        <div className="Profiles__container">
                                <img className="Profiles_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div> 
                <div className="Profiles_container">
                    <div className="Profiles__buttons">
                        {/* Boton ancla, la ruta no existe aun, esto cambia cuando usamos
                        ReactRouter */}
                        <Link to="/profiles/new" className="btn btn-primary">Nuevo Perfil</Link>
                    </div>
                </div>
                {/* La lista que vamos a agregar debe de llegar de algun sitio lo que vamos a hacer
                es tener unos datos tipo mook (datos quemados) para tener nuestra lista de
                asistentes a la asamblea */}
                <div className="Profiles__list">
                    <div className="Profiles_container">   
                        <ProfileList profiles={this.state.data} />
                    </div>

                </div>
            </div>
            
        )
    }
}

export default Profiles