import React from "react";

function HeroSection({ title, fancyTitle, introduction, base, screen }) {
  return (
    <>
      <div className="blue-background head-sec">
        <div className="header">
          <p className="title-head">{title}</p>
          <h1 className="title-tagline">{fancyTitle}.</h1>
          <p className="title-desc">{introduction}</p>
        </div>

        <div style={{ transform: "translateY(30px)", maxWidth: "1680px" }}>
          <img
            style={{ transform: "translateY(24px)" }}
            className="screen"
            src={screen}
          />
          <img className="laptop" src={base} />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
