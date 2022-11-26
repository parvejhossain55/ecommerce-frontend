import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalCartItem: 0,
        cartItem: [],
    },
    reducers: {
        countCartItem(state) {
            state.totalCartItem = state.cartItem.length;
        },
        addCartItem(state, action) {
            let itemExist = state.cartItem.includes(action.payload);
            
            if(itemExist !== true) {
                state.cartItem.push(action.payload);
                state.totalCartItem += 1
            }
        },
        removeCartItem(state, action) {
            let newCartItem = state.cartItem.filter(
                (item) => item !== action.payload
            );
            state.cartItem = newCartItem;
        },
        clearCartItem(state, action) {},
    },
});

export const { countCartItem, addCartItem, removeCartItem, clearCartItem } =
    cartSlice.actions;
export default cartSlice.reducer;
