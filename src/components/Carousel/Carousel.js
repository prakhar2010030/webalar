import React from "react";

const Carousel = ({font}) => {
  return (
    <div className="Carousellogo">
      <div className="CarouseltextContainer">
        <span style={{"fontFamily":`${font}`}}>logoipsum</span>
        <span className="Carouseldot"></span>
      </div>
    </div>
  );
};

export default Carousel;
