import React, { useState } from "react";
import emailjs from "emailjs-com";
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import GitHub_M from "../../assets/GitHub-Mark.png";
import Medium from "../../assets/Medium.png";
import { contactConfig } from "../../content_option";
import './contact.css'; 

const ContactSection = styled.section`
background-color: transparent;
position: relative;
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;

  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    margin-right: 2rem;
    margin-bottom: 1rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }

  @media only screen and (max-width: 40em) {
    a {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
   border: 2px solid var(--nav2);
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: 2px solid var(--nav2);
      outline: none;
      background-color: var(--nav);
       border-color: var(--white);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: 2px solid var(--nav2);
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    width: 100%;
    height: 10rem;
    &:focus,
    &:active {
      background-color: var(--nav);
      border-color: var(--white);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.3);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
       <Icons>
        <a href="https://www.facebook.com/pramitha.ayasooriya">
          {" "}
          <img src={Facebook} alt="Facebook"/>
        </a>
        <a href="https://www.linkedin.com/in/pramitha-jayasooriya/">
          <img src={LinkedId} alt="LinkedId"/>
        </a>
        <a href="https://github.com/PramithaMJ">
          <img src={GitHub_M} alt="Github"/>
        </a>
        <a href="https://medium.com/@lpramithamj">
          <img src={Medium} alt="Medium"/>
        </a>
        <a href="https://twitter.com/PramithaMJ">
          <img src={Twitter} alt="Twitter"/>
        </a>
        <a href="https://www.instagram.com/pramitha.ayasooriya">
          <img src={Instagram} alt="Instagram"/>
        </a>
      </Icons>
      <Form>
        <Row>
          <input
            name="name"
            type="text"
            placeholder="your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Row>
        <textarea
          name="message"
          cols="30"
          rows="2"
          placeholder="your message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => {
              e.preventDefault();

              const templateParams = {
                from_name: formData.name,
                user_name: formData.name,
                to_name: contactConfig.YOUR_EMAIL,
                message: formData.message,
              };
              
              emailjs
                .send(
                  "service_2r8hhy3",
                  "template_l3isvki",
                  templateParams,
                  "1A5gSOFSBn3a5s5Z3"
                )
                .then(
                  (response) => {
                    alert("Email sent successfully:", response);
                  },
                  (error) => {
                    alert("Email sending failed:", error);
                  }
                );
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;

