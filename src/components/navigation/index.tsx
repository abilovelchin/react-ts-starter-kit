import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "$store/index";

const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <ul className="border-b flex justify-end gap-3 py-2 px-5 text-gray-600">
      <li>
        <NavLink to="/">
          <HomeIcon className="w-4 h-4" /> Home page
        </NavLink>
      </li>
      <li>
        <NavLink to={`${user.id ? "/account" : "/login"}`}>
          <UserCircleIcon className="w-4 h-4" />
          {user.id ? "My account" : "Login"}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
