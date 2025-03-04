import React from 'react';
import { useTeacherContext } from '../../../Context/TeacherContext';
// import { useTeacherContext } from '../../../Context/TeacherContext';

const TeacherInfoField = ({ label, field, placeholder }) => {
    const { selectedTeacher, selectTeacher } = useTeacherContext();

    const handleChange = (e) => {
        const updatedTeacher = {
            ...selectedTeacher, // Use selectedTeacher state
            [field]: e.target.value
        };
        selectTeacher(updatedTeacher);
    };

    return (

        <>
            <div className='flex items-center'>
                <p className='text-black font-semibold'>{label}</p>

            </div>

            <div className='sm:col-span-3'>
                <input
                    type="text"
                    value={selectedTeacher?.[field] || ""}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="input bg-transparent input-bordered w-full mb-2"
                />
            </div>

        </>

    );
};

export default TeacherInfoField;