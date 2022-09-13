import { Button } from "@mui/material";
import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="upperfooter">
          <div className="left">
            <h1>Let's work</h1>
            <h1>together</h1>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quisquam fuga officiis consequuntur cumque ea nihil deleniti
              obcaecati sunt porro autem incidunt laboriosam rem, quasi quod
              provident! Quam, consequuntur perferendis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt, fugit!
            </p>
            <Button className="footerbtn">Let's talk</Button>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="handle">
            <div className="logo">
              <div className="FootershapeContainer">
                <span className="square"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>
              <div className="FootertextContainer">
                <span>logoipsum</span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="footersocialHandle">
              <InstagramIcon className="Icon" />
              <TwitterIcon className="Icon" />
              <FacebookIcon className="Icon" />
            </div>
          </div>
          <div className="addressSection">
            <div className="address">
              <h4 className="heading">Address</h4>
              <div className="paragraph">
                <p>0199 Taylor Park ,</p>
                <p> North Dakota, USA</p>
              </div>
            </div>
            <div className="call">
              <h4 className="heading">Call us on </h4>
              <div className="paragraph">
                <p>+1 98723 42023</p>
                <p> info@logoipsum.com</p>
              </div>
            </div>
            <div className="policies">
              <h4 className="heading"> Our Policies</h4>
              <div className="paragraph">
                <p>Privacy Policy</p>
                <p> Terms of Use</p>
                <p>Use Refund Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright © Webalar. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
