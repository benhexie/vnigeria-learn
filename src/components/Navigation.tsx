import React from "react";
import "./Navigation.css";
import {
  FaSignInAlt,
  FaUserPlus,
  FaClipboardList,
  FaHome,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        {!user ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  dispatch({ type: "LOGOUT" });
                  navigate("/auth/login");
                }}
              >
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
