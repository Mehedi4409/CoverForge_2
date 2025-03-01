import React from 'react';

const AssignmentName = () => {
    return (
        <div className="px-4 sm:px-10 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {/* Name */}
                <div className="flex items-center">
                    <p className="text-black">Assignment On: </p>
                </div>
                <div className="sm:col-span-3">
                    <input type="text" name="assignmentTopic" placeholder="Type here" className="input bg-transparent input-bordered border-gray-700 w-full mb-2" />
                </div>

                {/* Course NAme */}
                <div className="flex items-center">
                    <p className="text-black">Course Name:</p>
                </div>
                <div className="sm:col-span-3">
                    <input type="text" name="courseName" placeholder="Type here" className="input bg-transparent border-gray-700 input-bordered w-full mb-2" />
                </div>

                {/* Course Code */}
                <div className="flex items-center">
                    <p className="text-black">Course Code: </p>
                </div>
                <div className="sm:col-span-3">
                    <input type="text" name="courseCode" placeholder="Type here" className="input bg-transparent border-gray-700 input-bordered w-full mb-2" />
                </div>
            </div>
        </div>
    );
};

export default AssignmentName;