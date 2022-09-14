import { Button } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";
import CardProject from "../../components/Cards/Card";
import ServiceCard from "../../components/Cards/ServiceCard";
// eslint-disable-next-line
import image1 from "../../../src/assets/Group 72.png";
// eslint-disable-next-line
import image2 from "../../../src/assets/Group 73.png";
// eslint-disable-next-line
import image3 from "../../../src/assets/Group 75.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Carousel from "../../components/Carousel/Carousel";
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

      <div className="middleSection">
        <div className="upperSection">
          <div className="headingSection">
            <span></span>
            <h1>Trusted Companies</h1>
            <span></span>
          </div>
        </div>
        <div className="carousel">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className="slide">
              <Carousel font="Lato" />
              <Carousel font="Maglony" />
              <Carousel font="poppins" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Carousel font="Lato" />
              <Carousel font="Maglony" />
              <Carousel font="poppins" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Carousel font="Lato" />
              <Carousel font="Maglony" />
              <Carousel font="poppins" />
            </SwiperSlide>
          </Swiper>
          <div className="company">
          <Carousel font="poppins" />
          <Carousel font="Maglony" />
          <Carousel font="Lato" />
          </div>
        </div>
        <span className="horizontal"></span>
        <div className="LowerSection">
          <div className="serviceSection">
            <div className="leftSection">
              <span>Our services</span>
              <span>that we provide</span>
            </div>
            <div className="rightSection">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus pariatur molestias similique, veritatis quae modi
                impedit. Tenetur dolorem sequi vitae, neque aut sit doloremque
                recusandae iure? Hic deleniti dicta veniam?
              </p>
            </div>
          </div>
          <div className="services">
            <ServiceCard Title="Design" image={image1} />
            <span className="row"></span>
            <ServiceCard Title="Development" image={image2} />
            <span className="row"></span>
            <ServiceCard Title="Marketing" image={image3} />
          </div>
        </div>
      </div>

      <div className="workContainer">
        <h1>Our Works</h1>
        <div className="projectCard">
          <CardProject title="Project 1" />
          <CardProject title="Project 2" />
          <CardProject title="Project 3" />
        </div>
        <Button className="btn">View More</Button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
