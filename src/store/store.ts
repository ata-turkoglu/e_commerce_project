import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/products";
import commonStatesSlice from "./reducers/commonStates";
import cartSlice from "./reducers/cart";

const store = configureStore({
    reducer: {
        productsSlice,
        commonStatesSlice,
        cartSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
