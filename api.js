const BASE_URL = 'http://localhost:3001';


export const getAllDetails = async () => {
    const res = await fetch(`${BASE_URL}/details`);
    const details = await res.json();
    return details;
};


export const addDetail = async (detail) => {
    const res = await fetch(`${BASE_URL}/details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detail)
    });

    const newDetail = await res.json();
    return newDetail;
}