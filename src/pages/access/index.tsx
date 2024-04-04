import "./access.css";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Access: React.FC = () => {
  return (
    <div className="access-page">
      <div className="access-icon">
        <FaCheckCircle />
      </div>
      <h2>You have Access!</h2>
      <p>Welcome to vnigeria. You now have access to our platform.</p>
    </div>
  );
};

export default Access;
