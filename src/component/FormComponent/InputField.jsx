import React, { useContext } from 'react';
import { FormContext } from '../../Context/FormProvider';



const InputField = ({ label, name, placeholder }) => {
    const { formData, updateFormData } = useContext(FormContext)
    
    return (
        <>
            <div className='flex items-center'>
                <p className='text-black font-semibold'>{label}</p>

            </div>

            <div className='sm:col-span-3'>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={formData[name] || ""}
                    onChange={(e) => updateFormData(name, e.target.value)}
                    className='input bg-transparent border-gray-600 border w-full' />
            </div>
        </>
    );
};

export default InputField;