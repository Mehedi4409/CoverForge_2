import React, { useEffect } from 'react';
import Teachersname from './FormCustomInput/Teachersname';
import { useTeacherContext } from '../../Context/TeacherContext';
import TeacherInfoField from './FormCustomInput/TeacherInfoField';

const SubmittedTo = ({ onUpdate }) => {
    const { selectTeacher } = useTeacherContext();

    useEffect(() => {
        if (selectTeacher) {
            onUpdate(selectTeacher);
        }
    }, [selectTeacher, onUpdate]);

    // const handleInputChange = (field, value) => {
    //     const updatedTeacher = { ...selectTeacher, [field]: value }
    //     selectTeacher(updatedTeacher);
    // }
    return (
        <div className="px-4 sm:px-10 mt-6">
            <h2 className="text-black text-lg font-semibold mb-2">Submitted To:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

                <div className="flex items-center">
                    <p className="text-black">Teacher's Name</p>
                </div>
                <div className="sm:col-span-3">
                    <Teachersname></Teachersname>
                </div>

                <div className="flex items-center">
                    <p className="text-black">Designation</p>
                </div>
                <div className="sm:col-span-3">

                    <TeacherInfoField field="designation" placeholder="Designation">

                    </TeacherInfoField>


                </div>

                <div className="flex items-center">
                    <p className="text-black">Department</p>
                </div>
                <div className="sm:col-span-3">




                    <TeacherInfoField field="department" placeholder="Department">

                    </TeacherInfoField>




                </div>
            </div>
        </div>
    );
};

export default SubmittedTo;