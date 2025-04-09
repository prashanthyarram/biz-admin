import React from "react";
import "./style.css";
import demoImg from "../../../public/demo-grid-img.webp";
import demoMobileImg from "../../../public/mobile-demo.jpeg";

const GridList = () => {
  return (
    <div className="grid-container">
      <div className="grid-item blue-background first-grid-item">
        <div className="grid-list">
          <span>Why Choose Bizadmin?</span>
          <h2>Complete check list management</h2>
          <ul>
            <li>Focus on what matters most</li>
            <li>Reduce time spent on trivial tasks and improve efficiency</li>
            <li>Avoid missing deadlines</li>
            <li>
              Foster better communication and collaboration within your team
            </li>
            <li>Delegate tasks effectively and ensure accountability.</li>
            <li>
              Simplify your workflow and reduce the overwhelm of managing
              multiple tasks
            </li>
            <li>
              Gain peace of mind knowing you have a reliable system in place.
            </li>
          </ul>
        </div>
      </div>

      <div className="middle-box">
        <img className="mobile-img" src={demoMobileImg} alt="" />
      </div>

      <div className="grid-item image-bg">
        <img src={demoImg} alt="Task Management" />
      </div>

      <div className="grid-item white-bg">
        <div className="grid-list-item">
          <h2>Receive support when you need it</h2>
          <p>
            Simplify your supply chain management today with Bizadmin and focus
            on delivering exceptional products and services to your customers.
          </p>
        </div>
      </div>

      <div className="grid-item blue-background">
        <div className="grid-list-item">
          <h2>It's easy (and free) to get started</h2>
          <p>
            Get started without any learning curve. Our early customers can
            vouch for BizadminPOS being extremely simple to use. We're proud to
            offer a solution that can help you get started from day one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridList;
