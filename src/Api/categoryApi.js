import axios from "axios";

let url = "http://localhost:5000/api/v1";

let axiosHeader = {
    headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmVhM2JmYzk4OGMxNzMzOTdkMWYxOSIsImVtYWlsIjoicGFydmVqaG9zc2FpbjQwNDBAZ21haWwuY29tIiwicm9sZSI6ImJ1eWVyIiwiaWF0IjoxNjY4Nzk2NTQzLCJleHAiOjE2Njk0MDEzNDN9.AkvY2Dht6caqW0_AHZTWJDeC6WbnHF58dCbIgnr8qtM",
    },
};



// get all category
export async function getAllCategory() {
    return await axios
        .get(url + "/DropdownCategory", axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                return res;
            }
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

// find category using slug
export async function getCategoryBySlug(slug) {
    return await axios
        .get(url +`/GetCategoryBySlug/${slug}`, axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                return res;
            }
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}
