import React from "react";
import "./navbar.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <ul>
          <Link style={{textDecoration: "none"}} to="/">Home</Link>
          <Link style={{textDecoration: "none"}} to="/gallery">Contacts</Link>
          <Link style={{textDecoration: "none"}} to="/contact">About me</Link>
        </ul>
      </div>
      <div className="right">
        <ul>
          <a target="_blank" rel="noreferrer" href="https://facebook.com">
            <FaFacebook style={{ height: "1.9rem", width: "1.9rem" }} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://instagram.com">
            <FaInstagram style={{ height: "1.9rem", width: "1.9rem" }} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com">
            <FaTwitter style={{ height: "1.9rem", width: "1.9rem" }} />
          </a>
          {/* <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
