import { faX } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { branchOfficesList } from '../../../../models/branch_office.model';
import productsData from '../../../../data/products.json';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DetailsItem = ({
    item,
    handleFieldChange,
    selectedCountry,
    details,
    handleDeleteDetail
}) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [branchOfficeProducts, setBranchOfficeProducts] = useState([]);
    const [productPrice, setProductPrice] = useState(0);
    const [branchOfficeId, setBranchOfficeId] = useState(null);
    const [productSubTotal, setProductSubTotal] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const selectedCountryData = branchOfficesList.find(
            (country) => country.name === selectedCountry
        );
        setBranchOfficeId(selectedCountryData ? selectedCountryData.id : null);

        const productsInOffice = productsData.products.filter(
            (product) => product.branch_office_id === selectedCountryData?.id
        );
        setBranchOfficeProducts(productsInOffice);
    }, [selectedCountry]);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);

        if (selectedOption) {
            const selectedProductData = branchOfficeProducts.find(
                (product) => product.id === selectedOption.value
            );
            const salesDetailsForItem = details.find(
                (detail) => detail.id === item.id
            );

            setProductPrice(selectedProductData.price);
            setQuantity(quantity);

            const subtotal =
                salesDetailsForItem.quantity * selectedProductData.price;
            setProductSubTotal(subtotal);

            handleFieldChange(item.id, 'subtotal', subtotal);
            handleFieldChange(item.id, 'name', selectedProductData.name);
            handleFieldChange(item.id, 'price', selectedProductData.price);
            handleFieldChange(item.id, 'quantity', quantity);
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between  md:space-x-10 pt-4">
                {/* Name */}
                <div className="flex flex-col w-full md:w-3/6 space-y-2">
                    <label
                        htmlFor="name"
                        className="text-slate-400 font-semibold"
                    >
                        Name
                    </label>
                    <Select
                        value={selectedProduct}
                        onChange={handleProductChange}
                        options={branchOfficeProducts.map((product) => ({
                            value: product.id,
                            label: product.name
                        }))}
                        isSearchable={true}
                        placeholder="Search Product"
                        className="w-full rounded border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Quantity */}
                <div className="flex flex-col w-full md:w-1/6 space-y-2">
                    <label
                        htmlFor="quantity"
                        className="text-slate-400 font-semibold"
                    >
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity === null ? 1 : quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value);
                            handleFieldChange(
                                item.id,
                                'quantity',
                                e.target.value
                            );
                        }}
                        onBlur={() => {
                            const updatedQuantity = parseInt(quantity, 10) || 0;
                            const updatedSubtotal =
                                updatedQuantity * parseFloat(productPrice || 0);
                            setProductSubTotal(updatedSubtotal);
                            handleFieldChange(
                                item.id,
                                'subtotal',
                                updatedSubtotal
                            );
                        }}
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col w-full md:w-1/6 space-y-2">
                    <label
                        htmlFor="price"
                        className="text-slate-400 font-semibold"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={productPrice || ''}
                        onChange={(e) => {
                            setProductPrice(e.target.value);
                            handleFieldChange(item.id, 'price', e.target.value);
                        }}
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Subtotal */}
                <div className="flex flex-col w-full md:w-1/6 space-y-2">
                    <label
                        htmlFor="subtotal"
                        className="text-slate-400 font-semibold"
                    >
                        Subtotal
                    </label>
                    <input
                        type="number"
                        id="subtotal"
                        readOnly
                        value={productSubTotal || productPrice * 1}
                        className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Delete detail */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleDeleteDetail();
                    }}
                    className="cursor-pointer hover:bg-blue-400 bg-blue-500 h-10 self-center mt-8 text-white font-bold px-5 py-2"
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </>
    );
};
