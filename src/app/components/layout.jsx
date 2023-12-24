// components/Layout.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(0);

    const items = [
        { id: 0, icon: faHome, label: 'Inicio' },
        { id: 1, icon: faStar, label: 'Favoritos' }
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div
            className={`flex h-screen overflow-hidden  ${
                sidebarOpen ? 'sidebar-open' : ''
            }`}
        >
            <div className="bg-blue-500 w-20 text-center py-10">
                <ul className="text-white flex flex-col">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer py-5 ${
                                selectedItem === item.id
                                    ? 'font-bold bg-blue-600'
                                    : ''
                            }`}
                            onClick={() => handleItemClick(item.id)}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full px-20 py-10 bg-[#F6F7FA]'>{children}</div>
        </div>
    );
};

export default Layout;
