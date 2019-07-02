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
                            <img alt="avatar" src={profile.avatarUrl} className='Profile__avatar-list'/>
                            <div>
                                {profile.firstName} {profile.lastName}
                                <br/>
                                {profile.jobTitle}
                                <br/>
                                <img alt="logo-twiter" src={tw_logo} className="tw__logo"/>
                                <span className="twitter_blue_font">{profile.twitter}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ProfileList;