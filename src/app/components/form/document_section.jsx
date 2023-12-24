import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const DocumentSection = () => {
    return (
        <div>
            <h3 className="font-semibold text-slate-700 text-2xl border-b-2 border-slate-400">
                Document
            </h3>
            <div className="flex justify-between space-x-10 pt-4">
                {/* Client */}
                <div className="flex flex-col w-3/6 space-y-2">
                    <label
                        htmlFor="client"
                        className="text-slate-400 font-semibold"
                    >
                        Client
                    </label>
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            id="client"
                            className="w-full bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-500 text-white font-bold px-5 py-2">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>

                {/* Branch Office */}
                <div className="flex flex-col w-2/6 space-y-2">
                    <label
                        htmlFor="branch_office"
                        className="text-slate-400 font-semibold"
                    >
                        Branch Office
                    </label>
                    <input
                        type="text"
                        id="branch_office"
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Currency */}
                <div className="flex flex-col w-1/6 space-y-2">
                    <label
                        htmlFor="currency"
                        className="text-slate-400 font-semibold"
                    >
                        Currency
                    </label>
                    <input
                        type="text"
                        id="currency"
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default DocumentSection;
