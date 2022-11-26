import React from "react";
import Layout from "./Layout";
import Product from "./../components/shop/Product";
import ProductSidebar from "./../components/shop/ProductSidebar";

function ShopPage() {
    return (
        <Layout
            data={{
                hero: <Product />,
                sidebar: <ProductSidebar />,
            }}
        />
    );
}

export default ShopPage;
