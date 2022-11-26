import React, { useEffect, useState } from "react";
import Navbar from "./../components/common/Navbar";
import Footer from "./../components/common/Footer";
import { getAllCategory } from "../Api/categoryApi";
import { NavLink } from "react-router-dom";

function Layout({ data }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategory()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    {categories.map((category, i) => (
                                        <li key={i}>
                                            <NavLink
                                                to={`/category/${category.slug}`}
                                            >
                                                {category.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {data.sidebar ? data.sidebar : ""}
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form>
                                        <div className="hero__search__categories">
                                            All Categories
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="What do yo u need?"
                                        />
                                        <button
                                            type="submit"
                                            className="site-btn"
                                        >
                                            SEARCH
                                        </button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            {/* Product Page Mount Here */}
                            {data.hero}
                        </div>
                    </div>
                </div>
            </section>
            {data.feature}
            {data.banner}
            {data.blog}
            <Footer />
        </div>
    );
}

export default Layout;
