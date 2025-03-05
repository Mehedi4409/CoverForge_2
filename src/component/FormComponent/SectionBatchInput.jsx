import React from "react";

const Dropdown = ({ label, name, options, value, onChange, isNumber }) => {
    return (
        <div className="grid grid-cols-2">
            <label className="font-semibold" htmlFor={name}>{label}:</label>
            {isNumber ? (
                <input
                    type="number"
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    className="border border-gray-400 rounded  p-2 "
                />
            ) : (
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    className="border border-gray-400 rounded p-2 w-full"
                >
                    <option value="">Select {label}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default Dropdown;
