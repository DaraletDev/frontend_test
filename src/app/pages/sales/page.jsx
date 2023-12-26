'use client';
import React, { useState, useEffect } from 'react';
import AdminLayout from '../admin/page';
import { getAllSales } from '../../../../api';
import ReactPaginate from 'react-paginate';

const AllSalesPage = () => {
    const [sales, setSales] = useState([]);
    const [selectedSale, setSelectedSale] = useState(null);

    // Paginación
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const formatSaleDate = (dateString) => {
        const saleDate = new Date(dateString);
        const year = saleDate.getFullYear();
        const month = String(saleDate.getMonth() + 1).padStart(2, '0'); // Sumar 1 ya que los meses son indexados desde 0
        const day = String(saleDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

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

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sales.slice(indexOfFirstItem, indexOfLastItem);

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

            <table className="w-full text-center">
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
                    {currentItems.map((sale, index) => (
                        <React.Fragment key={sale.id_sale}>
                            <tr
                                className={`${
                                    index % 2 === 0 ? 'even' : 'odd'
                                } ${selectedSale == sale ? 'selected' : ''}`}
                            >
                                {/* <tr className={index % 2 === 0 ? 'even' : 'odd'}> */}
                                <td className="py-2 px-4">{sale.id}</td>
                                <td className="py-2 px-4">
                                    {formatSaleDate(sale.date)}
                                </td>
                                <td className="py-2 px-4">{sale.customer}</td>
                                <td className="py-2 px-4">
                                    {sale.branch_office}
                                </td>
                                <td className="py-2 px-4">{sale.currency}</td>
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
                                <tr className="border border-2 border-slate-400">
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
                                                                key={detail.id}
                                                                className={
                                                                    index %
                                                                        2 ===
                                                                    0
                                                                        ? 'even'
                                                                        : 'odd'
                                                                }
                                                            >
                                                                <td className="py-2 px-4">
                                                                    {detail.id}
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
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={Math.ceil(sales.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={
                    'flex justify-center list-none p-0 m-4 mt-10'
                }
                activeClassName={
                    'bg-blue-500 text-white border border-blue-500 rounded p-2 mx-1 cursor-pointer'
                }
                pageClassName={'border px-4 py-2 rounded cursor-pointer mx-1'}
                previousClassName={
                    'bg-gray-100 font-semibold border px-4 py-2 rounded cursor-pointer'
                }
                nextClassName={
                    'bg-blue-500 text-white font-semibold border px-4 py-2 rounded cursor-pointer'
                }
                breakClassName={'border px-4 py-2 rounded cursor-pointer'}
                disabledClassName={
                    'bg-gray-300 text-gray-400 cursor-not-allowed'
                }
            />
        </AdminLayout>
    );
};

export default AllSalesPage;
