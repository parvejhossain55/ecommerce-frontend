import React from "react";
import Navbar from "../components/common/Navbar";
import Cart from "../components/shop/Cart";
import Checkout from './../components/shop/Checkout';

function CheckoutPage() {
    return (
        <div>
            <Navbar />
            <Checkout />
        </div>
    );
}

export default CheckoutPage;
