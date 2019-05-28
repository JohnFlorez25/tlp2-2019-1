import React from 'react';
import NavBarComponent from '../components/NavBarComponent'
import ProfileComponent from '../components/ProfileComponent'
import ProfileForm from '../components/ProfileFormComponent'
import '../styles/ProfileNew.css'

class ProfileNew extends React.Component{
    state = {form: {
        firstName:'',
        lastName:'',
        jobTitle:'',
        email:'',
        twitter:''
    }};

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
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
                        <div className="col-6">
                            <ProfileComponent     
                                        firstName = {this.state.form.firstName} 
                                        lastName = {this.state.form.lastName} 
                                        jobTitle = {this.state.form.jobTitle} 
                                        twitter = {this.state.form.twitter}
                                        email = {this.state.form.email}  
                                        avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                            />
                        </div>
                        <div className="col-6">
                            <ProfileForm 
                                onChange={this.handleChange}
                                formValues={this.state.form} 
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProfileNew;