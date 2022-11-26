import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {
        storeProduct(state, action) {
            state.products = action.payload;
        },
    },
});

export const { storeProduct } = productSlice.actions;
export default productSlice.reducer;
