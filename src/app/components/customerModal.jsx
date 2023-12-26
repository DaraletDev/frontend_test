import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const AddCustomerModal = ({
    newClient,
    modalIsOpen,
    closeModal,
    handleAddClient,
    setNewClient,
    setIsOpen
}) => {
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
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="flex justify-between items-center px-4">
                <button onClick={() => setIsOpen(false)}>
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div className="text-center text-2xl py-5">
                    Añadir Nuevo Cliente
                </div>
                <div></div>
            </div>

            <form
                name="addCustomer"
                // onSubmit={() => {
                //     handleAddClient();
                // }}
                className="px-20"
            >
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                            <label
                                htmlFor="nombre_cliente"
                                className="text-sm text-slate-500"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Carlos"
                                value={newClient.name}
                                onChange={(e) =>
                                    setNewClient({
                                        ...newClient,
                                        name: e.target.value
                                    })
                                }
                                className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="apellido_cliente"
                                className="text-sm text-slate-500"
                            >
                                Apellido
                            </label>
                            <input
                                type="text"
                                placeholder="Aravena"
                                name="last_name"
                                value={newClient.last_name}
                                onChange={(e) =>
                                    setNewClient({
                                        ...newClient,
                                        last_name: e.target.value
                                    })
                                }
                                className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="rut_cliente"
                            className="text-sm text-slate-500"
                        >
                            Rut
                        </label>
                        <input
                            type="text"
                            name="rut"
                            placeholder="211403205"
                            value={newClient.rut}
                            onChange={(e) =>
                                setNewClient({
                                    ...newClient,
                                    rut: e.target.value
                                })
                            }
                            className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center gap-2 py-2">
                        <div className="flex flex-col">
                            <label
                                htmlFor="calle_cliente"
                                className="text-sm text-slate-500"
                            >
                                Calle
                            </label>
                            <input
                                type="text"
                                name="street"
                                placeholder="Ana maria"
                                value={newClient.street}
                                onChange={(e) =>
                                    setNewClient({
                                        ...newClient,
                                        street: e.target.value
                                    })
                                }
                                className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="numero_cliente"
                                className="text-sm text-slate-500"
                            >
                                Numero
                            </label>
                            <input
                                placeholder="3456"
                                type="text"
                                name="number"
                                value={newClient.number}
                                onChange={(e) =>
                                    setNewClient({
                                        ...newClient,
                                        number: e.target.value
                                    })
                                }
                                className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="comuna_cliente"
                            className="text-sm text-slate-500"
                        >
                            Comuna
                        </label>
                        <input
                            type="text"
                            placeholder="Mejillones"
                            name="district"
                            value={newClient.district}
                            onChange={(e) =>
                                setNewClient({
                                    ...newClient,
                                    district: e.target.value
                                })
                            }
                            className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="ciudad_cliente"
                            className="text-sm text-slate-500"
                        >
                            Ciudad
                        </label>
                        <input
                            type="text"
                            placeholder="Antofagasta"
                            name="city"
                            value={newClient.city}
                            onChange={(e) =>
                                setNewClient({
                                    ...newClient,
                                    city: e.target.value
                                })
                            }
                            className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="telefono_cliente"
                            className="text-sm text-slate-500"
                        >
                            Teléfono
                        </label>
                        <input
                            type="text"
                            placeholder="56940203470"
                            name="phoneNumber"
                            value={newClient.phoneNumber}
                            onChange={(e) =>
                                setNewClient({
                                    ...newClient,
                                    phoneNumber: e.target.value
                                })
                            }
                            className="bg-white rounded px-4 py-2 border border-none focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="w-full flex justify-end">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddClient();
                            }}
                            type="submit"
                            className="bg-blue-500 text-white font-bold px-7 py-2 rounded mt-5"
                        >
                            Añadir
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default AddCustomerModal;
