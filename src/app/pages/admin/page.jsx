'use client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faList,
    faBox,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

const AdminLayout = ({ children }) => {
    const pathname = usePathname();
    const items = [
        { id: 0, icon: faPlus, route: '/pages/newSale' },
        { id: 1, icon: faList, route: '/pages/sales' },
        { id: 2, icon: faBox, route: '/pages/products' },
        { id: 3, icon: faArrowLeft, route: '/' }
    ];

    return (
        <div className="flex overflow-hidden min-h-screen">
            <ToastContainer />

            <div className="bg-blue-500 min-w-20 text-center py-10">
                <ul className="text-white flex flex-col">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer py-5 ${
                                pathname == item.route
                                    ? 'font-bold bg-blue-700'
                                    : 'hover:bg-blue-400'
                            }`}
                        >
                            <Link href={`${item.route}`}>
                                <FontAwesomeIcon icon={item.icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full px-5 md:px-20 py-10 bg-[#F6F7FA]">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
