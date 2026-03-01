import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [{ name: "Mobile", price: 12000 }],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.name !== action.payload);
        }
    }
})

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;