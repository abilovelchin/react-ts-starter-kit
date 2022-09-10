import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "$pages/dashboard";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routers;
