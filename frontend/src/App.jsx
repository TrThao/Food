import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RoutesConfig from "./routes";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
