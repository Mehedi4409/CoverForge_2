import React, { useContext } from 'react';
import { useTeacherContext } from '../../../Context/TeacherContext';
import { FormContext } from '../../../Context/FormProvider';
// import { useTeacherContext } from '../../../Context/TeacherContext';

const TeacherInfoField = ({ label, field, placeholder }) => {
    const { selectedTeacher, selectTeacher } = useTeacherContext();
    const { formData, updateFormData } = useContext(FormContext)

    const value = selectedTeacher?.[field] || formData[field] || "";

    const handleChange = (e) => {
        const updatedTeacher = {
            ...selectedTeacher, // Use selectedTeacher state
            [field]: e.target.value
        };
        selectTeacher(updatedTeacher);
        // updateFormData(field, e.target.value);
        // updateFormData(field, e.target.value);
        // console.log("updated teacher", updatedTeacher);
        // console.log("updated name", updatedTeacher.name);
        // console.log("updated designation", updatedTeacher.designation);
    };

    return (

        <>
            <div className='flex items-center'>
                <p className='text-black font-semibold'>{label}</p>

            </div>

            <div className='sm:col-span-3'>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="input bg-transparent input-bordered w-full mb-2"
                />
            </div>

        </>

    );
};

export default TeacherInfoField;