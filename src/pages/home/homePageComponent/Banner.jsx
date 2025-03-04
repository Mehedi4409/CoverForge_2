import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col dark:bg-black w-full h-screen  text-black dark:text-white'>
            {/* nav */}
            <div className=' navbar flex-none flex items-center justify-between px-2 md:px-12 md:py-8'>
                <div className='flex flex-row items-center gap-1'>
                    <p className="text-sm md:text-xl font-bold mr-1">COVERFORGE</p>
                    <details className="dropdown">
                        <summary className="btn btn-sm m-1">v2.0</summary>
                        <ul className="menu text-sm dropdown-content bg-base-100 rounded-box z-1 w-24 p-2 shadow-sm">
                            <li><a href='https://cover-forge.vercel.app/'>v1.0</a></li>
                            <li><a href='https://cover-forge-2.vercel.app/'>v2.0</a></li>
                        </ul>
                    </details>
                </div>
                <p className=' text-[8px] lg:text-[12px]'>@Project By Mehedi</p>
            </div>

            {/* main text */}
            <div className='flex-1 w-full flex flex-col items-center justify-center mt-[-28px]'>
                <p className='font-semibold text-slate-800 dark:text-slate-100 text-[14px] md:text-xl'>Hi There <span className='animate-wiggle text-3xl'>👋</span>, Welcome to</p>
                <p className='text-[60px] lg:text-[200px] leading-none font-family-anton'>COVERFORGE<span className='text-xl font-sans font-semibold'> 2.0</span></p>
                <p className='w-4/5 md:w-1/3 text-[10px] md:text-sm mt-2 text-slate-800 dark:text-slate-100 text-center'>Your simple and efficient tool for creating clean assignment covers on the go. Let's get started!</p>
            </div>
        </div>
    );
};

export default Banner;