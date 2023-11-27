import React, { useEffect, useState } from "react";
import "./Pages.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/Filter/Filter";
import { Product } from "../store/reducers/products";
import { Menu } from "lucide-react";

function ProductList() {
    const [filterVisible, setFilterVisible] = useState<boolean>(false);
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
        <div className="listComponentContainer">
            <div className="categories">
                <Menu
                    className="me-5"
                    style={{ cursor: "pointer" }}
                    onClick={() => setFilterVisible((val) => !val)}
                />
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
            <div className="mainList">
                <Filter show={filterVisible} />
                <div className="ListContainer">
                    {productComponents.length > 0 && productComponents}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
