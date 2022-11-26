import axios from "axios";

let url = "http://localhost:5000/api/v1";

let axiosHeader = {
    headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmVhM2JmYzk4OGMxNzMzOTdkMWYxOSIsImVtYWlsIjoicGFydmVqaG9zc2FpbjQwNDBAZ21haWwuY29tIiwicm9sZSI6ImJ1eWVyIiwiaWF0IjoxNjY4Nzk2NTQzLCJleHAiOjE2Njk0MDEzNDN9.AkvY2Dht6caqW0_AHZTWJDeC6WbnHF58dCbIgnr8qtM",
    },
};

export async function getAllProduct(page, limit, query = "") {
    return await axios
        .get(
            url + `/ProductList?page=${page}&limit=${limit}&search=${query}`,
            axiosHeader
        )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return false;
        });
}

export async function getProductById(id) {
    return await axios
        .get(url + `/GetProductById/${id}`, axiosHeader)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return false;
        });
}
