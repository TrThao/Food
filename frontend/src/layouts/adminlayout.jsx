import React from 'react';
import NavAdmin from '../components/NavAdmin/navAdmin';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import '../index.css'; 
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <NavAdmin />
      <div className="admin-content-wrapper">
        <Sidebar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
