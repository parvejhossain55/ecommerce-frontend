import React from "react";
import Layout from "./Layout";
import ProductDetail from "./../components/shop/ProductDetail";
import { useParams } from "react-router-dom";

function ProductDetailtsPage() {
    const { prodId } = useParams();
    
    return (
        <Layout
            data={{
                hero: <ProductDetail id={prodId} />,
            }}
        />
    );
}

export default ProductDetailtsPage;
