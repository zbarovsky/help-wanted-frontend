import * as React from "react";
import { useEffect, useState, FormEvent } from 'react'
import axios from 'axios'
import * as ReactDOM from "react-dom";


    
const EditProfile: React.FC = function () {
    let hello: string = "Hello, World"
    // let [name, setName] = useState('')
    let [isTeacher, setIsTeacher] = useState("false")
    let [bio, setBio] = useState('')
    let [interests, setInterests] = useState('')
    let [instrumentsPlayed, setInstrumentsPlayed] = useState('')
    let [avatar, setAvatar] = useState('')

    
    // Handle submit
    let handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        // Form data
        let data: object = {
            // name,
            isTeacher,
            bio,
            interests,
            instrumentsPlayed,
            avatar
        }

        axios.put(`http://localhost:3001/users/profile`, data)

    }

    return (
        <div>
            {hello}
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="name" id="name" placeholder="Name" onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}/> */}
                <p>This is a teacher profile</p>
                <input type="radio" name="isTeacher" id="isTeacher" value="true" onChange={(e: FormEvent<HTMLInputElement>) => setIsTeacher(e.currentTarget.value)}/>
                <input type="text" name="bio" id="bio" placeholder="Bio" onChange={(e: FormEvent<HTMLInputElement>) => setBio(e.currentTarget.value)}/>
                <input type="text" name="interests" placeholder="Interests" onChange={(e: FormEvent<HTMLInputElement>) => setInterests(e.currentTarget.value)}/>
                <input type="text" name="instrumentsPlayed" placeholder="What instruments do you play?" onChange={(e: FormEvent<HTMLInputElement>) => setInstrumentsPlayed(e.currentTarget.value)}/>
                <input type="text" name="avatar" placeholder="Upload a picture" onChange={(e: FormEvent<HTMLInputElement>) => setAvatar(e.currentTarget.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditProfile