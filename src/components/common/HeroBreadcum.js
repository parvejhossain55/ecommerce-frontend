import React from "react";

function HeroBreadcum(props) {
    return (
        <div>
            {/* Hero Breadcum */}
            <section
                className="breadcrumb-section set-bg"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/assets/img/breadcrumb.jpg"
                    })`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{props.title}</h2>
                                <div className="breadcrumb__option">
                                    <a href="/">Home</a>
                                    <span>{props.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroBreadcum;
