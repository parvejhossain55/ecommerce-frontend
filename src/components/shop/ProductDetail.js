import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getProductById } from "../../Api/productApi";

function ProductDetail({ id }) {
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res.data.info);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // console.log(product._id);
    return (
        <div>
            <section className="product-details">
                <div className="row" key={product?._id}>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img
                                    className="product__details__pic__item--large"
                                    src={`${product?.primaryImage}`}
                                    alt={`${product?.name}`}
                                />
                            </div>
                            <div className="product__details__pic__slider">
                                {/* <img src={`${product?.primaryImage}`} alt={`${product?.name}`} /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>{product?.name}</h3>
                            <div className="product__details__rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>(18 reviews)</span>
                            </div>
                            <div className="product__details__price">
                                ${product?.price}
                            </div>
                            <p>
                                {/* {shortDesc} */}
                                {/* Mauris blandit aliquet elit, eget tincidunt nibh
                                pulvinar a. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Sed
                                porttitor lectus nibh. Vestibulum ac diam sit
                                amet quam vehicula elementum sed sit amet dui.
                                Proin eget tortor risus. */}
                            </p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="number" defaultValue="1" />
                                    </div>
                                </div>
                            </div>
                            <NavLink to="/name" className="primary-btn">
                                ADD TO CARD
                            </NavLink>
                            <NavLink to="/name" className="heart-icon">
                                <span className="icon_heart_alt"></span>
                            </NavLink>
                            <ul>
                                <li>
                                    <b>Availability</b>{" "}
                                    <span>{product?.status}</span>
                                </li>
                                <li>
                                    <b>Shipping</b>
                                    <span>
                                        01 day shipping.
                                        <samp>Free pickup today</samp>
                                    </span>
                                </li>
                                <li>
                                    <b>Weight</b>{" "}
                                    <span>0.5 {product?.unit}</span>
                                </li>
                                <li>
                                    <b>Share on</b>
                                    <div className="share">
                                        <NavLink to="/name">
                                            <i className="fa fa-facebook"></i>
                                        </NavLink>
                                        <NavLink to="/name">
                                            <i className="fa fa-twitter"></i>
                                        </NavLink>
                                        <NavLink to="/name">
                                            <i className="fa fa-instagram"></i>
                                        </NavLink>
                                        <NavLink to="/name">
                                            <i className="fa fa-pinterest"></i>
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true" >
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#tabs-2"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        Information
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Description</h6>
                                        <p>{product?.description}</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>
                                            Vestibulum ac diam sit amet quam
                                            vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta
                                            dapibus. Proin eget tortor risus.
                                            Vivamus suscipit tortor eget felis
                                            porttitor volutpat. Vestibulum ac
                                            diam sit amet quam vehicula
                                            elementum sed sit amet dui. Donec
                                            rutrum congue leo eget malesuada.
                                            Vivamus suscipit tortor eget felis
                                            porttitor volutpat. Curabitur arcu
                                            erat, accumsan id imperdiet et,
                                            porttitor at sem. Praesent sapien
                                            massa, convallis a pellentesque nec,
                                            egestas non nisi. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed
                                            sit amet dui. Vestibulum ante ipsum
                                            primis in faucibus orci luctus et
                                            ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet
                                            aliquam vel, ullamcorper sit amet
                                            ligula. Proin eget tortor risus.
                                        </p>
                                        <p>
                                            Praesent sapien massa, convallis a
                                            pellentesque nec, egestas non nisi.
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Mauris
                                            blandit aliquet elit, eget tincidunt
                                            nibh pulvinar a. Cras ultricies
                                            ligula sed magna dictum porta. Cras
                                            ultricies ligula sed magna dictum
                                            porta. Sed porttitor lectus nibh.
                                            Mauris blandit aliquet elit, eget
                                            tincidunt nibh pulvinar a.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Product Details Section End --> */}

            {/* <!-- Related Product Section Begin --> */}
            {/* <section className="related-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title related__product__title">
                                <h2>Related Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.PUBLIC_URL +
                                            "/assets/img/product/product-1.jpg"
                                        })`,
                                    }}
                                >
                                    <ul className="product__item__pic__hover">
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-heart"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-retweet"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-shopping-cart"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <NavLink to="/name">Crab Pool Security</NavLink>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
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
                                            <NavLink to="/name">
                                                <i className="fa fa-heart"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-retweet"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-shopping-cart"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <NavLink to="/name">Crab Pool Security</NavLink>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
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
                                            <NavLink to="/name">
                                                <i className="fa fa-heart"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-retweet"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-shopping-cart"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <NavLink to="/name">Crab Pool Security</NavLink>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
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
                                            <NavLink to="/name">
                                                <i className="fa fa-heart"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-retweet"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/name">
                                                <i className="fa fa-shopping-cart"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <NavLink to="/name">Crab Pool Security</NavLink>
                                    </h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default ProductDetail;
