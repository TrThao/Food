import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RoutesConfig from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
    <ToastContainer/>
      <Routes>
        {RoutesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, childIndex) => (
                <Route key={childIndex} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
      </Routes>
      </div>
  );
};

export default App;
