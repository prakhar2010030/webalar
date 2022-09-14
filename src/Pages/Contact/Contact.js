import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className="Contact">
      <Navbar />
      <h1 className="contactHeading">Connect with Us</h1>
      <div className="OuterContainer">
        <div className="mainContainer">
          <form
            className="leftContainer"
            action="https://formsubmit.co/prakhar192000kumar@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New submission!"/>
            <div className="headings">
              <h1>Tell us about your project</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                lobortis mi vulputate potenti orci.
              </p>
            </div>
            <div className="inputContainer">
              <h1>Your Name</h1>
              <input type="text" name="Name" />
            </div>
            <div className="emailContainer">
              <div className="inputContainer">
                <h1>Your Email</h1>
                <input type="email" name="email" />
              </div>
              <div className="inputContainer">
                <h1>Your Phone Number</h1>
                <input type="text" name="Phone No" />
              </div>
            </div>
            <div className="inputContainer">
              <h1>Your Message</h1>
              <textarea cols="30" rows="10" name="Message"></textarea>
            </div>
            <Button className="SubmitBtn" type="submit">
              Submit
            </Button>
          </form>
          <div className="rightContainer">
            <div className="AddressContainer">
              <h1>Address</h1>
              <p>0199 Taylor Park, North Dakota, USA</p>
              <hr className="width" />
            </div>
            <div className="AddressContainer">
              <h1>Call us on</h1>
              <p>+1 98723 42023 </p>
              <p>info@logoipsum.com</p>
              <hr className="width" />
            </div>
            <div className="AddressContainer">
              <h1>Social Media</h1>
              <div>
                <InstagramIcon className="ContactIcon" />
                <TwitterIcon className="ContactIcon" />
                <FacebookIcon className="ContactIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
