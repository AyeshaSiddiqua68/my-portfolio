import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Footer.css"
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


library.add(
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faFacebookF,
  faYoutube,
  faLinkedin
);
const Footer = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "2px solid transparent",
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "inline-block",
  };
  return (
    <div
      style={{
        padding: "40px 0 0",
        backgroundColor: "black"
      }}
    >
      <Container>
        <Row>
        <Col md={4}>
            <p className="text-white text-center mx-4">
            Junior-level front-end web developer looking for opportunities to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.
            </p>
            </Col>
          <Col md={4}>
            <ul className="list-unstyled text-center">
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/about">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/contact">
                  Contact Me
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/projects">
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </Col>
          
          <Col md={4}>
            <div className="text-center">
              
            
            <ul className="list-unstyled mt-3 w-100">
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faMapMarkerAlt}
                />{" "}
                Mirpur, Dhaka-1216 ,Bangladesh
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faEnvelope}
                />{" "}
                ayeshasiddiqua.dev@gmail.com
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2 social-icon" icon={faPhone} />{" "}
                Phone: +8801765208406
              </li>
            </ul>
            </div>
          </Col>
        </Row>
        <div>
          <h4 className="text-white text-center">Find Me</h4>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/akhiazad.jnu/"
              >
                <FontAwesomeIcon
                  style={{ color: "#3b5998" }}
                  className="me-2 facebook social-icon"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/"
              >
                <FontAwesomeIcon
                  className="me-2 youtube social-icon"
                  icon={faYoutube}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ayesha-siddqua-9686221a0/"
              >
                <FontAwesomeIcon
                  className="me-2 linkedin social-icon"
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <hr className="mt-2 mb-0 bg-white" />
      <p
        style={{ background: "#000099" }}
        className="m-0 fw-bold py-3  text-white text-center"
      >
        Copyright &copy; All Reserved by{" "}
        <a
          className="text-decoration-none"
          style={{ color: "#ff136f" }}
          target="_blank"
          rel="noreFerrer"
          href="https://www.linkedin.com/in/ayesha-siddqua-9686221a0/"
        >
          Ayesha Siddiqua - 
        </a>{" "}
        2021
      </p>
    </div>
  );
};

export default Footer;