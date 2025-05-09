import React, { useContext } from 'react';
import logo from "../../assets/logo.png"
import InputField from '../../component/FormComponent/InputField';
import TeacherInfoField from '../../component/FormComponent/FormCustomInput/TeacherInfoField';
import Teachersname from '../../component/FormComponent/FormCustomInput/Teachersname';
import { FormContext } from '../../Context/FormProvider';
import { Link } from 'react-router-dom';
import Dropdown from '../../component/FormComponent/SectionBatchInput';


const Lform = () => {
    const { formData, updateFormData } = useContext(FormContext);
    // const {} =formData;
    const section = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    // const batch = Array.from({ length: 21 }, (_, i) => (i + 50).toString());


    const customPaperStyle = {
        width: '100%',
        minHeight: '100%',
        maxWidth: '210mm',
        minHeight: '297mm'
    };

    

    return (
        <div className="flex flex-col h-fit w-screen justify-center items-center my-4">
            <nav className='max-w-[210mm] w-full flex justify-between mb-4'>
                <Link to='/'><button className="btn btn-soft rounded-lg bg-red-800">Go Back</button></Link>
            </nav>
            <div
                className="card bg-white text-black shadow-xl mx-auto p-6 border border-black rounded-none"
                style={customPaperStyle}
            >
                {/* Logo Section */}
                <figure className="px-10 pt-6">
                    <img src={logo} alt="Logo" className="size-40 md:size-50 mx-auto" />
                </figure>

                <form className='pt-[10mm] md:px-[10mm] space-y-8'>
                    {/* Assignment Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InputField label="Assignment On: " name="assignmentName" placeholder="Assignment Name" />
                        <InputField label="Course Name: " name="courseName" placeholder="Course Name" />
                        <InputField label="Course Code: " name="courseCode" placeholder="Course Code" />
                    </div>

                    {/* Submitted To Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <h2 className='text-xl font-bold col-span-1 sm:col-span-2 lg:col-span-4'>Submitted To: </h2>
                        <Teachersname label="Teacher's Name: " />
                        <TeacherInfoField label="Designation: " field="designation" placeholder="Designation" />
                        <TeacherInfoField label="Department: " field="department" placeholder="Department" />
                    </div>

                    {/* Submitted By Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <h2 className='text-xl font-bold col-span-1 sm:col-span-2 lg:col-span-4'>Submitted By: </h2>
                        <InputField label="Student Name: " name="studentName" placeholder="Type your Name" />
                        <InputField label="Student ID: " name="studentID" placeholder="Type your Student ID" />
                        <InputField label="Department: " name="studentDepartment" placeholder="Type your Department" />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 sm:col-span-2 lg:col-span-4'>
                            <Dropdown
                                label="Section"
                                name="studentSection"
                                options={section}
                                value={formData.studentSection}
                                onChange={updateFormData}
                            />

                            <Dropdown
                                label="Batch"
                                name="studentBatch"

                                value={formData.studentBatch}
                                onChange={updateFormData}
                                isNumber={true}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                        {/* <h3 className='font-semibold col-span-1'>Submission Date: </h3> */}
                        {/* <Calender className="col-span-1 sm:col-span-2 lg:col-span-3" /> */}

                        <InputField label="Submission Date: " name="submissionDate" placeholder="DD-MM-YYYY"></InputField>
                    </div>

                    {/* debugging with json */}
                    {/* <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="font-bold">Form Data:</h3>
                        <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
                    </div> */}
                </form>
                <div className='m-auto mt-4'>


                    <Link to="/lapreview"><p className='btn bg-slate-900 text-white'>Proceed 👉</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Lform;