import React, { useEffect, useState, FormEvent, FunctionComponent } from 'react'
import axios from 'axios'
import * as ReactDOM from "react-dom";


type EditProfileProps = {
    isTeacher: string,
    bio: string,
    instrumentsPlayed: string,
    avatar: string

}
    
const EditProfile: FunctionComponent <EditProfileProps> = function (props) {
    
    let [name, setName] = useState('')
    let [isTeacher, setIsTeacher] = useState("false")
    let [bio, setBio] = useState('')
    let [instrumentsPlayed, setInstrumentsPlayed] = useState('')
    let [avatar, setAvatar] = useState('')

    
    // Handle submit
    let handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        // Form data
        let data: object = {
            name,
            isTeacher,
            bio,
            instrumentsPlayed,
            avatar
        }

        axios.put(`http://localhost:3001/users/profile`, data)

    }

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Name" onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}/>
                <br /><br />
                <label >This is a teacher account</label>
                <input type="radio" name="isTeacher" id="isTeacher" value="true" onChange={(e: FormEvent<HTMLInputElement>) => setIsTeacher(e.currentTarget.value)}/>
                <br /><br />
                <input type="text" name="bio" id="bio" placeholder="Bio" onChange={(e: FormEvent<HTMLInputElement>) => setBio(e.currentTarget.value)}/>
                <br /><br />
                <input type="text" name="instrumentsPlayed" placeholder="What instruments do you play?" onChange={(e: FormEvent<HTMLInputElement>) => setInstrumentsPlayed(e.currentTarget.value)}/>
                <br /><br />
                <input type="text" name="avatar" placeholder="Upload a picture" onChange={(e: FormEvent<HTMLInputElement>) => setAvatar(e.currentTarget.value)}/>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditProfile