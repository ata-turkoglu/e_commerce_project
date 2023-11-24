import React, { useEffect, memo } from "react";
import "./Pages.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../store/reducers/products";

function ProductList() {
    const products = useSelector(
        (state: RootState) => state.productsSlice.products
    );

    const categories = useSelector(
        (state: RootState) => state.productsSlice.categories
    );

    useEffect(() => {
        console.log("list", [...products]);
    }, []);

    let productComponents = products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
    ));

    return (
        <div className="componentContainer">
            <div className="categories">
                <span className="cat-item cat-item-active">All</span>
                {categories.length > 0 &&
                    categories.map((cat) => (
                        <span className="cat-item">{cat}</span>
                    ))}
            </div>
            <div className="ListContainer">
                {productComponents.length > 0 && productComponents}
            </div>
        </div>
    );
}

export default ProductList;
