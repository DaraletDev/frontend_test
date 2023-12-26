const fs = require('fs');

const customersData = require('../data/customers.json');

// Función para generar un cliente aleatorio
const generateRandomCustomer = () => {
    return {
        id: customersData.customers.length + 1,
        rut:
            Math.floor(Math.random() * 100000000).toString() +
            '-' +
            Math.floor(Math.random() * 10).toString(),
        name: `Cliente ${customersData.customers.length + 1}`,
        last_name: `Apellido Cliente ${customersData.customers.length + 1}`,
        address: {
            street: `Calle Cliente ${customersData.customers.length + 1}`,
            number: Math.floor(Math.random() * 1000).toString(),
            district: `Comuna Cliente ${customersData.customers.length + 1}`,
            city: `Ciudad Cliente ${customersData.customers.length + 1}`
        },
        phone_number: `+56 9 ${Math.floor(
            Math.random() * 100000000
        ).toString()}`
    };
};

// Genera 100 clientes aleatorios
for (let i = 0; i < 100; i++) {
    const randomCustomer = generateRandomCustomer();
    customersData.customers.push(randomCustomer);
}

// Guarda el archivo customers_data.json
const customersFilePath= './data/generateData/customers_data.json';

fs.writeFileSync(customersFilePath, JSON.stringify(customersData, null, 2));

console.log(
    `Customers data has been generated and saved to ${customersFilePath}`
);
