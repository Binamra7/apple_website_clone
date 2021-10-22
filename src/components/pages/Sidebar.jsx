import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list">
        <ul>
          <li>
            <a style={{ textDecoration: "none" }} href="sketches">
              Sketches
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none" }} href="paintings">
              Paintings
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none" }} href="wall_paintings">
              Wall Paintings
            </a>
          </li>
        </ul>
      </div>
      <div className="settings"></div>
    </div>
  );
}
export default Sidebar;
