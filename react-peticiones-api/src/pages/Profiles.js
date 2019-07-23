import React from 'react';
import { Link } from 'react-router-dom'

import ProfileList from '../components/ProfileListComponent';
import confLogo from '../images/logoPoli.png'
import '../styles/Profiles.css'
import axios from 'axios'
class Profiles extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            listProfiles: []
        };

    }

    componentDidMount(){ 
        //https://rickandmortyapi.com/api/character/
        axios.get('http://localhost:5700/api/profiles')
        .then(res =>{
            this.setState({
                listProfiles: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <React.Fragment>
                <div className="Profiles">
                    <div className="Profiles__hero">
                        <div className="Profiles__container">
                                <img className="Profiles_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div> 
                <div className="Profiles_container">
                    <div className="Profiles__buttons">
                        <Link to="/profiles/new" className="btn btn-primary">Nuevo Perfil</Link>
                    </div>
                </div>
                <div className="Profiles__list">
                    <div className="Profiles_container"> 
                        <ProfileList profiles = {this.state.listProfiles} /> 
                    </div>

                </div>
            </React.Fragment>
            
        )
    }
}

export default Profiles