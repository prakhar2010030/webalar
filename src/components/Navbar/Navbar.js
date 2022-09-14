import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={`${dropdown ? "NavbarPhone" : "Navbar"}`}>
      <div className="logoContainer">
        <div className="shapeContainer">
          <span className="square"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <div className="textContainer">
          <span>logoipsum</span>
          <span></span>
        </div>
      </div>
      <div className="menuContainer">
        <ol className={`${dropdown ? "Phone" : "list"}`}>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
          <li className="btn">
            <Link to="contact" className="link">
              Get in Touch
            </Link>
          </li>
        </ol>
      </div>
      <div className="navBtn">
        {dropdown ? (
          <CloseIcon
            sx={{ display: "none" }}
            className="menuIcon"
            onClick={handleClick}
          />
        ) : (
          <MenuIcon
            sx={{ display: "none" }}
            className="menuIcon"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
