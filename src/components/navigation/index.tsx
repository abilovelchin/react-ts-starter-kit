import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  LightBulbIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/index";
import { logout } from "@/store/features/auth.slice";
import { useModals } from "@/router";

const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const modals = useModals();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className="border-b flex items-center justify-end gap-3 py-2 px-5 text-gray-600">
      <li>
        <NavLink to="/">
          <HomeIcon className="w-4 h-4" /> Home page
        </NavLink>
      </li>

      {user ? (
        <li>
          <button
            type="button"
            className="flex items-center gap-x-2"
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className="w-4 h-4" />
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink to="/login">
            <UserCircleIcon className="w-4 h-4" />
            Login
          </NavLink>
        </li>
      )}
      <li>
        <button
          onClick={() => modals.open("/modals/example")}
          className="flex items-center gap-x-1 ml-3"
        >
          <LightBulbIcon className="w-4 h-4" /> Modal
        </button>
      </li>
    </ul>
  );
};

export default Navigation;
