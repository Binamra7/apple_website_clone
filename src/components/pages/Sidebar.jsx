import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list">
        <ul>
          <li>
            <a style={{ textDecoration: "none" }} href="clothing">
              Clothing
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none" }} href="electronics">
              Electronics
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none" }} href="food">
              Food
            </a>
          </li>
        </ul>
      </div>
      <div className="settings"></div>
    </div>
  );
}
export default Sidebar;
