import React from "react";
import NavAdmin from "../../../NavAdmin/NavAdmin";
import Sidebar from "../../../Sidebar/Sidebar";
import './HomeAdmin.css'
import { Outlet } from "react-router-dom";

const HomeAdmin = () => {
  return (
    <div>
      <NavAdmin />
      <hr />

      <div className="admin-content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeAdmin;
