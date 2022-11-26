import React, { useEffect } from "react";
import Layout from "./Layout";
import HeroBanner from "./../components/home/HeroBanner";
import FeatureProduct from "./../components/home/FeatureProduct";
import HomeBlog from "./../components/home/HomeBlog";
import HomeBottomBanner from "./../components/home/HomeBottomBanner";
import { getAllProduct } from "../Api/productApi";
import { storeProduct } from "../store/features/productSlice";
import store from "./../store/store";

function HomePage() { 
    useEffect(() => {
        getAllProduct(1, 12).then((res) => {
            store.dispatch(storeProduct(res.data.info[0].Rows));
        });
    });
    return (
        <div>
            <Layout
                data={{
                    hero: <HeroBanner />,
                    feature: <FeatureProduct />,
                    blog: <HomeBlog />,
                    banner: <HomeBottomBanner />,
                }}
            />
        </div>
    );
}

export default HomePage;
