import "../../assets/styles/navbar.css";
import Logo from "../../../public/images/yellowdot1.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const HeaderContent = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/terms"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Terms and Conditions
        </NavLink>
      </li>
      <li>
        <a href="https://yellowdotafrica.com/about-us/" target="_blank">
          About Us
        </a>
      </li>
    </ul>
  );
};
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  function handleToggle() {
    setDropdown((prevState) => !prevState);
  }

  return (
    <nav className="navBar">
      <div className="navContainer">
        <div className="companyName">
          <a href="https://yellowdotafrica.com/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="headerContent">
          <HeaderContent className="headerContent" />
        </ul>

        <div className="hamburger" onClick={() => handleToggle()}>
          {dropdown ? (
            <FaXmark />
          ) : (
            <FaBars />
          )}
        </div>
      </div>
      <div className={dropdown ? ` dropdown active` : `dropdown`}>
        <div className="dropdownContainer">
          <HeaderContent className="headerContentDropdown" />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
