import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic for password reset
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="info@vnigeria.com"
            value={email}
            onChange={handleChange}
          />
          <FaEnvelope className="input-icon" />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remembered your password? <Link to="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
