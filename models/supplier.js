import Address from './Address';

class Supplier {
    constructor(
        rut,
        name,
        addressStreet,
        addressNumber,
        addressDistrict,
        addressCity,
        phone,
        website
    ) {
        this.rut = rut;
        this.name = name;
        this.address = new Address(
            addressStreet,
            addressNumber,
            addressDistrict,
            addressCity
        );
        this.phone = phone;
        this.website = website;
    }
}

export default Supplier;
