import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="SideBar">
        <Link to="Navbar">
          <h1>Hi</h1>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
