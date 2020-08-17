import React, { useEffect, useState, Fragment } from 'react'
import TeacherCard from '../components/teachercard'
import axios from 'axios'


interface Teacher {
    _id: string;
    name: string;
}


const ViewCards: React.FC = function() {

    let [teachers, setTeachers] = useState<Teacher[]>([])

    useEffect(() => {
        console.log("😺", teachers)
    }, [teachers])

    useEffect(() => {
        axios.get<Teacher[]>('http://localhost:3001/users/teachers')
        .then(response => {
            console.log("response data", response.data);
            setTeachers( response.data );
            });
    }, []);

    const allTeachers = teachers.map(teacher => {
        return(
            <TeacherCard key={teacher._id} teacher={teacher} />
        )
    })

    return(
        <div>
            <p>Here are your teachers:</p>
            {allTeachers}    
        </div>
    )
}

export default ViewCards