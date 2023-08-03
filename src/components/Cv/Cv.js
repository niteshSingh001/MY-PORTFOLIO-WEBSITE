import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1FDQQgLrcP0v-nHnugxNRX5ldiAIuE6qL/view?usp=sharing"
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
