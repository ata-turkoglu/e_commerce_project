import React from "react";
import "./ProductCard.css";
import { Star, UserCheck2 } from "lucide-react";
import { Product } from "../../store/reducers/products";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addItem } from "../../store/reducers/cart";

interface Props {
    product: Product;
}

function ProductCard({ product }: Props) {
    const dispatch = useDispatch<AppDispatch>();

    const starCount: number = +Math.round(product.rating.rate);
    let rating = [];
    for (let i = 0; i < starCount; i++) {
        rating.push(<Star color="gold" fill="gold" />);
    }
    return (
        <div key={product.id} className="card productCard">
            <div className="productImg">
                <img src={product.image} className="card-img-top" />
            </div>
            <div className="card-body productInfo">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item productPrice">
                    <b>$ {product.price}</b>
                </li>
            </ul>
            <div className="card-body d-flex flex-column">
                <div>{rating}</div>
                <div className="d-flex align-center justify-content-center">
                    <UserCheck2 className="me-2" />
                    {product.rating.count}
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.category}</li>
                <li className="list-group-item">
                    <button
                        className="btn addToCartBtn"
                        onClick={() =>
                            dispatch(
                                addItem({
                                    productId: product.id,
                                    productName: product.title,
                                    price: product.price,
                                    count: 1,
                                    totalPrice: product.price,
                                })
                            )
                        }
                    >
                        Add to Cart
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default ProductCard;
