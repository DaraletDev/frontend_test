import Address from '../models/address.model';
import sellersData from '../data/sellers.json'; 

class Seller {
    constructor(
        id,
        rut,
        name,
        last_name,
        address,
        phoneNumber,
        birthdate,
        email
    ) {
        this.id = id;
        this.rut = rut;
        this.name = name;
        this.last_name = last_name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.birthdate = birthdate;
        this.email = email;
    }
}

// Poblar con datos
const sellers = sellersData.sellers.map((sellerData) => {
    const address = new Address(
        sellerData.address.street,
        sellerData.address.number,
        sellerData.address.district,
        sellerData.address.city
    );

    return new Seller(
        sellerData.id,
        sellerData.rut,
        sellerData.name,
        sellerData.last_name,
        address,
        sellerData.phone_number,
        sellerData.birthdate,
        sellerData.email
    );
});

export const sellersList = sellers;
