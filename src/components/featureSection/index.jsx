import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const features = [
  {
    title: "Ultimate Checklist Management",
    text: "Ensure operational efficiency with structured checklists and automated task tracking.",
    link: "/checklist-management",
  },
  {
    title: "Temperature Recording Management",
    text: "Maintain safety and compliance with accurate temperature logging and monitoring.",
    link: "/temperature-management",
  },
  {
    title: "Cleaning Tasks Management",
    text: "Automate and track cleaning schedules to maintain hygiene standards effortlessly.",
    link: "/cleaning-management",
  },
  {
    title: "Supplier and Inventory Management",
    text: "Monitor stock levels, manage suppliers, and optimize inventory control in real-time.",
    link: "/supplier-inventory-management",
  },
  {
    title: "HR Management and Timesheet",
    text: "Simplify HR processes and ensure accurate time tracking for your workforce.",
    link: "/hr-management",
  },
  {
    title: "Ordering Admin Management",
    text: "Streamline order processing and administrative tasks for smooth operations.",
    link: "/ordering-admin-management",
  },
  {
    title: "Document Management",
    text: "Securely store, organize, and access important business documents anytime.",
    link: "/documents-management",
  },
  {
    title: "Cash Management",
    text: "Keep track of transactions, cash flow, and financial records effortlessly.",
    link: "/cash-management",
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-card"
          onClick={() => navigate(feature.link)}
        >
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          <a href={feature.link} className="learn-more">
            Learn More →
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
