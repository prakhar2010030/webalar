import React, { useRef } from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1a59ehb",
        "template_p8lash1",
        form.current,
        "A41pEQRfEDZX9lKa7"
      )
      .then(
        (result) => {
          toast.success("message sent");


        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact">
      <ToastContainer />
      <Navbar />
      <h1 className="contactHeading">Connect with Us</h1>
      <div className="OuterContainer">
        <div className="mainContainer">
          <form className="leftContainer" ref={form} onSubmit={sendEmail}>
            <div className="headings">
              <h1>Tell us about your project</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                lobortis mi vulputate potenti orci.
              </p>
            </div>
            <div className="inputContainer">
              <h1>Your Name</h1>
              <input type="text"  name="user_name"/>
            </div>
            <div className="emailContainer">
              <div className="inputContainer">
                <h1>Your Email</h1>
                <input type="email"  name="user_email"/>
              </div>
              <div className="inputContainer">
                <h1>Your Phone Number</h1>
                <input type="text" name="Phone"/>
              </div>
            </div>
            <div className="inputContainer">
              <h1>Your Message</h1>
              <textarea cols="30" rows="10" name="message"></textarea>
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
