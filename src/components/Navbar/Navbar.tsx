import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    return (
        <div id="navbar">
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        List
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
                <li className="nav-item">
                    <ShoppingCart strokeWidth={3} />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
