import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_API_KEY;

export interface User {
    id: number;
    addres: {
        city: string;
        geolocation: { lat: string; long: string };
        number: number;
        street: string;
        zipcode: string;
    };
    name: {
        firstname: string;
        lastname: string;
    };
    password: string;
    phone: string;
    username: string;
}

interface InintialState {
    users: User[];
}

const initialState: InintialState = {
    users: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.users = [...action.payload];
                }
            )
            .addCase(fetchUsers.rejected, () => {
                console.log("rejected");
            });
    },
});

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
    const response: any = await axios.get(api + "/users").then((result) => {
        return result.data;
    });
    return response;
});

export default usersSlice.reducer;
