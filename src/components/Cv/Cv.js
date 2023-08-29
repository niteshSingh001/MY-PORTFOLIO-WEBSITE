import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/10zo7RZN8e8FrNeMK7ik8y9f1F2EZVeiW/view?usp=sharing"
        download
        className="btn"
        target="_blank"
      >
        Download CV
      </a>
      <a href="#connect" className="btn">
        Let's Connect
      </a>
    </div>
  );
};

export default Cv;
