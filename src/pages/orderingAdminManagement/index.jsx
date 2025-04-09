import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import HeroSection from "../../components/heroSection";
import ConclusionSection from "../../components/conclusion";
import CollapsibleList from "../../components/collapsableList";

function OrderingAdminManagement() {
  const features = [
    {
      title: "Customer Management",
      content:
        "Streamline customer interactions and maintain strong relationships effortlessly.",

      features: [
        {
          title: "Centralized Database",
          content:
            "Keep all your customer information in one place for easy access and management.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Streamline customer data management by storing all information in a single, organized database for quick retrieval and efficient service.",
        },
        {
          title: "Customer Profiles",
          content:
            "Maintain detailed profiles with contact information, order history, and preferences.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance customer relationships with comprehensive profiles that help personalize interactions and improve customer service experiences.",
        },
      ],
    },
    {
      title: "Create Quotes",
      content:
        "Generate professional quotes quickly and efficiently for your customers.",
      features: [
        {
          title: "Quick and Accurate Quotes",
          content:
            "Generate quotes for customers quickly, ensuring accurate pricing and details.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Speed up your sales process with instant, precise quotes that help customers make informed decisions while reducing manual errors.",
        },
      ],
    },
    {
      title: "Create and Send Invoices",
      content:
        "Easily create and send invoices to ensure smooth payment processing.",

      features: [
        {
          title: "Seamless Invoicing",
          content:
            "Create detailed invoices from your quotes with just a few clicks.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Simplify your billing process by converting quotes into professional invoices instantly, reducing manual work and errors.",
        },
        {
          title: "Automated Sending",
          content:
            "Send invoices directly to customers via the system, saving time and ensuring prompt delivery.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance efficiency by automating invoice delivery, ensuring customers receive accurate billing information without delays.",
        },
      ],
    },
    {
      title: "Send Payment Links",
      content:
        "Generate and share secure payment links for hassle-free transactions.",

      features: [
        {
          title: "Convenient Payments",
          content:
            "Include secure payment links in your invoices, making it easy for customers to pay online.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance customer convenience by providing secure payment options directly within invoices, ensuring a seamless transaction experience.",
        },
        {
          title: "Faster Payments",
          content:
            "Reduce the time it takes to receive payments by offering convenient online payment options.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Speed up cash flow with quick and easy online payment solutions, minimizing delays and improving financial efficiency.",
        },
      ],
    },
    {
      title: "Send Payment Reminders",
      content:
        "Automate payment reminders to ensure timely collections and reduce delays.",

      features: [
        {
          title: "Automatic Reminders",
          content:
            "Schedule and send payment reminders to customers for outstanding invoices.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Reduce late payments by automating reminders, ensuring customers are notified about due invoices on time.",
        },
        {
          title: "Improved Cash Flow",
          content:
            "Ensure timely payments and improve cash flow with automated reminders.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Maintain a healthy cash flow by minimizing overdue payments through timely and automated invoice follow-ups.",
        },
      ],
    },
    {
      title: "Send Feedback Mail",
      content:
        "Engage customers with feedback emails to improve services and satisfaction.",

      features: [
        {
          title: "Customer Feedback",
          content:
            "Automatically send feedback emails after orders are delivered to gather valuable customer insights.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Gain valuable insights from customers by automating feedback collection, helping you understand their experiences and expectations.",
        },
        {
          title: "Improve Service",
          content:
            "Use feedback to enhance your service and address any issues promptly.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Leverage customer feedback to refine your services, resolve concerns swiftly, and enhance overall satisfaction.",
        },
      ],
    },
    {
      title: "Dashboard for Deliveries",
      content:
        "Monitor and manage deliveries in real-time with a centralized dashboard.",

      features: [
        {
          title: "Comprehensive View",
          content:
            "Get a clear view of today’s, tomorrow’s, and the next 7 days' deliveries on your dashboard.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Monitor and track all your upcoming deliveries in one place, ensuring timely dispatch and seamless coordination.",
        },
        {
          title: "Efficient Planning",
          content:
            "Plan and manage deliveries more effectively with a detailed overview.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance your delivery operations by optimizing schedules and reducing delays with a clear, structured planning system.",
        },
      ],
    },
    {
      title: "Track Deliveries",
      content:
        "Stay updated on delivery status with real-time tracking and notifications.",

      features: [
        {
          title: "Real-Time Tracking",
          content:
            "Monitor the status of deliveries in real-time to ensure timely and accurate service.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Gain full visibility into your delivery process with real-time tracking, ensuring efficiency and on-time arrivals.",
        },
        {
          title: "Customer Updates",
          content: "Keep customers informed with automatic delivery updates.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance customer experience by providing timely notifications and tracking details for their deliveries.",
        },
      ],
    },
    {
      title: "Generate Production Sheets for Staff",
      content:
        "Create detailed production sheets to streamline staff workflow and efficiency.",

      features: [
        {
          title: "Organized Workflow",
          content:
            "Enable your staff to access production sheets and efficiently prepare orders placed.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Keep your workflow structured with easy access to production sheets, ensuring accurate and timely order preparation.",
        },
        {
          title: "Efficient Operations",
          content:
            "Streamline operations and improve efficiency with clear, organized production plans.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Boost productivity with well-organized production schedules, reducing errors and optimizing resources.",
        },
      ],
    },
    {
      title: "Generate Reports",
      content:
        "Generate insightful reports to analyze performance and drive better decisions.",

      features: [
        {
          title: "Detailed Insights",
          content:
            "Generate comprehensive reports on orders, invoices, deliveries, and more to gain valuable business insights.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Stay ahead with detailed reports that provide a clear overview of your business activities, helping you optimize performance and efficiency.",
        },
        {
          title: "Informed Decisions",
          content:
            "Use data-driven insights to make informed business decisions and improve operations.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Leverage accurate data to enhance decision-making, streamline processes, and drive business growth.",
        },
      ],
    },
    {
      title: "Track Past Orders",
      content:
        "Easily access and review past orders to improve service and inventory planning.",

      features: [
        {
          title: "Order Status",
          content:
            "Track the status of past orders to determine if they are paid or outstanding.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Easily monitor past transactions, ensuring clear visibility into paid and pending orders for better financial oversight.",
        },
        {
          title: "Financial Management",
          content:
            "Stay on top of your finances by quickly identifying unpaid invoices and following up as needed.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Maintain a healthy cash flow by efficiently tracking outstanding invoices and taking prompt action when necessary.",
        },
      ],
    },
  ];

  const title = "Ordering Admin System";
  const tagLine =
    "Streamline, Simplify, Succeed: Transform Your Orders with Bizadmin";
  const conclusion =
    "Bizadmin’s Ordering Admin System simplifies and enhances every aspect of your order management process. From customer management and invoicing to delivery tracking and reporting, our platform provides all the tools you need to ensure smooth, efficient operations and satisfied customers. Transform your ordering process with Bizadmin and focus on growing your business.";
  const introduction =
    "Managing orders, invoices, and deliveries can be overwhelming, but Bizadmin’s Ordering Admin System is here to streamline the process. Our platform provides everything you need to manage customer relationships, handle invoices, track deliveries, and ensure smooth operations, all from a single dashboard.";
  const content =
    "Simplify order processing, track purchases in real time, and manage inventory seamlessly with Bizadmin’s Ordering Admin System, ensuring accuracy and efficiency in every transaction.";
  const whyChooseUs = [
    "Efficiency: Automate and streamline your ordering processes to save time and reduce administrative burdens.",
    "Accuracy: Ensure accurate and timely invoicing, payments, and delivery tracking.",
    "Customer Satisfaction: Enhance customer satisfaction with professional quotes, easy payment options, and prompt feedback requests.",
    "Data-Driven: Make better business decisions with comprehensive reports and real-time delivery tracking.",
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

        {features.map((feature, index) =>
          feature?.features?.length > 1 ? (
            <CollapsibleList
              key={index}
              items={feature.features}
              title={feature?.title}
              orientation={index % 2 === 0 ? "left" : "right"}
            />
          ) : (
            <FeatureDisplay
              key={index}
              tagline={feature?.features[0].content}
              title={feature?.features[0].title}
              image={feature?.features[0].image}
              desc={feature?.features[0].desc}
              orientation={index % 2 === 0 ? "left" : "right"}
            />
          )
        )}
      </div>

      <GridList whyChooseUs={whyChooseUs} title={title} />

      <ConclusionSection text={conclusion} />
    </div>
  );
}

export default OrderingAdminManagement;
