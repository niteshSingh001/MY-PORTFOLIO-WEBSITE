import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1TM6_DN92Fn2XYT7Q99vwpgM9Xd3Ck3wm/view?usp=sharing"
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
