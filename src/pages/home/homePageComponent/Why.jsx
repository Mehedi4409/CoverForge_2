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
        <p className="text-4xl font-family-anton  text-black dark:text-gray-300">
            {description}
        </p>
        <h2 className="text-md font-semibold  text-gray-700 dark:text-white">
            {title}
        </h2>

    </div>
);

const Why = () => {
    return (
        <div className="flex flex-row  max-w-[1200px] m-auto justify-center mb-12 gap-6 ">
            <div className='w-1/5'>
                <h2 className="text-5xl text-black font-family-anton font-bold  mb-2">
                    Make every submission count with a cover page that speaks for itself.
                </h2>

            </div>
            <div className="flex flex-col w-4/5">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    At CoverForge, we don’t just create covers—we craft first impressions. Our platform ensures your work looks polished, compelling, and uniquely yours. With intuitive customization, high-quality templates, and effortless design tools, CoverForge transforms ordinary documents into visually stunning masterpieces.
                </p>
                <div className='flex justify-between'>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Why;