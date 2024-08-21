import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import LoginPopup from "../components/LoginPopup/LoginPopup";

const WebLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
     {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default WebLayout;
