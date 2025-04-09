import React from "react";

import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import ConclusionSection from "../../components/conclusion";
import HeroSection from "../../components/heroSection";
import CollapsibleList from "../../components/collapsableList";

function CashManagement() {
  const features = [
    {
      title: "Counting Coins",
      content:
        " Quickly and accurately tally cash to streamline financial management.",
      features: [
        {
          title: "Accurate Counting",
          content:
            "Simplify the process of counting coins with Bizadmin's integrated counting feature.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Ensure precise cash handling by automating coin counting, reducing manual effort and errors.",
        },
        {
          title: "Reduce Errors",
          content:
            "Minimize counting errors and discrepancies to maintain accurate cash records.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Prevent financial inconsistencies with an error-free counting system that ensures cash records remain accurate.",
        },
      ],
    },
    {
      title: "Daily and Monthly Float Management",
      content:
        "Ensure accurate cash flow tracking and maintain balanced registers effortlessly.",
      features: [
        {
          title: "Float Tracking",
          content:
            "Monitor and manage your cash float on a daily and monthly basis.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Keep track of available cash efficiently, ensuring seamless financial operations.",
        },
        {
          title: "Automatic Updates",
          content:
            "Bizadmin updates float balances in real-time, providing transparency and accountability.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Gain real-time insights into your cash float, improving financial accuracy and management.",
        },
      ],
    },
    {
      title: "Bank Deposit Management",
      content:
        "Securely track and manage cash deposits to keep finances organized and transparent.",
      features: [
        {
          title: "Efficient Deposits",
          content:
            "Streamline the process of preparing and depositing cash to the bank.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Reduce manual effort and improve efficiency in cash deposit management.",
        },
        {
          title: "Integration",
          content:
            "Easily reconcile bank deposits with cash register records for accurate financial reporting.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Ensure seamless financial reconciliation by linking deposits with cash register data.",
        },
      ],
    },
    {
      title: "Float Reset Management",
      content:
        "Efficiently reset and reconcile cash floats to maintain accurate daily balances.",
      features: [
        {
          title: "Reset Procedures",
          content:
            "Manage float resets efficiently at the end of each shift or business day.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Simplify float resets with an organized and structured approach to cash management.",
        },
        {
          title: "Send Coin Order to Banks",
          content:
            "Ability to send email to the banks ordering the coins required.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Automate coin orders to banks, ensuring smooth financial transactions.",
        },
        {
          title: "Audit Trail",
          content:
            "Maintain an audit trail of float resets for accountability and compliance purposes.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Keep detailed records of float resets to ensure transparency and regulatory compliance.",
        },
      ],
    },
  ];

  const title = "Cash Management System";
  const tagLine =
    "Efficiency in Every Coin: Simplify Cash Management with Bizadmin";
  const conclusion =
    "Optimize cash flow, minimize errors, and maintain accurate financial records with Bizadmin’s efficient Cash Management System, ensuring seamless handling of daily transactions and deposits.";
  const introduction =
    "Managing cash transactions effectively is crucial for any business, and Bizadmin's Cash Register feature provides the tools you need to streamline this process. From counting coins to managing daily and monthly floats, handling bank deposits, and resetting floats, Bizadmin ensures accuracy and efficiency in cash management.";
  const content =
    "Efficiently manage your finances, monitor transactions in real time, and maintain complete control over cash flow with Bizadmin’s robust Cash Management System.";
  const whyChooseUs = [
    "Efficiency: Save time and reduce administrative burden with automated cash management processes.",
    "Accuracy: Ensure precise counting and tracking of cash transactions to minimize errors.",
    "Transparency: Gain visibility into cash flows with real-time updates and comprehensive reporting.",
    "Compliance: Simplify compliance with cash handling regulations and internal policies.",
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
              desc={content}
              items={feature.features}
              title={feature.title}
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

export default CashManagement;
