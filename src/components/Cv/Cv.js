import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1loIbgVqxPprHQuEuP4rv5kT3d1sIVQln/view?usp=sharing"
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
