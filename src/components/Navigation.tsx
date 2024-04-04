import React from "react";
import "./Navigation.css";
import {
  FaSignInAlt,
  FaUserPlus,
  FaClipboardList,
  FaHome,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="home-nav">
      <ul>
        <li>
          <NavLink className={"nav-title"} to="/" end>
            <FaHome />
            vnigeria
          </NavLink>
        </li>
        <li>
          <NavLink to="/plans">
            <FaClipboardList />
            Plans
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth/login">
            <FaSignInAlt />
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth/signup">
            <FaUserPlus />
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
