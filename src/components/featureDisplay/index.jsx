import react from "react";
import "./style.css";

const Part1 = ({ title, tagline, desc = "" }) => {
  return (
    <div className="left-section">
      <h4 className="head-text">{title}</h4>
      <div className="feature-title">{tagline}</div>
      <div className="content">
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

const Part2 = ({ image }) => {
  return (
    <div className="right-section">
      <img src={image} alt="Feature" className="feature-image" />
    </div>
  );
};

const FeatureDisplay = ({
  title,
  image = "",
  desc = "",
  tagline = "",
  orientation = "left",
}) => {
  return (
    <div
      className={`container-box ${
        orientation !== "left" ? "blue-background" : ""
      }`}
    >
      {orientation === "left" ? (
        <>
          <Part1 title={title} tagline={tagline} desc={desc} />
          <Part2 image={image} />
        </>
      ) : (
        <>
          <Part2 image={image} />
          <Part1 title={title} tagline={tagline} desc={desc} />
        </>
      )}
    </div>
  );
};

export default FeatureDisplay;
