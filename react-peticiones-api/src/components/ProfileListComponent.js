import React from 'react'
import '../styles/ProfileList.css'
import tw_logo from '../images/twitter.png'

class ProfileList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {this.props.profiles.map(profile => {
                    return(
                        <li key={profile.id} className='Profile__section-name-list'>
                            <img src={profile.image} className='Profile__avatar-list'/>
                            <div>
                                {profile.name}
                                <br/>
                                {profile.origin.name}
                                <br/>
                                <img src={tw_logo} className="tw__logo"/>
                                <span className="twitter_blue_font">{profile.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ProfileList;