import React, { useState } from 'react';
import { useTeacherContext } from '../../../Context/TeacherContext';


const Teachersname = ({label}) => {
    const { selectTeacher, selectedTeacher, inputValue, suggestions, handleInputChange } = useTeacherContext();
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const handleKeyDown = (e) => {
        if (suggestions.length === 0) return;

        if (e.key === "ArrowDown") {
            setHighlightedIndex((prev) => (prev + 1) % suggestions.length); // Move down
        } else if (e.key === "ArrowUp") {
            setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length); // Move up
        } else if (e.key === "Enter" && highlightedIndex >= 0) {
            selectTeacher(suggestions[highlightedIndex]); // Select highlighted teacher
        }
    };


    return (

        <>
            <div className='flex items-center'>
                <p className='text-black font-semibold'>{label}</p>

            </div>

            <div className='sm:col-span-3'>
                <div className='relative'>

                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type teacher's name..."
                        className="input bg-transparent input-bordered w-full"
                        list='teacher'
                    />


                    {suggestions.length > 0 && (
                        <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg">
                            {suggestions.map((teacher, index) => (
                                <li
                                    key={teacher.name}
                                    onClick={() => selectTeacher(teacher)}
                                    className={`p-2 cursor-pointer ${index === highlightedIndex ? "bg-gray-200" : "hover:bg-gray-100"
                                        }`}
                                >
                                    {teacher.name}
                                </li>
                            ))}
                        </ul>
                    )}



                </div>
            </div>

        </>

    );
};

export default Teachersname;