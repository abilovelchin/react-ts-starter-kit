import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex-1 flex flex-col bg-blue-600">
      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
