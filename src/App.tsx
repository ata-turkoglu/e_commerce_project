import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/reducers/products";
import { fetchUsers } from "./store/reducers/users";
import { AppDispatch, RootState } from "./store/store";

function App() {
    const products = useSelector(
        (state: RootState) => state.productsSlice.products
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (products.length <= 0) {
            dispatch(fetchProducts());
            dispatch(fetchUsers());
        }
    }, []);
    return (
        <div className="App">
            <Navbar />
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
