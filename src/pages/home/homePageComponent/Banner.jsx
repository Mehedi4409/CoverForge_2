import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col dark:bg-black w-full h-screen text-black dark:text-white'>
            {/* nav */}
            <div className='flex-none flex items-center justify-between px-12 py-8'>
                <div>
                    <a className="text-lg md:text-xl font-bold mr-1">COVERFORGE</a>
                    <details className="dropdown">
                        <summary className="btn btn-sm m-1">v2.0</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-24 p-2 shadow-sm">
                            <li><a href='https://cover-forge.vercel.app/'>v1.0</a></li>
                            <li><a href='https://cover-forge-2.vercel.app/'>v2.0</a></li>
                        </ul>
                    </details>
                </div>
                <p className='text-[12px]'>@Project By Mehedi</p>
            </div>

            {/* main text */}
            <div className='flex-1 w-full flex flex-col items-center justify-center'>
                <p className='font-medium text-xl'>Hi There <span className='animate-wiggle text-3xl'>👋</span>, Welcome to</p>
                <p className='text-6xl lg:text-[200px]  mt-2 font-family-anton'>COVERFORGE<span className='text-xl font-sans font-semibold'> 2.0</span></p>
                <p className='w-4/5 md:w-1/3 text-sm mt-2 text-center'>Your simple and efficient tool for creating clean assignment covers on the go. Let's get started!</p>
            </div>
        </div>
    );
};

export default Banner;