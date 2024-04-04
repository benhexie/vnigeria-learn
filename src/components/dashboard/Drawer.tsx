import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Drawer.css";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

interface DashboardDrawerProps {
  menuItems: MenuItem[];
}

const DashboardDrawer: React.FC<DashboardDrawerProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dashboard-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-header">
        <h3>Menu</h3>
        <div className="close-btn" onClick={toggleDrawer}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className="drawer-navigation">
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link to={menuItem.path} onClick={toggleDrawer}>
                {menuItem.icon}
                <span>{menuItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;
