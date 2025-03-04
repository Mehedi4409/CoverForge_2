import React from 'react';
import logo from "../../assets/logo.png"
import InputField from '../../component/FormComponent/InputField';
import TeacherInfoField from '../../component/FormComponent/FormCustomInput/TeacherInfoField';
import Teachersname from '../../component/FormComponent/FormCustomInput/Teachersname';
import Calender from '../../component/FormComponent/FormCustomInput/Calender';


const Lform = () => {

    const customPaperStyle = {
        width: '100%',
        minHeight: '100%',
        maxWidth: '210mm',
        minHeight: '297mm'
    }
    return (
        <div className="flex h-fit w-screen justify-center items-center my-4">
            <div
                className="card bg-white text-black shadow-xl mx-auto p-6 border border-black rounded-none"
                style={customPaperStyle}
            >
                {/* Logo Section */}
                <figure className="px-10 pt-6">
                    <img src={logo} alt="Logo" className="w-40 mx-auto" />
                </figure>

                <form className='pt-[10mm] md:px-[10mm] space-y-8'>
                    {/* Assignment Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <InputField label="Assignment On: " name="assignmentName" placeholder="Assignment Name"></InputField>
                        <InputField label="Course Name: " name="assignmentName" placeholder="Course Name"></InputField>
                        <InputField label="Course Code: " name="assignmentName" placeholder="Course Code"></InputField>

                    </div>

                    {/* Submitted To Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <h2 className='text-xl font-bold col-span-4'>Submitted To: </h2>
                        <Teachersname label="Teacher's Name: "></Teachersname>
                        <TeacherInfoField label="Designation: " field="designation" placeholder="Designation"></TeacherInfoField>
                        <TeacherInfoField label="Department: " field="department" placeholder="Department"></TeacherInfoField>

                    </div>

                    {/* submitted By Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <h2 className='text-xl font-bold col-span-4'>Submitted By: </h2>
                        <InputField label="Student Name: " name="studentName" placeholder="Type your Name"></InputField>
                        <InputField label="Student ID: " name="studentID" placeholder="Type your Student ID"></InputField>
                        <InputField label="Department: " name="studentDepartment" placeholder="Type your Department"></InputField>


                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                        <h3 className='font-semibold'>Submission Date: </h3>
                        <Calender></Calender>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default Lform;