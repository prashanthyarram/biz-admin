import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import HeroSection from "../../components/heroSection";
import ConclusionSection from "../../components/conclusion";

function CleaningManagement() {
  const features = [
    {
      title: "Efficient Cleaning Schedules",
      content:
        "Ensure a spotless and hygienic environment with automated cleaning schedules. Bizadmin allows you to assign and track cleaning tasks, making sure every surface is sanitized and maintained regularly.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "With Bizadmin, managing cleaning schedules has never been easier. Our intuitive dashboard allows you to create customized cleaning checklists tailored to your café’s needs. From wiping down counters to sanitizing equipment, every task is clearly outlined and scheduled, ensuring nothing gets overlooked.",
    },
    {
      title: "Real-Time Task Management",
      content:
        "Empower your staff with digital checklists that update in real-time. Bizadmin lets employees mark tasks as complete instantly, ensuring all cleaning duties are performed efficiently and without delay.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "Say goodbye to paper checklists and hello to digital efficiency. Bizadmin’s system enables your staff to mark tasks as complete in real-time using their smartphones or tablets. This instant feedback ensures that all cleaning duties are performed promptly and thoroughly.",
    },
    {
      title: "Compliance and Accountability",
      content:
        "Stay ahead of health and safety regulations with automated record-keeping. Bizadmin logs completed tasks, providing you with a detailed compliance history for inspections and audits.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "Maintaining cleanliness isn’t just about aesthetics—it’s about meeting health and safety standards. Bizadmin keeps you compliant by documenting completed tasks and storing detailed cleaning logs. During inspections, you can confidently showcase your meticulous cleaning practices and adherence to regulations.",
    },
    {
      title: "Customizable Checklists",
      content:
        "Create dynamic checklists that adapt to your unique cleaning needs. Whether it’s daily sanitation routines or deep cleaning schedules, Bizadmin ensures every task is planned and executed flawlessly.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      description:
        "Every café is unique, and so are its cleaning requirements. Bizadmin allows you to customize checklists based on specific areas, equipment, and frequency of cleaning. Whether it’s daily wipe-downs or weekly deep cleans, you have the flexibility to create schedules that fit your café’s operational needs.",
    },
  ];
  const title = "Cleaning Management System";
  const tagLine =
    "Simplify Your Café Management with Bizadmin’s Cleaning and Checklist System";
  const conclusion =
    "Ensure your café maintains the highest standards of cleanliness and efficiency with Bizadmin’s Cleaning and Checklist System. From simplified task management to regulatory compliance, Bizadmin empowers you to focus on what matters most—delighting your customers with exceptional service.";
  const introduction =
    "Running a successful café requires more than just great coffee and delicious treats—it’s about maintaining cleanliness, efficiency, and consistency. Introducing Bizadmin’s Cleaning and Checklist System, designed to streamline your daily operations and ensure your café operates smoothly.";
  const content =
    "Maintain a spotless and compliant workspace with Bizadmin’s Cleaning Management System, enabling you to schedule tasks, track completion in real-time, and ensure hygiene standards are consistently met.";
  const whyChooseUs = [
    "Streamlined Operations: Simplify and automate your cleaning routines.",
    "Real-Time Updates: Instant task completion notifications for improved oversight.",
    "Compliance Assurance: Detailed logs for inspections and peace of mind.",
    "Enhanced Efficiency: Focus on customer service with streamlined back-end operations.",
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

export default CleaningManagement;
