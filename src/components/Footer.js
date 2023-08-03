import React from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="#" className="footer_logo">
          Designed and Developed by Nitesh Singh
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
        </ul>
        <div className="social-icon ">
          <a
            href="https://www.linkedin.com/in/nitesh-singh-206738286/"
            target="_blank"
          >
            <img src={navIcon1} alt="" />
          </a>
          <a href="https://github.com/niteshSingh001" target="_blank">
            <img src={navIcon2} alt="" />
          </a>
          <a href="https://www.instagram.com/niteshsingh_here/" target="_blank">
            <img src={navIcon3} alt="" />
          </a>
        </div>

        <div className="footer_copyright">
          <small>&copy;2023Copy rights. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
