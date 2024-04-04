import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaKey } from "react-icons/fa";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="john_doe"
            value={formData.username}
            onChange={handleChange}
          />
          <FaUser className="input-icon" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
          />
          <FaKey className="input-icon" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot your password? <Link to="/auth/forgot-password">Reset Password</Link>
      </p>
      <p>
        Don't have an account? <Link to="/auth/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
