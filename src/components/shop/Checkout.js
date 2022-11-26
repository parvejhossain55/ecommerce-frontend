import React from "react";
import HeroBreadcum from './../common/HeroBreadcum';

function Checkout() {
    return (
        <div>
            <HeroBreadcum title="Checkout" subtitle="Checkout" />
            <section className="checkout spad">
                <div className="container">
                    <form>
                        <div className="checkout__form">
                            <h4>Billing Details</h4>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Fist Name<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Last Name<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Country<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Address<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            className="checkout__input__add"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Town/City<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Country/State<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Postcode / ZIP<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Phone<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Email<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Account Password<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Order notes<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">
                                            Products <span>Total</span>
                                        </div>
                                        <ul>
                                            <li>
                                                Vegetable’s Package{" "}
                                                <span>$75.99</span>
                                            </li>
                                            <li>
                                                Fresh Vegetable{" "}
                                                <span>$151.99</span>
                                            </li>
                                            <li>
                                                Organic Bananas{" "}
                                                <span>$53.99</span>
                                            </li>
                                        </ul>
                                        <div className="checkout__order__subtotal">
                                            Subtotal <span>$750.99</span>
                                        </div>
                                        <div className="checkout__order__total">
                                            Total <span>$750.99</span>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adip elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                        <button type="submit" className="site-btn">
                                            PLACE ORDER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout__form mt-3">
                            <h4>Payments Details</h4>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Fist Name<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Last Name<span>*</span>
                                                </p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Country<span>*</span>
                                        </p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Address<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            className="checkout__input__add"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Checkout;
