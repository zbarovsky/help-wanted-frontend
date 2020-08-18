import React, { useEffect, useState, Fragment } from 'react'
import TeacherCard from '../components/teachercard'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar';


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
            <Container>
                <Navbar />
                <Row>
                    <Col lg="4"></Col>

                    <Col lg="6"> 
                        <h2>Here are your teachers:</h2>
                        {allTeachers}  
                    </Col> 

                    <Col lg="4"></Col>

                </Row>
            </Container>
        </div>
    )
}

export default ViewCards