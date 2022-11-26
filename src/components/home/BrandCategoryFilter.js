import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getCategoryBySlug } from "../../Api/categoryApi";

function BrandCategoryFilter({ model, slug }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategoryBySlug(slug)
            .then((res) => {
                setProducts(res.data.info.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [slug]);

    // console.log(products);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <div className="product__discount">
                        <div className="section-title product__discount__title">
                            <h2>Sales Off</h2>
                        </div>
                    </div> */}
                    <div className="row">
                        {products.map((product, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                                <NavLink to={`/product/${product._id}`}>
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{
                                                backgroundImage: `url(${product.primaryImage})`,
                                            }}
                                        >
                                            <ul className="product__item__pic__hover">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-retweet"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">{product.name}</a>
                                            </h6>
                                            <h5>{product.price}</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <div className="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">
                            <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandCategoryFilter;
