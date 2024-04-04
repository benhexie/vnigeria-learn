import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://facebook.com/vnigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/vnigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/vnigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} vnigeria. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
