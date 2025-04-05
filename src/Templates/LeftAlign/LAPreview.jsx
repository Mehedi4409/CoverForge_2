import React, { useContext } from 'react';
import { FormContext } from '../../Context/FormProvider';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import LAPDF from './LAPDF';

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
        studentSection,
        studentBatch,
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
        <div className="flex flex-col gap-2 h-fit w-screen justify-center items-center my-4">
            <nav className='max-w-[210mm] w-full flex justify-between'>
                <Link to='/lacoverform'><button className="btn btn-soft rounded-lg bg-red-800">Go Back</button></Link>
                <Link to='/livepreview'><button className="btn btn-soft rounded-lg bg-red-800">live</button></Link>
                <PDFDownloadLink
                    document={<LAPDF formData={formData} />}
                    fileName="assignment_cover.pdf"
                >
                    {({ loading }) => (
                        <button className="btn btn-soft" disabled={loading}>
                            {loading ? 'Generating PDF...' : 'Download'}
                        </button>
                    )}
                </PDFDownloadLink>
            </nav>
            <div
                className="card bg-white p-[26mm] text-black shadow-xl mx-auto border border-black rounded-none"
                style={customPaperStyle}
            >
                {/* Logo Section */}
                <figure className=" mb-16">
                    <img src={logo} alt="Logo" className="size-40 md:size-50 mx-auto" />
                </figure>

                {/* Assignment Details Section */}
                <section className="space-y-20">
                    <div className='space-y-2'>
                        <DataRow label="Assignment On" value={assignmentName} />
                        <DataRow label="Course Name" value={courseName} />
                        <DataRow label="Course Code" value={courseCode} />
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-bold text-xl mb-2'>Submitted To: </h2>
                        <DataRow label="Teacher Name" value={teacherName} />
                        <DataRow label="Designation" value={designation} />
                        <DataRow label="Department" value={department} />
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-bold text-xl mb-2'>Submitted By: </h2>
                        <DataRow label="Student Name" value={studentName} />
                        <DataRow label="Student ID" value={studentID} />
                        <DataRow label="Section" value={studentSection} />
                        <DataRow label="Batch" value={studentBatch} />
                        <DataRow label="Department" value={studentDepartment} />
                    </div>

                    <div className=''>
                        <DataRow label="Submission Date" value={submissionDate} />

                    </div>
                </section>
            </div>
        </div>
    );
};

export default LAPreview;