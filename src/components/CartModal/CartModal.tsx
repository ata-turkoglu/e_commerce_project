import React from "react";
import "./CartModal.css";
import { PlusSquare, MinusSquare, MinusCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import {
    removeItem,
    increaseItemCount,
    decreaseItemCount,
} from "../../store/reducers/cart";
import type { cartItem } from "../../store/reducers/cart";

function CartModal() {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: RootState) => state.cartSlice.items);

    return (
        <div id="cartModal">
            {cartItems.length > 0 ? (
                cartItems.map((item: cartItem) => (
                    <div key={item.productId} className="cartItem">
                        <div
                            className="itemInfo"
                            data-bs-toggle="tooltip"
                            data-bs-title="Default tooltip"
                        >
                            <MinusCircle
                                className="actionIcon"
                                size={18}
                                color="brown"
                                onClick={() =>
                                    dispatch(removeItem(item.productId))
                                }
                            />
                            <span className="itemName">{item.productName}</span>
                            <span className="itemPrice">
                                ${item.totalPrice.toFixed(2)}
                            </span>
                        </div>
                        <div className="itemAction">
                            <PlusSquare
                                className="actionIcon"
                                onClick={() =>
                                    dispatch(increaseItemCount(item.productId))
                                }
                            />
                            <span className="itemCount">{item.count}</span>
                            <MinusSquare
                                className="actionIcon"
                                color={item.count <= 1 ? "#B4B4B4" : "black"}
                                onClick={() =>
                                    item.count > 1 &&
                                    dispatch(decreaseItemCount(item.productId))
                                }
                            />
                        </div>
                    </div>
                ))
            ) : (
                <span className="emptytext">Cart is Empty</span>
            )}
        </div>
    );
}

export default CartModal;
