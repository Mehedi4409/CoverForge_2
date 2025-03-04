import React from 'react';

const InputField = ({label, name, placeholder}) => {
    return (
        <>
            <div className='flex items-center'>
                <p className='text-black font-semibold'>{label}</p>

            </div>

            <div className='sm:col-span-3'>
                <input type="text" name={name} placeholder={placeholder} className='input bg-transparent border-gray-600 border w-full' />
            </div>
        </>
    );
};

export default InputField;