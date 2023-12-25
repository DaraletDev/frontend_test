import React, { useState } from 'react';

const CustomerModal = ({ isOpen, onClose, onSave }) => {
    const [newClient, setNewClient] = useState({
        id: '',
        rut: '',
        name: '',
        last_name: '',
        address: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient((prevClient) => ({
            ...prevClient,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(newClient);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h2>Add New Client</h2>
                <label>RUT:</label>
                <input type="text" name="rut" value={newClient.rut} onChange={handleInputChange} />
                <label>Name:</label>
                <input type="text" name="name" value={newClient.name} onChange={handleInputChange} />
                <label>Last Name:</label>
                <input type="text" name="last_name" value={newClient.last_name} onChange={handleInputChange} />
                {/* Add other input fields as needed */}
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default CustomerModal;
