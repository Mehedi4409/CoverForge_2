import React from 'react';
import left from "../../../../public/assets/left.png";
import middle from "../../../../public/assets/middle.png";
import group from "../../../../public/assets/group.png";

const Template = () => {
    return (
        <div>
            <p className='text-center py-4 font-bold text-3xl font-family-anton text-black dark:text-white'>Select a Template</p>
            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <img className='size-96' src={left} alt="" />
                <img className='size-96' src={middle} alt="" />
                <img className='size-96' src={group} alt="" />
            </div>
        </div>
    );
};

export default Template;