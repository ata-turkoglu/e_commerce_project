import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        count: number;
        rate: number;
    };
}

export interface Products {
    products: Product[];
}

const initialState: Products = {
    products: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.products = [...action.payload];
                }
            )
            .addCase(fetchProducts.rejected, () => {
                console.log("rejected");
            });
    },
});

export const fetchProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response: any = await axios.get(api + "/products").then((res) => {
            return res.data;
        });
        return response;
    }
);

export default productsSlice.reducer;
