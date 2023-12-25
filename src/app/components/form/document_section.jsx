import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import Customer, { customersList } from '../../../../models/customer.model';
import { branchOfficesList } from '../../../../models/branch_office.model';
import Modal from 'react-modal';
import Address from '../../../../models/address.model';
import AddCustomerModal from '../customerModal';

const DocumentSection = ({
    setSaleData,
    setSelectedCountry,
    setSelectedCustomer,
    selectedCountry,
    selectedCustomer,
    currencyRef
}) => {
    const [branchOffices, setBranchOffices] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    const [newClient, setNewClient] = useState({
        rut: '',
        name: '',
        last_name: '',
        street: '',
        number: '',
        district: '',
        city: '',
        phoneNumber: ''
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    // Simula la carga de datos desde el archivo JSON o mediante una solicitud HTTP
    useState(() => {
        setBranchOffices(branchOfficesList);
        setCustomers(customersList);
    }, []);

    const branchOffices_options = branchOffices.map((office) => ({
        value: office.name,
        label: office.name
    }));

    const customer_options = customers.map((customer) => ({
        value: customer.id,
        label: `${customer.name} ${customer.last_name}`
    }));

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);

        const selectedCurrency = branchOffices.find(
            (office) => office.name === selectedOption.value
        )?.currency;

        currencyRef.current.value = selectedCurrency || '';

        // Setear data de la Venta
        setSaleData((prevSaleData) => ({
            ...prevSaleData,
            branchOffice: selectedOption.value,
            currency: currencyRef.current.value
        }));
    };

    const handleClientChange = (selectedOption) => {
        if (selectedOption) {
            setSelectedCustomer(selectedOption);

            // Setear data de la Venta
            setSaleData((prevSaleData) => ({
                ...prevSaleData,
                customer: selectedOption.value
            }));
        }
    };
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F6F7FA'
        }
    };
    const handleAddClient = () => {
        const newCustomerId = customers.length + 1; // Puedes ajustar esto según cómo generas IDs
        const newAddress = new Address(
            newClient.street,
            newClient.number,
            newClient.district,
            newClient.city
        );

        const newCustomer = new Customer(
            newCustomerId,
            newClient.rut,
            newClient.name,
            newClient.last_name,
            newAddress,
            newClient.phoneNumber
        );

        const updatedCustomers = [...customers, newCustomer];
        setCustomers(updatedCustomers);

        // Limpiar la información del nuevo cliente
        setNewClient({
            id: '',
            rut: '',
            name: '',
            last_name: '',
            address: '',
            phoneNumber: ''
        });

        console.log(newCustomer);

        // Cerrar el modal después de agregar el cliente
        closeModal();
    };

    return (
        <div>
            <h3 className="font-semibold text-slate-700 text-2xl border-b-2 border-slate-400">
                Document
            </h3>
            <div className="flex justify-between space-x-10 pt-4">
                {/* Client */}
                <div className="flex flex-col w-3/6 space-y-2">
                    <label
                        htmlFor="client"
                        className="text-slate-400 font-semibold"
                    >
                        Client
                    </label>
                    <div className="flex items-center gap-3">
                        <Select
                            id="client"
                            value={selectedCustomer}
                            onChange={handleClientChange}
                            options={customer_options}
                            isSearchable={true}
                            placeholder="Search Client"
                            className="w-full rounded border border-none focus:outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(true);
                            }}
                            className="bg-blue-500 text-white font-bold px-5 py-2"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    
                        <AddCustomerModal
                            newClient={newClient}
                            modalIsOpen={modalIsOpen}
                            closeModal={closeModal}
                            handleAddClient={handleAddClient}
                            setNewClient={setNewClient}
                            setIsOpen={setIsOpen}
                        />
                    </div>
                </div>

                {/* Branch Offices */}
                <div className="flex flex-col w-3/6 space-y-2">
                    <label
                        htmlFor="branch_office"
                        className="text-slate-400 font-semibold"
                    >
                        Branch Office
                    </label>
                    <Select
                        id="branch_office"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        options={branchOffices_options}
                        isSearchable={true}
                        placeholder="Select Country"
                    />
                </div>

                {/* Currency */}
                <div className="flex flex-col w-1/6 space-y-2">
                    <label
                        htmlFor="currency"
                        className="text-slate-400 font-semibold"
                    >
                        Currency
                    </label>
                    <input
                        type="text"
                        id="currency"
                        readOnly
                        ref={currencyRef}
                        className="readonly-input bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default DocumentSection;
