'use client';
import React, { useState, useEffect, useRef } from 'react';
import DocumentSection from '@/app/components/form/document_section';
import DetailsSection from '@/app/components/form/details_section';
import AdminLayout from '@/app/pages/admin/page';
import { v4 as uuidv4 } from 'uuid';
import Sale from '../../../../models/sale.model';
import { toast } from 'react-toastify';

const NewSale = () => {
    // Document Section
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const currencyRef = useRef();

    // Details Section
    const [total, setTotal] = useState(0);
    const [details, setDetails] = useState([]);
    const [saleData, setSaleData] = useState({
        customer: '',
        branchOffice: '',
        currency: ''
    });

    useEffect(() => {
        calculateTotal();
    }, [details]);

    const calculateTotal = () => {
        const newTotal = details.reduce(
            (sum, detail) => sum + (parseInt(detail.subtotal) || 0),
            0
        );
        setTotal(newTotal);
    };

    const handleAddDetail = () => {
        setDetails((prevDetails) => [
            ...prevDetails,
            { id: uuidv4(), quantity: 1 }
        ]);
    };

    const handleDeleteDetail = (id) => {
        setDetails((prevDetails) =>
            prevDetails.filter((detail) => detail.id !== id)
        );
    };

    const handleFieldChange = (itemId, field, value) => {
        setDetails((prevDetails) =>
            prevDetails.map((detail) =>
                detail.id === itemId ? { ...detail, [field]: value } : detail
            )
        );
    };

    const clearSaleData = () => {
        setSaleData({
            customer: '',
            branchOffice: '',
            currency: ''
        });
        setSelectedCustomer('');
        setSelectedCountry('');
        currencyRef.current.value = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (
                !saleData.customer ||
                !saleData.branchOffice ||
                !saleData.currency
            ) {
                console.error(
                    'Por favor, complete todos los campos antes de guardar la venta.'
                );
                return;
            }

            const newSale = new Sale(
                uuidv4(),
                new Date().toISOString(),
                saleData.customer,
                saleData.branchOffice,
                saleData.currency
            );

            details.forEach((detail) => {
                newSale.addDetail(detail.name, detail.quantity, detail.price);
            });

            console.log('Venta añadida:', newSale);
            toast.success('Venta añadida correctamente.', {
                position: 'top-right',
                autoClose: 1200,
                pauseOnHover: false,
                theme: 'light'
            });
            setDetails([]);
            clearSaleData();
        } catch (error) {
            console.error('Error al guardar la venta:', error);
        }
    };

    return (
        <AdminLayout>
            <div className="pb-10">
                <h2 className="w-full text-slate-700 text-4xl font-extrabold">
                    New Sale
                </h2>
                <div className="h-1 bg-slate-300 mt-3"></div>
            </div>

            <form className="space-y-10 scroll-auto" onSubmit={handleSubmit}>
                <DocumentSection
                    setSaleData={setSaleData}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    selectedCustomer={selectedCustomer}
                    setSelectedCustomer={setSelectedCustomer}
                    currencyRef={currencyRef}
                />
                <DetailsSection
                    details={details}
                    handleAddDetail={handleAddDetail}
                    handleDeleteDetail={handleDeleteDetail}
                    handleFieldChange={handleFieldChange}
                    selectedCountry={saleData.branchOffice}
                />
                <div className="flex justify-end items-center gap-5 border-b-2 border-slate-400">
                    <label
                        htmlFor="total"
                        className="text-slate-400 font-semibold"
                    >
                        Total
                    </label>
                    <input
                        readOnly
                        type="text"
                        id="total"
                        value={total}
                        className="my-5 bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-end">
                    <input
                        type="submit"
                        value="Save"
                        className="bg-blue-500 h-10 self-center text-white font-semibold px-10 py-2"
                    />
                </div>
            </form>
        </AdminLayout>
    );
};

export default NewSale;
