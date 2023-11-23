import React, { useEffect } from "react";
import "./Pages.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../store/reducers/products";

function ProductList() {
    const products = useSelector(
        (state: RootState) => state.productsSlice.products
    );

    console.log("list", products);

    let productComponents = products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
    ));

    return (
        <div className="ListContainer">
            {productComponents.length > 0 && productComponents}
        </div>
    );
}

export default ProductList;
