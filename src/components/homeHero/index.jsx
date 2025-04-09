import React from "react";
import "./style.css";

const HomeHeroSection = () => {
  return (
    <div className="info-container">
      <div className="info-text">
        <h2>BizAdmin POS</h2>
        <h1>Everything you need to build a thriving café business.</h1>
        <p>
          Bizadmin POS powers your cafe. Bizadmin POS is the ultimate all-in-one
          solution tailored for cafes and small businesses, designed to
          streamline operations, enhance customer service, and simplify everyday
          tasks.
        </p>
      </div>
      <div className="info-image">
        <img
          src="https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg"
          alt="Business Growth"
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
