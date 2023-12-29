import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { customersList } from '../../../../models/customer.model';
import { branchOfficesList } from '../../../../models/branch_office.model';
import Address from '../../../../models/address.model';
import AddCustomerModal from '../customerModal';
import { toast } from 'react-toastify';

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

    const handleAddClient = async () => {
        if (
            !newClient.rut ||
            !newClient.name ||
            !newClient.last_name ||
            !newClient.street ||
            !newClient.number ||
            !newClient.district ||
            !newClient.city ||
            !newClient.phoneNumber
        ) {
            toast.warning('Por favor, complete todos los campos.', {
                position: 'top-right',
                autoClose: 1200,
                pauseOnHover: false,
                theme: 'light'
            });
            return;
        }

        const newCustomerId = customers.length + 1;
        const newAddress = new Address(
            newClient.street,
            newClient.number,
            newClient.district,
            newClient.city
        );

        const newCustomer = {
            id: newCustomerId,
            rut: newClient.rut,
            name: newClient.name,
            last_name: newClient.last_name,
            address: {
                ...newAddress
            },
            phoneNumber: newClient.phoneNumber
        };

        const updatedCustomers = [newCustomer, ...customers];
        setCustomers(updatedCustomers);

        toast.success('Cliente añadido correctamente.', {
            position: 'top-right',
            autoClose: 1200,
            pauseOnHover: false,
            theme: 'light'
        });

        // Limpiar Información
        setNewClient({
            rut: '',
            name: '',
            last_name: '',
            street: '',
            number: '',
            district: '',
            city: '',
            phoneNumber: ''
        });

        console.log(newCustomer);
        closeModal();
    };

    return (
        <>
            <h3 className="font-semibold text-slate-700 text-2xl border-b-2 border-slate-400">
                Document
            </h3>
            <div className="flex md:justify-between space-y-3 md:space-y-0 md:space-x-10 pt-4 flex-col md:flex-row items-center">
                {/* Client */}
                <div className="w-full flex flex-col md:w-3/6 space-y-2">
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
                            className="cursor-pointer hover:bg-blue-400 bg-blue-500 text-white font-bold px-5 py-2"
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
                <div className="w-full flex flex-col md:w-3/6 space-y-2">
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
                <div className="w-full flex flex-col md:w-1/6 space-y-2">
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
        </>
    );
};

export default DocumentSection;
