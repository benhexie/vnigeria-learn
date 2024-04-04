import React from "react";
import { Link } from "react-router-dom";
import "./plans.css";

const Plans: React.FC = () => {
  return (
    <div className="plans-container">
      <h2>Choose Your Plan</h2>
      <div className="plans">
        <div className="plan-card">
          <h3>Monthly Plan</h3>
          <p>Access to our services for one month</p>
          <p>Price: N1,500/month</p>
          <Link to="/payment/monthly">
            <button>Subscribe</button>
          </Link>
        </div>
        <div className="plan-card popular-plan">
          <h3>Annual Plan</h3>
          <p>Get 12 months for the price of 10!</p>
          <p>Price: N12,000/year</p>
          <p>Save N3,000</p>
          <Link to="/payment/annual">
            <button>Subscribe</button>
          </Link>
          <span className="popular-tag">Most Popular</span>
        </div>
        <div className="plan-card">
          <h3>Free Trial</h3>
          <p>Enjoy 90 days of free access to our services</p>
          <p>No payment required</p>
          <Link to="/payment/free-trial">
            <button>Start Free Trial</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;
