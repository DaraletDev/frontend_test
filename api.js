const BASE_URL = 'http://localhost:3001';

export const addDetail = async (detail) => {
    try {
        const res = await fetch(`${BASE_URL}/sales`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detail)
        });

        const newDetail = await res.json();
        return newDetail;
    } catch (error) {
        console.error('Error adding detail:', error);
        throw error;
    }
};
export const addSale = async (sale) => {
    try {
        const res = await fetch(`${BASE_URL}/sales`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sale)
        });

        const newSale = await res.json();
        return newSale;
    } catch (error) {
        console.error('Error adding sale:', error);
        throw error;
    }
};

export const getAllSales = async () => {
    try {
        const res = await fetch(`${BASE_URL}/sales`);

        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        const allSales = await res.json();
        return allSales;
    } catch (error) {
        console.error('Error getting all sales:', error);
        throw error;
    }
};
