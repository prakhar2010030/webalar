import { Button } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";
import CardProject from "../../components/Cards/Card";
const HomePage = () => {
  return (
    <div className="Homepage">
      <Navbar />

      <div className="outerContainer">
        <div className="contentContainer">
          <div className="textContainer">
            <h1>Let's create something great together</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              est mollitia possimus ea magni aliquam obcaecati omnis optio
              voluptate exercitationem!
            </p>
            <Button className="btn">Let's Talk</Button>
          </div>
          <div className="imageContainer"></div>
        </div>
      </div>

      <div className="workContainer">
        <h1>Our Works</h1>
        <div className="projectCard">
          <CardProject title="Project 1"/>
          <CardProject title="Project 2"/>
          <CardProject title="Project 3"/>
        </div>
        <Button className="btn">View More</Button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
