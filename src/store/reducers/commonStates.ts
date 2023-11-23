import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
    cartModalState: boolean;
}

const initialState: States = {
    cartModalState: false,
};

export const commonStatesSlice = createSlice({
    name: "commonStates",
    initialState,
    reducers: {
        changeCartModalState: (state) => {
            state.cartModalState = !state.cartModalState;
        },
    },
});

export default commonStatesSlice.reducer;
export const { changeCartModalState } = commonStatesSlice.actions;
