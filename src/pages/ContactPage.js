import React from "react";
import Navbar from "../components/common/Navbar";
import HeroBreadcum from "../components/common/HeroBreadcum";
import Footer from "../components/common/Footer";
import Contact from "../components/contact/Contact";

function ContactPage() {
    return (
        <div>
            <Navbar />
            <HeroBreadcum title="Contact Us" subtitle="Contact" />
            <Contact />
            <Footer />
        </div>
    );
}

export default ContactPage;
