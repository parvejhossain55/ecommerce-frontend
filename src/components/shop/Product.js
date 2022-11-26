import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Product() {
    const products = useSelector((state) =>
        state.products.products.filter((product) => product.types === "onsale")
    );
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="product__discount">
                            <div className="section-title product__discount__title">
                                <h2>Sales Off</h2>
                            </div>
                        </div>
                        <div className="row">
                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="col-lg-4 col-md-6 col-sm-6"
                                >
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
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6>
                                                    <a href="#">
                                                        {product.name}
                                                    </a>
                                                    {/* <a href="#">Crab Pool Security</a> */}
                                                </h6>
                                                <h5>{product.price}</h5>
                                                {/* <h5>$30.00</h5> */}
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-2.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-3.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-4.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-5.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-6.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-7.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-8.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-9.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-10.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-11.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.PUBLIC_URL +
                                                "/assets/img/product/product-12.jpg"
                                            })`,
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
                                            <a href="#">Crab Pool Security</a>
                                        </h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div> */}
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
        </div>
    );
}

export default Product;
