import { useContext, useState } from "react";
import UserInfo from "./UserInfo";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { userContext } from "../common/contexts";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const user = useContext(userContext).user;

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
        Toggle Navbar
      </button>
      {isOpen && (
        <div className="navbar-menu">
          {user && <>
            <div className="navbar-links">
              <Link to="/"><button className="user-info-button">Dashboard</button></Link>
              <Link to="/user"><button className="user-info-button">Profile</button></Link>
            </div>
            <UserInfo />
            </>
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
