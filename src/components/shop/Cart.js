import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProductListForCart } from "../../Api/cartApi";
import HeroBreadcum from "../common/HeroBreadcum";
import { getUserDetail } from "./../../helper/sessionHelper";

function Cart() {
    let productPrice;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductListForCart(getUserDetail()._id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // console.log(products);

    return (
        <div>
            <HeroBreadcum title="Organ Shop" subtitle="Shop" />

            {/* Cart Page */}
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">
                                                Products
                                            </th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, i) => (
                                            <tr key={i}>
                                                <td className="shoping__cart__item">
                                                    <img
                                                        src={`${product.primaryImage}`}
                                                        alt={product.name}
                                                        style={{
                                                            height: "80px",
                                                        }}
                                                    />
                                                    <h5>{product.name}</h5>
                                                </td>
                                                <td
                                                    id="productPrice"
                                                    className="shoping__cart__price"
                                                >
                                                    {product.price}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input
                                                                type="number"
                                                                defaultValue="1"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    id="totalPrice"
                                                    className="shoping__cart__total"
                                                >
                                                    {product.price}
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close"></span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <Link
                                    to="/shop"
                                    className="primary-btn cart-btn"
                                >
                                    CONTINUE SHOPPING
                                </Link>
                                <a
                                    href="#"
                                    className="primary-btn cart-btn cart-btn-right"
                                >
                                    <span className="icon_loading"></span>
                                    Upadate Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Enter your coupon code"
                                        />
                                        <button
                                            type="submit"
                                            className="site-btn"
                                        >
                                            APPLY COUPON
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>
                                        Subtotal <span>$454.98</span>
                                    </li>
                                    <li>
                                        Total <span>$454.98</span>
                                    </li>
                                </ul>
                                <a href="#" className="primary-btn">
                                    PROCEED TO CHECKOUT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
