import React  from 'react';
import { DetailsItem } from './details_item';

const DetailsSection = ({
    details,
    handleAddDetail,
    handleDeleteDetail,
    handleFieldChange,
    selectedCountry
}) => {
    return (
        <>
            <h3 className="mt-6 font-semibold text-slate-700 text-2xl border-b-2 border-slate-400">
                Details
            </h3>
            <button
                className="cursor-pointer hover:bg-blue-400 bg-blue-500 text-white font-semibold px-10 py-2 mt-5"
                onClick={(e) => {
                    e.preventDefault();
                    handleAddDetail();
                }}
            >
                Add
            </button>
            {details.map((item) => (
                <DetailsItem
                    key={item.id}
                    item={item}
                    handleFieldChange={handleFieldChange}
                    selectedCountry={selectedCountry}
                    details={details}
                    handleDeleteDetail={() => handleDeleteDetail(item.id)}
                />
            ))}
        </>
    );
};


export default DetailsSection;
