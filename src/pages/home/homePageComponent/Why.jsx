import React from 'react';

const features = [
    {
        title: "Premade Templates",
        description: "Choose from predesigned templates approved by academic institutions",
    },
    {
        title: "Auto-Fill Teacher Details",
        description: "Smart auto-complete for instructor information - never manually type course details again",
    },
    {
        title: "Zero Login Required",
        description: "Start creating immediately - no accounts, passwords, or personal information needed",
    },
    {
        title: "Instant PDF Export",
        description: "One-click download in print-ready PDF format - optimized for A4/US Letter paper",
    },
];

const FeatureCard = ({ title, description }) => (
    <div className="text-center p-4">
        <h2 className="text-md md:text-xl font-bold mb-3 text-gray-800 dark:text-white">
            {title}
        </h2>
        <p className="text-[12px] text-gray-600 dark:text-gray-300">
            {description}
        </p>
    </div>
);

const Why = () => {
    return (
        <div className="flex flex-col w-5/6 justify-center mb-12 items-center px-4 py-12 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-3xl font-bold text-center mb-2">
                    Why choose CoverForge?
                </h2>
                <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Create your covers with minimum effort
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Why;