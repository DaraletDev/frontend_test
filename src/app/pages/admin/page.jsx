'use client';
import Layout from '@/app/components/layout';
import React, { useState } from 'react';
import DocumentSection from '@/app/components/form/document_section';
import DetailsSection from '@/app/components/form/details_section';

const Admin = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        setItems((prevItems) => [...prevItems, { id: Date.now() }]);
    };

    const handleRemoveItem = (itemId) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    return (
        <Layout>
            <div className="pb-10">
                <h2 className="w-full text-slate-700 text-4xl font-extrabold">
                    New Sale
                </h2>
                <div className="h-1 bg-slate-300 mt-3"></div>
            </div>
            <form className="space-y-10">
                <DocumentSection />
                <DetailsSection />
            </form>
        </Layout>
    );
};

export default Admin;
