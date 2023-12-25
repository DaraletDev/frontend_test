import Address from '../models/address.model';
import customersData from '../data/customers.json';

class Customer {
    constructor(id, rut, name, last_name, address, phoneNumber) {
        this.id = id;
        this.rut = rut;
        this.name = name;
        this.last_name = last_name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}
export default Customer
// Mapear datos y crear instancias de Customer
const customers = customersData.customers.map((customerData) => {
    const address = new Address(
        customerData.address.street,
        customerData.address.number,
        customerData.address.district,
        customerData.address.city
    );

    return new Customer(
        customerData.id,
        customerData.rut,
        customerData.name,
        customerData.last_name,
        address,
        customerData.phone_number
    );
});

export const customersList = customers;
