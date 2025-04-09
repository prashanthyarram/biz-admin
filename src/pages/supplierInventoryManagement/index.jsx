import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import HeroSection from "../../components/heroSection";
import ConclusionSection from "../../components/conclusion";

function SupplierInventoryManagement() {
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

  const title = "Suppliers and Inventory Management";
  const tagLine = "Empower Your Supply Chain: Streamline with Bizadmin!";
  const conclusion =
    "Bizadmin’s Supplier and Inventory Management System empowers businesses to achieve operational excellence and strategic growth. Simplify your supply chain management today with Bizadmin and focus on delivering exceptional products and services to your customers.";
  const introduction =
    "Bizadmin’s Supplier and Inventory Management System is your solution for streamlined supply chain operations, designed to optimize efficiency and empower businesses like yours. Whether you manage a café, restaurant, or retail store, our platform simplifies supplier interactions and inventory management with robust features.";
  const content =
    "Optimize stock levels, track supplier performance, and streamline reordering with Bizadmin’s Suppliers and Inventory Management system, ensuring your business operates smoothly with the right products at the right time.";
  const whyChooseUs = [
    "Efficiency: Streamline supplier interactions and order processes.",
    "Control: Manage budgets, approvals, and compliance with ease.",
    "Insight: Leverage actionable analytics for informed decision-making.",
    "Flexibility: Conduct manual stock takes to suit your operational needs.",
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
        <div className="feature-head-sec">
          <h2 className="feature-head">
            Discover what Bizadmin's {title} can do to your store.
          </h2>
          <p>{content}</p>
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

      <GridList whyChooseUs={whyChooseUs} title={title} />

      <ConclusionSection text={conclusion} />
    </div>
  );
}

export default SupplierInventoryManagement;
