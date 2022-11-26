import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCartProduct } from "../../Api/cartApi";
import { getItem, getUserDetail } from "./../../helper/sessionHelper";
import { toastSuccess } from "./../../helper/toastifyAlert";

function FeatureProduct() {
    const navigate = useNavigate();

    function AddToCart(id) {
        if (!getItem("token")) {
            navigate("/login");
        } else {
            const data = {
                userId: getUserDetail()._id,
                prodId: id,
            };

            addToCartProduct(data)
                .then((res) => {
                    console.log(res);
                    if(res) {
                        toastSuccess("product added into your cart");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    const products = useSelector((state) =>
        state.products.products.filter((product) => product.types === "feature")
    );

    return (
        <div>
            <section className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title featured__controls">
                                <h2>Featured Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {products.map((product, i) => (
                            <div
                                key={i}
                                className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
                            >
                                <div className="featured__item">
                                    <div
                                        className="featured__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${product?.primaryImage})`,
                                        }}
                                    >
                                        <ul className="featured__item__pic__hover">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    onClick={AddToCart.bind(
                                                        this,
                                                        product._id
                                                    )}
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <NavLink to={`/product/${product._id}`}>
                                        <div className="featured__item__text">
                                            <h6>{product?.name}</h6>
                                            <h5>${product?.price}</h5>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))}

                        {/*<div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-2.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-3.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-4.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-5.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-6.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-7.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/featured/feature-8.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="featured__item__pic__hover">
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
                                <div className="featured__item__text">
                                    <h6>
                                        <a href="#">Crab Pool Security</a>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeatureProduct;
