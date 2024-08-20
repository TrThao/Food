import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesConfig from '../routes/index';
import NavAdmin from '../components/NavAdmin/NavAdmin';

const AdminLayout = () => {
  return (
    <div>
      <div className="app-content">
          <Routes>
            {RoutesConfig.filter(route => route.path.startsWith('/admin')).map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children && route.children.map((child, childIndex) => (
                  <Route key={childIndex} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
