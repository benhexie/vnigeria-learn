import React from "react";
import DashboardDrawer from "../../components/dashboard/Drawer";
import { FaHome, FaUser, FaClipboardList, FaCog } from "react-icons/fa";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const menuItems = [
    { title: "Home", icon: <FaHome />, path: "/dashboard/home" },
    { title: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
    { title: "Tasks", icon: <FaClipboardList />, path: "/dashboard/tasks" },
    { title: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
  ];

  return (
    <div className="dashboard">
      <DashboardDrawer menuItems={menuItems} />
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
