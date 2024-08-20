import React, { useState } from "react";
import Navbar from "./components/Web/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Web/pages/Home/Home"
import Cart from "./components/Web/pages/Cart/Cart";
import PlaceOrder from "./components/Web/pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Web/Footer/Footer";
import LoginPopup from "./components/Web/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
