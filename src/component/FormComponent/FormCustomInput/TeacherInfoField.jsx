import React from 'react';
import { useTeacherContext } from '../../../Context/TeacherContext';

const TeacherInfoField = ({ field, placeholder }) => {
    const { selectedTeacher, selectTeacher } = useTeacherContext();

    const handleChange = e => {
        const updatedTeacher = {
            ...selectTeacher, [field]: e.target.value
        };
        selectTeacher(updatedTeacher)
    }
    return (
        <input
            type="text"
            value={selectedTeacher?.[field] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className="input bg-transparent input-bordered w-full mb-2"
        />
    );
};

export default TeacherInfoField;