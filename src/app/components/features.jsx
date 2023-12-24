import React from 'react';

const Features = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeaturesContent />
            <FeaturesContent featured={true} />
            <FeaturesContent />
        </div>
    );
};

const FeaturesContent = ({ featured }) => {
    return (
        <div
            className={`${
                featured
                    ? 'border-4 border-blue-500'
                    : 'border-1 border-slate-200'
            } rounded-lg flex-1 px-10 border p-5 bg-white flex flex-col items-center gap-5`}
        >
            <h3 className="text-2xl font-bold text-slate-700">Title</h3>
            <FeaturesList featured={featured} />
            <button className="w-full bg-blue-500 text-white font-bold px-7 py-2">
                Solicitar
            </button>
        </div>
    );
};

const FeaturesList = ({ featured }) => {
    const listItems = [];

    for (let i = 1; i <= 10; i++) {
        listItems.push(
            <li
                key={i}
                className={`font-semibold text-slate-700 rounded-sm py-2 ${
                    featured ? 'bg-blue-200' : 'bg-slate-200 '
                }`}
            >
                Feature {i}
            </li>
        );
    }

    return (
        <ul className="w-full text-center flex flex-col gap-2">{listItems}</ul>
    );
};

export default Features;
