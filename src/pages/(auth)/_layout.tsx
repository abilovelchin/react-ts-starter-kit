import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex-1 flex flex-col">
      <h1>AuthLayout</h1>

      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
