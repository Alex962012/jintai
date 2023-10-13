import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (id) => {
        const data = await axios.get(`/product/getAll?typeId=${id}`);
        return data;
    }
);
export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (id) => {
        const data = await axios.get(`/product/${id}`);

        return data;
    }
);
const initialState = {
    products: {
        items: [],
        status: "loading",
    },
};
const initialStateProduct = {
    product: {
        item: [],
        status: "loading",
    },
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},

    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.products.status = "loading";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products.items = action.payload.data;
            state.products.status = "loaded";
        },
        [fetchProducts.rejected]: (state) => {
            state.products.items = [];
            state.products.status = "error";
        },
    },
});
const productSlice = createSlice({
    name: "product",
    initialState: initialStateProduct,
    reducers: {},

    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.product.status = "loading";
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.product.item = action.payload.data;
            state.product.status = "loaded";
        },
        [fetchProduct.rejected]: (state) => {
            state.product.item = [];
            state.product.status = "error";
        },
    },
});
export const productReducer = productSlice.reducer;
export const productsReducer = productsSlice.reducer;
