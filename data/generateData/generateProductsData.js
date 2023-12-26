const fs = require('fs');
const productsData = require('../data/products.json');
const maxBranchOfficeId = 20;
const generateRandomProduct = () => {
    const randomBranchOfficeId =
        Math.floor(Math.random() * maxBranchOfficeId) + 1;

    return {
        id: productsData.products.length + 1,
        name: `Product ${productsData.products.length + 1}`,
        price: Math.floor(Math.random() * 2000) + 1000,
        stock: Math.floor(Math.random() * 50) + 1,
        branch_office_id: randomBranchOfficeId
    };
};

for (let i = 0; i < 1000; i++) {
    const randomProduct = generateRandomProduct();
    productsData.products.push(randomProduct);
}

const productsFilePath = './data/generateData/products_data.json';

fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2));

console.log(
    `Products data has been generated and saved to ${productsFilePath}`
);
