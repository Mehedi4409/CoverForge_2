import React from 'react';

const features = [
    {
        title: "Premade Templates",
        description: "6",
    },
    {
        title: "Built in Teacher Details",
        description: "50+",
    },
    {
        title: "Zero Login Required",
        description: "No Login",
    },
    {
        title: "PDF Downloads",
        description: "400+",
    },
];

const FeatureCard = ({ title, description }) => (
    <div className="text-start py-2">
        <p className="text-2xl lg:text-4xl font-family-anton  text-black dark:text-gray-300">
            {description}
        </p>
        <h2 className="text-sm lg:text-md font-semibold  text-gray-700 dark:text-white">
            {title}
        </h2>

    </div>
);

const Why = () => {
    return (
        <div className="flex flex-col lg:flex-row  max-w-[1200px] m-auto justify-center mb-12 gap-6 p-4">
            <div className='lg:w-1/5'>
                <h2 className="text-2xl lg:text-5xl text-black font-family-anton font-bold  mb-2">
                    Create a cover page that makes every submission stand out.
                </h2>

            </div>
            <div className="flex flex-col lg:w-4/5">
                <p className="text-[12px] lg:text-lg text-gray-600 dark:text-gray-400 mb-8">


                    A well-designed cover page sets the tone for your work. CoverForge makes it easy with intuitive tools, professional templates, and built-in customization—no login required. Whether you're a student or a professional, create polished, standout covers in seconds!


                </p>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Why;