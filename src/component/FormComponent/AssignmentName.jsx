import React from 'react';
import InputField from './InputField';

const AssignmentName = () => {
    return (
        <div className="px-4 sm:px-10 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <InputField label="Assignment On:" name="assignmentTopic" placeholder="Type here" />
                <InputField label="Course Name:" name="courseName" placeholder="Type here" />
                <InputField label="Course Code:" name="courseCode" placeholder="Type here" />
            </div>
        </div>
    );
};

export default AssignmentName;