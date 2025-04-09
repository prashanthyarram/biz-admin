import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ConclusionSection = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="conclusion-section">
      <h2>Streamline Your Business Today!</h2>
      <p>{text}</p>
      <button className="contact-button" onClick={() => navigate("/contact")}>
        Contact Us
      </button>
    </div>
  );
};

export default ConclusionSection;
