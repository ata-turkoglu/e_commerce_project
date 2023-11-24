import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { changeCartModalState } from "../../store/reducers/commonStates";
import CartModal from "../CartModal/CartModal";
import { amountOfCartItem } from "../../store/reducers/cart";

function Navbar() {
    const dispatch = useDispatch<AppDispatch>();
    const cartModalState = useSelector(
        (state: RootState) => state.commonStatesSlice.cartModalState
    );
    const cartItemCount = useSelector(amountOfCartItem);
    return (
        <div id="navbar">
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Product List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="cart">
                        Cart
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-underline">
                <li
                    className="nav-item"
                    onClick={() => dispatch(changeCartModalState())}
                >
                    <div className="cart-item">
                        <ShoppingCart strokeWidth={3} />
                        <span className="position-absolute start-100 translate-middle badge rounded-pill cart-badge">
                            {cartItemCount}
                        </span>
                    </div>
                </li>
            </ul>
            {cartModalState && <CartModal />}
        </div>
    );
}

export default Navbar;
