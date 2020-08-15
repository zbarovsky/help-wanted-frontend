import * as React from "react";
import { useEffect, useState, FormEvent } from 'react'
import axios from 'axios'
import * as ReactDOM from "react-dom";


    
const ProfileEdit: React.FC = function () {
    let hello: string = "Hello, World"
    let [name, setName] = useState('')
    let [isTeacher, setIsTeacher] = useState(false)
    let [bio, setBio] = useState('')
    let [interests, setInterests] = useState('')
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
            interests,
            instrumentsPlayed,
            avatar
        }

        axios.post(`http://localhost:3001/users/profile`, data)

    }

    return (
        <div>
            {hello}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Name" onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}/>
                <label for="isTeacher">Are you creating a teacher profile?</label>
                <input type="radio" name="isTeacher" id="isTeacher" value="true" onChange={(e: FormEvent<HTMLInputElement>) => setIsTeacher(e.currentTarget.value)}/>

            </form>
        </div>
    )
}

export default ProfileEdit