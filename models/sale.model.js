import SaleDetail from '../models/sale_detail.model.js';
import { v4 as uuidv4 } from 'uuid';
import salesData from '../data/sales.json';

class Sale {
    constructor(id, date, customer, branchOffice, currency) {
        this.id = id;
        this.date = date;
        this.customer = customer;
        this.branchOffice = branchOffice;
        this.currency = currency;
        this.details = [];
        this.total = 0;
    }

    addDetail(name, quantity, price) {
        const id = uuidv4();
        const subtotal = quantity * price;
        const saleDetail = new SaleDetail(id, name, quantity, price, subtotal);
        this.details.push(saleDetail);
        this.calculateTotal();
    }

    calculateTotal() {
        this.total = this.details.reduce(
            (sum, detail) => sum + parseInt(detail.subtotal),
            0
        );
    }
}

// Mapear datos y crear instancias de Sale
const sales = salesData.sales.map((saleData) => {
    const sale = new Sale(
        saleData.id_sale,
        saleData.date_sale,
        saleData.document.customer,
        saleData.document.branch_office,
        saleData.document.currency
    );

    // Agregar detalles a la venta
    saleData.details.forEach((detail) => {
        sale.addDetail(detail.name, detail.quantity, detail.price);
    });

    // Calcular total
    sale.calculateTotal();

    return sale;
});

export const salesList = sales;

export default Sale;
