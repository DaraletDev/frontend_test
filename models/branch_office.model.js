import branch_offices from '../data/branch_offices.json';
import products from '../data/products.json';
import Product from './product.model';

class BranchOffice {
    constructor(id, name, currency) {
        this.id = id;
        this.name = name;
        this.currency = currency;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
}

const branchOfficesData = branch_offices;
const productsData = products;

// Poblar con datos
export const branchOfficesList = branchOfficesData.branch_offices.map(
    (office) => {
        const branchOffice = new BranchOffice(
            office.id,
            office.name,
            office.currency
        );

        // Filtrar productos por sucursal y vincularlos
        const productsInOffice = productsData.products.filter(
            (product) => product.branch_office_id === office.id
        );
        productsInOffice.forEach((product) => {
            const newProduct = new Product(
                product.id,
                product.name,
                product.price,
                product.stock,
                branchOffice
            );
            branchOffice.addProduct(newProduct);
        });

        return branchOffice;
    }
);
