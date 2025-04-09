import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-description">
          Have questions? Need assistance? We’re here to help! Reach out and
          let’s take your business to the next level.
        </p>

        <div className="contact-info">
          <p>
            📧 Email:{" "}
            <a href="mailto:hello@bizadminpos.com" className="contact-link">
              hello@bizadminpos.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+1234567890" className="contact-link">
              +1 234 567 890
            </a>
          </p>
        </div>

        <button className="contact-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
