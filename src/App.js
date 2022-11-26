import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailtsPage from "./pages/ProductDetailtsPage";
import ProductFilter from "./pages/ProductFilter";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/ContactPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/product/:prodId" element={<ProductDetailtsPage />}/>
                    <Route path="/category/:slug" element={<ProductFilter />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
