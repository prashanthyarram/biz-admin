import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import ConclusionSection from "../../components/conclusion";
import HeroSection from "../../components/heroSection";

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

  const title = "Temperature Monitoring System";
  const tagLine = "Stay Cool, Stay Confident: Monitor with Bizadmin!";
  const conclusion =
    "Bizadmin’s Temperature Monitoring System helps you maintain compliance, ensure food safety, and prevent inventory loss with real-time tracking. Keep your operations running smoothly and protect your products with Bizadmin’s smart monitoring solutions.";
  const introduction =
    "In the fast-paced world of café management, ensuring food safety is non-negotiable. With Bizadmin’s Temperature Monitoring System, you can confidently oversee your equipment’s performance and keep everything running smoothly. Here’s how our system safeguards your café:";
  const content =
    "Ensure compliance, maintain food safety, and prevent spoilage with Bizadmin’s Temperature Monitoring System, enabling real-time tracking and automated logging for precise temperature control.";
  const whyChooseUs = [
    "Proactive Management: Prevent problems before they occur with our smart notification system.",
    "Regulatory Compliance: Easily meet health and safety standards with thorough temperature records.",
    "Peace of Mind: Focus on running your café while Bizadmin takes care of your equipment’s performance.",
  ];

  return (
    <div className="noise-bg-section">
      <HeroSection
        base={laptopBase}
        screen={laptopScreen}
        title={title}
        fancyTitle={tagLine}
        introduction={introduction}
      />

      <div className="noise-bg-section">
        {/* Feature Head section  */}
        <div className="feature-head-sec">
          <h2 className="feature-head">
            Discover what Bizadmin's {title} can do to your store.
          </h2>
          <p>{content}</p>
        </div>

        {/* Feature Display */}
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
        <GridList whyChooseUs={whyChooseUs} title={title} />
      </div>

      <ConclusionSection text={conclusion} />
    </div>
  );
}

export default TemperatureManagement;
