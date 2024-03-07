import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "./Navbar.css";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
        Toggle Navbar
      </button>
      {isOpen && (
        <div className="navbar-menu">
          <UserInfo />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
