import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/products";

const store = configureStore({
    reducer: {
        productsSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;