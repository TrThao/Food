import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import WebLayout from "./layouts/weblayout";
import AdminLayout from "./layouts/Adminlayout";
import LoginPopup from "./components/LoginPopup/LoginPopup";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {isAdminRoute ? (
        <AdminLayout></AdminLayout>
      ) : (
        <WebLayout setShowLogin={setShowLogin}></WebLayout>
      )}
    </>
  );
};

export default App;
