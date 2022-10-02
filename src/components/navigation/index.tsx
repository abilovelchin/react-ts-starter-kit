import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "./style.css";

const Navigation = () => {
  return (
    <ul className="border-b flex justify-end gap-3 py-2 px-5 text-gray-600">
      <li>
        <NavLink to="/">
          <HomeIcon className="w-4 h-4" /> Home page
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <UserCircleIcon className="w-4 h-4" /> Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
