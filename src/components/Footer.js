import React from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/niteshSingh001" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/niteshsingh_here/"
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a>
              <p>CopyRight 2023. All Right Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;