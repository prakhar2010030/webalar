import React from "react";
import "./services.css";
import "../../Fonts/maglony-font/MaglonyFreeVersionRegular-X3PYj.ttf";
const ServiceCard = ({ Title, image }) => {
  return (
    <div className="CardContainer">
      <img src={image} alt="Design Images" />
      <h1 className="font-face-gm">{Title}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        enim hic harum id illum corrupti, praesentium molestiae. Quidem,
        cupiditate quae?
      </p>
    </div>
  );
};

export default ServiceCard;
