import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex-1">
      <h1>Layout</h1>

      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default Layout;
