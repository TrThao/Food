import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import RoutesConfig from "../routes/index";

const WebLayout = ({ setShowLogin }) => {
  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <Routes>
          {RoutesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default WebLayout;
