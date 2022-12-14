import React from "react";

function ProductSidebar() {
    return (
        <div>
            <div className="sidebar">
                <div
                    className="sidebar__item sidebar__item__color--option"
                    style={{ marginTop: "30px" }}
                >
                    <h4>Colors</h4>
                    <div className="sidebar__item__color sidebar__item__color--white">
                        <label htmlFor="white">
                            White
                            <input type="radio" id="white" />
                        </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--gray">
                        <label htmlFor="gray">
                            Gray
                            <input type="radio" id="gray" />
                        </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--red">
                        <label htmlFor="red">
                            Red
                            <input type="radio" id="red" />
                        </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--black">
                        <label htmlFor="black">
                            Black
                            <input type="radio" id="black" />
                        </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--blue">
                        <label htmlFor="blue">
                            Blue
                            <input type="radio" id="blue" />
                        </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--green">
                        <label htmlFor="green">
                            Green
                            <input type="radio" id="green" />
                        </label>
                    </div>
                </div>
                <div className="sidebar__item" style={{ marginTop: "30px" }}>
                    <h4>Popular Size</h4>
                    <div className="sidebar__item__size">
                        <label htmlFor="large">
                            Large
                            <input type="radio" id="large" />
                        </label>
                    </div>
                    <div className="sidebar__item__size">
                        <label htmlFor="medium">
                            Medium
                            <input type="radio" id="medium" />
                        </label>
                    </div>
                    <div className="sidebar__item__size">
                        <label htmlFor="small">
                            Small
                            <input type="radio" id="small" />
                        </label>
                    </div>
                    <div className="sidebar__item__size">
                        <label htmlFor="tiny">
                            Tiny
                            <input type="radio" id="tiny" />
                        </label>
                    </div>
                </div>
                <div className="sidebar__item" style={{ marginTop: "30px" }}>
                    <div className="latest-product__text">
                        <h4>Latest Products</h4>
                        {/* <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img
                                            src="img/latest-product/lp-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img
                                            src="img/latest-product/lp-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img
                                            src="img/latest-product/lp-3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img
                                            src="img/latest-product/lp-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img
                                            src="img/latest-product/lp-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img
                                            src="img/latest-product/lp-3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSidebar;
