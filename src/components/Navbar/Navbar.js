import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NightlightIcon from "@mui/icons-material/Nightlight";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="Navbar">
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
        <MenuIcon className="menuIcon" />
        <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="btn">
            <Link to="contact" className="link">
            Get in Touch
            </Link>
            </li>
          <NightlightIcon />
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
