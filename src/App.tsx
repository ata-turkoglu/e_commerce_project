import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartModal from "./components/CartModal/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/reducers/products";
import { AppDispatch, RootState } from "./store/store";

function App() {
    const products = useSelector(
        (state: RootState) => state.productsSlice.products
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (products.length <= 0) {
            console.log("****");
            dispatch(fetchProducts());
        }
    }, []);
    return (
        <div className="App">
            <Navbar />
            <CartModal />
            <Outlet />
        </div>
    );
}

export default App;
