import React, { useEffect, useState } from "react";
import "./Pages.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../store/reducers/products";

function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        null
    );

    const products = useSelector(
        (state: RootState) => state.productsSlice.products
    );

    const categories = useSelector(
        (state: RootState) => state.productsSlice.categories
    );

    const filteredProducts = (): Product[] => {
        if (selectedCategory == null) {
            return products;
        } else {
            return products.filter(
                (itm) => itm.category == categories[selectedCategory]
            );
        }
    };

    useEffect(() => {
        console.log("list", [...products]);
    }, []);

    let productComponents = filteredProducts().map(
        (product: Product, indx: number) => (
            <ProductCard key={indx} product={product} />
        )
    );

    return (
        <div className="componentContainer">
            <div className="categories">
                <span
                    className={`cat-item ${
                        selectedCategory == null ? "cat-item-active" : ""
                    }`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </span>
                {categories.length > 0 &&
                    categories.map((cat, i: number) => (
                        <span
                            className={`cat-item ${
                                selectedCategory == i ? "cat-item-active" : ""
                            }`}
                            onClick={() => setSelectedCategory(i)}
                        >
                            {cat}
                        </span>
                    ))}
            </div>
            <div className="ListContainer">
                {productComponents.length > 0 && productComponents}
            </div>
        </div>
    );
}

export default ProductList;
