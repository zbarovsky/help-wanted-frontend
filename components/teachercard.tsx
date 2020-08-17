import React from 'react'

interface UserProps {
    teacher: any // don't have to redeclare the object again
};

const TeacherCard: React.FC<UserProps> = ({teacher}) => {


    return (
        <div>
            <p>{teacher.name}</p>
        </div>
    );
};


export default TeacherCard