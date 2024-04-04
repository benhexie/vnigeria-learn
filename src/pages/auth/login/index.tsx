import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaKey } from "react-icons/fa";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.message);
      localStorage.setItem("token", data.data.token);
      toast.success("Login successful", {
        onClose: () => navigate("/plans"),
      });
    } catch (error: any) {
      toast.error(error.message);
      return;
    }
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
        Forgot your password?{" "}
        <Link to="/auth/forgot-password">Reset Password</Link>
      </p>
      <p>
        Don't have an account? <Link to="/auth/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
