import React from "react";

function HeroBanner() {
    return (
        <div>
            <div
                className="hero__item set-bg"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/assets/img/hero/banner.jpg"
                    })`,
                }}
            >
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>
                        Vegetable <br />
                        100% Organic
                    </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" className="primary-btn">
                        SHOP NOW
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
