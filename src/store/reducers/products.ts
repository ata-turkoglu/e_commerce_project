import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
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
    categories: String[];
}

const initialState: Products = {
    products: [],
    categories: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            action.payload.forEach((item: Product) => {
                let found = state.categories.find(
                    (cat) => cat == item.category
                );
                if (!found) {
                    state.categories.push(item.category);
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.products = [...action.payload];
                    productsSlice.caseReducers.setCategories(state, action);
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

export const getCategories = createSelector(
    [(state: RootState) => state.productsSlice.products],
    (items) => items.length
);

export default productsSlice.reducer;
