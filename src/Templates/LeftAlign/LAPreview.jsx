import React, { useContext } from 'react';
import { FormContext } from '../../Context/FormProvider';
import logo from "../../assets/logo.png";

// Reusable DataRow component
const DataRow = ({ label, value }) => (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <p className="font-semibold">{label}:</p>
        <p className="col-span-3">{value}</p>
    </div>
);

const LAPreview = () => {
    const { formData } = useContext(FormContext);
    const {
        assignmentName,
        courseName,
        courseCode,
        teacherName,
        designation,
        department,
        studentName,
        studentID,
        studentDepartment,
        submissionDate
    } = formData;

    const customPaperStyle = {
        width: '100%',
        minHeight: '100%',
        maxWidth: '210mm',
        minHeight: '297mm'
    };

    return (
        <div className="flex h-fit w-screen justify-center items-center my-4">
            <div
                className="card bg-white text-black shadow-xl mx-auto p-6 border border-black rounded-none"
                style={customPaperStyle}
            >
                {/* Logo Section */}
                <figure className="px-10 pt-6">
                    <img src={logo} alt="Logo" className="size-40 md:size-50 mx-auto" />
                </figure>
                
                {/* Assignment Details Section */}
                <section className="space-y-4">
                    <DataRow label="Assignment On" value={assignmentName} />
                    <DataRow label="Course Name" value={courseName} />
                    <DataRow label="Course Code" value={courseCode} />
                    <DataRow label="Teacher Name" value={teacherName} />
                    <DataRow label="Designation" value={designation} />
                    <DataRow label="Department" value={department} />
                    <DataRow label="Student Name" value={studentName} />
                    <DataRow label="Student ID" value={studentID} />
                    <DataRow label="Student Department" value={studentDepartment} />
                    <DataRow label="Submission Date" value={submissionDate} />
                </section>
            </div>
        </div>
    );
};

export default LAPreview;