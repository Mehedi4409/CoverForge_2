import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col bg-white dark:bg-black w-full h-screen text-black dark:text-white'>
            {/* nav */}
            <div className='flex-none flex items-center justify-between px-12 py-8'>
                <p className='text-2xl font-bold font-family-anton'>CF</p>
                <p className='text-[12px]'>@Project By Mehedi</p>
            </div>
            
            {/* main text */}
            <div className='flex-1 w-full flex flex-col items-center justify-center'>
                <p className='font-medium text-xl'>Hi There 👋, Welcome to</p>
                <p className='text-6xl lg:text-[200px]  mt-2 font-family-anton'>COVERFORGE<span className='text-xl font-sans font-semibold'> 2.0</span></p>
                <p className='w-4/5 md:w-1/3 text-sm mt-2 text-center'>Your simple and efficient tool for creating clean assignment covers on the go. Let's get started!</p>
            </div>
        </div>
    );
};

export default Banner;