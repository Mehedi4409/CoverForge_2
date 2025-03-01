import React from 'react';

const SubmittedBy = () => {
    const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

    return (
        <div className="px-4 sm:px-10 mt-6">
            <h2 className="text-black text-lg font-semibold mb-2">Submitted By:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {/* Name */}
                <div className="flex items-center">
                    <p className="text-black">Student's Name</p>
                </div>
                <div className="sm:col-span-3">
                    <input type="text" name="studentName" placeholder="Type here" className="input bg-transparent input-bordered border-gray-700 w-full mb-2" />
                </div>

                {/* Student ID */}
                <div className="flex items-center">
                    <p className="text-black">Student ID</p>
                </div>
                <div className="sm:col-span-3">
                    <input type="text" name="studentId" placeholder="Type here" className="input bg-transparent input-bordered border-gray-700 w-full mb-2" />
                </div>

                {/* Department */}
                <div className="flex items-center">
                    <p className="text-black">Department</p>
                </div>
                <div className="sm:col-span-3">
                    <input type="text" name="studentDepartment" placeholder="Type here" className="input bg-transparent text-black border-gray-700 input-bordered w-full mb-2" />
                </div>

                {/* Section */}
                <div className="flex items-center">
                    <p className="text-black">Section</p>
                </div>
                <div className="sm:col-span-1">
                    <select
                        name="section"
                        className="select border-gray-700 bg-transparent select-bordered w-full"
                        defaultValue="" // Default value when no section is selected
                    >
                        <option value="" disabled>Select your section</option>
                        {sections.map((sec) => (
                            <option value={sec} key={sec}>{sec}</option>
                        ))}
                    </select>

                </div>
                {/* Batch */}
                <div className="flex items-center">
                    <p className="text-black">Batch: </p>
                </div>
                <div className="sm:col-span-1">
                    <input type="number" name="batch" placeholder="Batch" className="input bg-transparent border-gray-700 input-bordered w-full mb-2" />
                </div>
            </div>
        </div>
    );
};

export default SubmittedBy;