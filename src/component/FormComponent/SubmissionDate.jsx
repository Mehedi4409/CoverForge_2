import React from 'react';

const SubmissionDate = () => {
    return (
        <div className="px-4 sm:px-10 mt-6">
            <h2 className="text-black text-lg font-semibold mb-2">Submission Date:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="flex items-center">
                    <p className="text-black">Date</p>
                </div>
                <div className="sm:col-span-3">
                    <input type="date" name="submitDate" className="input bg-gray-300 input-bordered w-full" />
                </div>
            </div>
        </div>
    );
};

export default SubmissionDate;