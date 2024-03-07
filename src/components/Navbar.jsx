import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "./Navbar.css";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
        Toggle Navbar
      </button>
      {isOpen && (
        <div className="navbar-menu">
          <p className="navbar-link">Navbar with links</p>
          <UserInfo />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
