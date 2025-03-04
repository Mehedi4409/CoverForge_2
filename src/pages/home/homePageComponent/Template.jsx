import React from 'react';
import left from "../../../../public/assets/left.png";
import middle from "../../../../public/assets/middle.png";
import group from "../../../../public/assets/group.png";
import { Link } from 'react-router-dom';

const Template = () => {
    return (
        <div className='min-h-screen max-w-[1200px]'>
            <p className='text-center py-4 font-bold text-3xl font-family-anton text-black dark:text-white'>Select a Template</p>
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-4'>
                <Link to='/lacoverform'><img className='size-96' src={left} alt="" /></Link>
                <img className='size-96' src={middle} alt="" />
                <img className='size-96' src={group} alt="" />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-4'>
                <img className='size-96' src={left} alt="" />
                <img className='size-96' src={middle} alt="" />
                <img className='size-96' src={group} alt="" />
            </div>
        </div>
    );
};

export default Template;