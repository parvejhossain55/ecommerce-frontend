import React from "react";
import Layout from "./Layout";
import BrandCategoryFilter from "../components/home/BrandCategoryFilter";
import { useParams } from "react-router-dom";

function CategoriesProduct() {
    const { slug } = useParams();
    return (
        <Layout
            data={{
                hero: <BrandCategoryFilter model="category" slug={slug} />,
            }}
        />
    );
}

export default CategoriesProduct;
