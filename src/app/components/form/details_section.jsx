import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { addDetail, getAllDetails } from '../../../../api';

const DetailsSection = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailsData = await getAllDetails();
                setDetails(detailsData);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddItem = async (e) => {
        e.preventDefault();
        try {
            await addDetail({
                id: 3,
                name: 'Condenser USB AKDJSAJKASDKJ',
                quantity: 2,
                price: 2000,
                subtotal: 4000
            });
            const updatedDetails = await getAllDetails();
            setDetails(updatedDetails);
        } catch (error) {
            console.error('Error adding detail:', error);
        }
    };

    return (
        <div>
            <h3 className="font-semibold text-slate-700 text-2xl border-b-2 border-slate-400">
                Details
            </h3>
            <button
                className="bg-blue-500 text-white font-semibold px-10 py-2 mt-5"
                onClick={handleAddItem}
            >
                Add
            </button>
            {details.map((item) => (
                <DetailsItem key={item.id} item={item} />
            ))}
        </div>
    );
};

const DetailsItem = ({ item }) => {
    return (
        <>
            <div className="flex justify-between space-x-10 pt-4">
                {/* Name */}
                <div className="flex flex-col w-3/6 space-y-2">
                    <label
                        htmlFor="name"
                        className="text-slate-400 font-semibold"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Quantity */}
                <div className="flex flex-col w-1/6 space-y-2">
                    <label
                        htmlFor="quantity"
                        className="text-slate-400 font-semibold"
                    >
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="quantity"
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col w-1/6 space-y-2">
                    <label
                        htmlFor="price"
                        className="text-slate-400 font-semibold"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col w-1/6 space-y-2">
                    <label
                        htmlFor="subtotal"
                        className="text-slate-400 font-semibold"
                    >
                        Subtotal
                    </label>
                    <input
                        type="text"
                        id="subtotal"
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button className="bg-blue-500 h-10 self-center mt-8 text-white font-bold px-5 py-2">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </>
    );
};

export default DetailsSection;
