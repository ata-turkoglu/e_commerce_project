import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface cartItem {
    productId: number;
    productName: string;
    price: number;
    count: number;
    totalPrice: number;
}

interface cart {
    items: cartItem[];
    totalPrice: number;
}

const initialState: cart = {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<cartItem>) => {
            const foundItem = state.items.find(
                (item) => item.productId == action.payload.productId
            );
            if (foundItem) {
                foundItem.count++;
                foundItem.totalPrice += foundItem.price;
            } else {
                state.items.push(action.payload);
            }
        },
        increaseItemCount: (state, action: PayloadAction<number>) => {
            const foundItem = state.items.find(
                (item) => item.productId == action.payload
            );
            if (foundItem) {
                foundItem.count++;
                foundItem.totalPrice += foundItem.price;
            }
        },
        decreaseItemCount: (state, action: PayloadAction<number>) => {
            const foundItem = state.items.find(
                (item) => item.productId == action.payload
            );
            if (foundItem && foundItem.count > 1) {
                foundItem.count--;
                foundItem.totalPrice -= foundItem.price;
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(
                (item) => item.productId == action.payload
            );

            state.items.splice(index, 1);
        },
    },
});

export const amountOfCartItem = createSelector(
    [(state: RootState) => state.cartSlice.items],
    (items) => items.length
);

export default cartSlice.reducer;
export const { addItem, removeItem, increaseItemCount, decreaseItemCount } =
    cartSlice.actions;
