import React from "react";
import { useRef, useEffect } from "react";
// import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";

function TemperatureManagement() {
  const features = [
    {
      title: "Daily Temperature Recording",
      content: "Plan ahead by scheduling ",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "Ensure food safety with seamless temperature tracking. Bizadmin lets your staff effortlessly log daily fridge and freezer temperatures right from the dashboard. With an intuitive interface, monitoring becomes second nature—helping you maintain freshness, compliance, and peace of mind.",
    },
    {
      title: "Real-Time Notifications",
      content: "Plan ahead by scheduling ",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "Never miss a critical temperature fluctuation. Bizadmin provides instant alerts when any fridge or freezer exceeds its set limit, allowing you to take immediate action. Protect your inventory, prevent spoilage, and ensure quality with real-time monitoring.",
    },
    {
      title: "Historical Data Storage",
      content: "Plan ahead by scheduling ",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "Gain full visibility with secure temperature records. Bizadmin automatically logs all temperature data, giving you easy access to historical trends and compliance reports. Whether for internal audits or regulatory checks, retrieving past records is simple and hassle-free.",
    },
  ];

  const screenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenRef.current) {
        let scrollY = window.scrollY;
        let maxScroll = window.innerHeight / 1.5; // Adjust sensitivity
        let rotation = Math.min((scrollY / maxScroll) * -90, -90); // Ensures it stops at -90deg
        screenRef.current.style.transform = `rotateX(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="noise-bg-section">
      <div className="blue-background head-sec">
        <div className="header">
          <p className="title-head">Temperature Management System</p>
          <h1 className="title-tagline">
            Keep Your Cool with Bizadmin’s Temperature Monitoring System.
          </h1>
          <p className="title-desc">
            In the fast-paced world of café management, ensuring food safety is
            non-negotiable. With Bizadmin’s Temperature Monitoring System, you
            can confidently oversee your equipment’s performance and keep
            everything running smoothly. Here’s how our system safeguards your
            café:
          </p>
        </div>

        {/* <div className="container">
          <div className="laptop">
            <div
              className="screen"
              //   ref={screenRef}
              style={{ transition: "transform 0.1s linear" }}
            ></div>
          </div>
        </div> */}
        <div style={{ transform: "translateY(30px)", maxWidth: "1680px" }}>
          <img
            style={{ transform: "translateY(24px)" }}
            className="screen"
            src={laptopScreen}
          />
          <img className="laptop" src={laptopBase} />
        </div>
      </div>

      <div className="noise-bg-section" style={{ marginBottom: "24px" }}>
        <div className="feature-head-sec">
          <h2 className="feature-head">
            Discover what Bizadmin's Checklist Management can do to your store.
          </h2>
          <p>
            Streamline your daily operations, track progress effortlessly, and
            ensure every task is completed on time with Bizadmin’s powerful
            Checklist Management system.
          </p>
        </div>

        {features.map((feature, index) => (
          <FeatureDisplay
            key={index}
            tagline={feature.title}
            title={feature.title}
            image={feature.image}
            desc={feature.description}
            orientation={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      <div>
        <GridList />
      </div>
    </div>
  );
}

export default TemperatureManagement;
