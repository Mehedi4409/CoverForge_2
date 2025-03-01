import React, { createContext, useState, useContext, Children } from "react";
import teachersdata from "../../public/teachers.json";

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {

    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // const handleInputChange = (value) => {
    //     setInputValue(value);

    //     // ✅ Check if teachers array exists and has data before filtering
    //     if (value.length > 0 && teachers.length > 0) {
    //         const filtered = teachers.filter((t) =>
    //             t.name.toLowerCase().includes(value.toLowerCase())
    //         );
    //         setSuggestions(filtered);
    //     } else {
    //         setSuggestions([]);
    //     }
    // };

    // console.log("taecher data",teachersdata.length);

    const handleInputChange = (value) => { //autocomplete logic
        setInputValue(value);
        if (value.length > 0) {
            const filtered = teachersdata.filter(t =>
                t.name.toLowerCase().includes(value.toLowerCase())

            )
            console.log('Filtered results:', filtered.length); // Check if this shows results
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    //teacher selection 
    const selectTeacher = (teacher) => {
        setSelectedTeacher(teacher);
        setInputValue(teacher.name);
        setSuggestions([])

        if (!teacher) {
            setInputValue("");
        }

    }

    return (
        <TeacherContext.Provider value={{ selectTeacher, selectedTeacher, inputValue, suggestions, handleInputChange }}>
            {children}
        </TeacherContext.Provider>
    );
};

export const useTeacherContext = () => useContext(TeacherContext)