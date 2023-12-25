'use client';
import React, { useState, useEffect } from 'react';
import AdminLayout from '../admin/page';
import { getAllSales } from '../../../../api';

const AllSalesPage = () => {
    const [sales, setSales] = useState([]);
    const [selectedSale, setSelectedSale] = useState(null);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const allSales = await getAllSales();
                setSales(allSales);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchSales();
    }, []);

    const toggleDetails = (sale) => {
        if (selectedSale === sale) {
            setSelectedSale(null);
        } else {
            setSelectedSale(sale);
        }
    };

    return (
        <AdminLayout>
            <div className="pb-10">
                <h2 className="w-full text-slate-700 text-4xl font-extrabold">
                    All Sales
                </h2>
                <div className="h-1 bg-slate-300 mt-3"></div>
            </div>

            <div>
                <h3 className="font-semibold text-slate-700 text-2xl border-b-2 border-slate-400">
                    Sales List
                </h3>

                <table className="mt-4 w-full">
                    <thead>
                        <tr className="bg-slate-200">
                            <th className="py-2 px-4">ID</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Client</th>
                            <th className="py-2 px-4">Branch Office</th>
                            <th className="py-2 px-4">Currency</th>
                            <th className="py-2 px-4">Total</th>
                            <th className="py-2 px-4">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale, index) => (
                            <React.Fragment key={sale.id_sale}>
                                <tr
                                    className={index % 2 === 0 ? 'even' : 'odd'}
                                >
                                    <td className="py-2 px-4">
                                        {sale.id_sale}
                                    </td>
                                    <td className="py-2 px-4">
                                        {sale.date_sale}
                                    </td>
                                    <td className="py-2 px-4">
                                        {sale.document.client}
                                    </td>
                                    <td className="py-2 px-4">
                                        {sale.document.branch_office}
                                    </td>
                                    <td className="py-2 px-4">
                                        {sale.document.currency}
                                    </td>
                                    <td className="py-2 px-4">{sale.total}</td>
                                    <td>
                                        <button
                                            className={`w-full rounded  ${
                                                selectedSale == sale
                                                    ? ' bg-gray-200 text-black hover:bg-gray-300'
                                                    : 'bg-blue-500 text-white hover:bg-blue-400'
                                            } font-bold px-3 py-2 text-xs`}
                                            onClick={() => toggleDetails(sale)}
                                        >
                                            {selectedSale === sale
                                                ? 'Close Details'
                                                : 'View Details'}
                                        </button>
                                    </td>
                                </tr>
                                {selectedSale === sale && (
                                    <tr>
                                        <td colSpan="7" className="py-2">
                                            <div>
                                                <h4 className="font-semibold text-md mb-2 bg-blue-200 py-1 text-center rounded-sm">
                                                    Sale Details
                                                </h4>
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="bg-slate-200 text-sm">
                                                            <th className="py-2 px-4">
                                                                ID
                                                            </th>
                                                            <th className="py-2 px-4">
                                                                Name
                                                            </th>
                                                            <th className="py-2 px-4">
                                                                Quantity
                                                            </th>
                                                            <th className="py-2 px-4">
                                                                Price
                                                            </th>
                                                            <th className="py-2 px-4">
                                                                Subtotal
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-xs">
                                                        {sale.details.map(
                                                            (detail, index) => (
                                                                <tr
                                                                    key={
                                                                        detail.id
                                                                    }
                                                                    className={
                                                                        index %
                                                                            2 ===
                                                                        0
                                                                            ? 'even'
                                                                            : 'odd'
                                                                    }
                                                                >
                                                                    <td className="py-2 px-4">
                                                                        {
                                                                            detail.id
                                                                        }
                                                                    </td>
                                                                    <td className="py-2 px-4">
                                                                        {
                                                                            detail.name
                                                                        }
                                                                    </td>
                                                                    <td className="py-2 px-4">
                                                                        {
                                                                            detail.quantity
                                                                        }
                                                                    </td>
                                                                    <td className="py-2 px-4">
                                                                        {
                                                                            detail.price
                                                                        }
                                                                    </td>
                                                                    <td className="py-2 px-4">
                                                                        {
                                                                            detail.subtotal
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};

export default AllSalesPage;
