'use client';
import React, { useState, useEffect } from 'react';
import AdminLayout from '../admin/page';
import ReactPaginate from 'react-paginate';
import productsData from '../../../../data/products.json';

const AllProductsPage = () => {
    const [products, setProducts] = useState(productsData.products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Paginación
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const toggleDetails = (product) => {
        if (selectedProduct === product) {
            setSelectedProduct(null);
        } else {
            setSelectedProduct(product);
        }
    };

    return (
        <AdminLayout>
            <div className="pb-10">
                <h2 className="w-full text-slate-700 text-4xl font-extrabold">
                    All Products
                </h2>
                <div className="h-1 bg-slate-300 mt-3"></div>
            </div>

            <table className="w-full text-center">
                <thead>
                    <tr className="bg-slate-200">
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Price</th>
                        <th className="py-2 px-4">Stock</th>
                        <th className="py-2 px-4">Branch Office ID</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((product, index) => (
                        <React.Fragment key={product.id}>
                            <tr className={index % 2 === 0 ? 'even' : 'odd'}>
                                <td className="py-2 px-4">{product.id}</td>
                                <td className="py-2 px-4">{product.name}</td>
                                <td className="py-2 px-4">{product.price}</td>
                                <td className="py-2 px-4">{product.stock}</td>
                                <td className="py-2 px-4">
                                    {product.branch_office_id}
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={Math.ceil(products.length / itemsPerPage)}
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

export default AllProductsPage;
