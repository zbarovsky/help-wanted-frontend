import React from 'react'
import App from '../App'

interface Props {
    currentUser: any
}


const Profile: React.FC<Props> = ({currentUser}) => {


    return (
        <div>
            User Profile Here!!!
            {/* <img src={currentUser.avatar} alt={currentUser.name} />
            <p>{currentUser.name}</p>
            <p>{currentUser.instrumentsPlayed}</p>
            <p>{currentUser.bio}</p>
            <p>{currentUser.email}</p> */}
        </div>
    )
}

export default Profile