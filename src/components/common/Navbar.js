import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Navbar() {
    const countCart = useSelector((state) => state.cart.totalCartItem);
    
    const printCountCart = () => {
        if (countCart !== 0) {
            return <span>{countCart}</span>;
        }
    };

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <NavLink to="/">
                                    <img src={logo} alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/cart">Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="/checkout">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart"></i>{" "}
                                            {/* <span>1</span> */}
                                        </a>
                                    </li>
                                    <li>
                                        <NavLink to="/cart">
                                            <i className="fa fa-shopping-bag"></i>
                                            {printCountCart()}
                                            {/* {countCart && `<span>${countCart}</span>`} */}
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="header__cart__price">
                                    item: <span>$150.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
