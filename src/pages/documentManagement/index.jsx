import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import HeroSection from "../../components/heroSection";
import ConclusionSection from "../../components/conclusion";
import CollapsibleList from "../../components/collapsableList";

function DocumentManagement() {
  const features = [
    {
      title: "Create Folders",
      content:
        "Organize and manage documents efficiently with structured folder creation.",
      features: [
        {
          title: "Organized Structure",
          content:
            "Easily create and maintain a hierarchical structure of folders for organizing documents.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Keep your documents structured and accessible with a well-organized folder system.",
        },
        {
          title: "Customizable Categories",
          content:
            "Tailor folder names and categories to align with your organization's specific needs.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Create a personalized document management system that fits your workflow.",
        },
      ],
    },
    {
      title: "Upload Documents",
      content:
        "Securely store and manage important files with seamless document uploads.",
      features: [
        {
          title: "Effortless Upload",
          content:
            "Upload documents of various file types (e.g., PDFs, Word documents, spreadsheets) directly to designated folders.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Quickly and securely upload important files without hassle.",
        },
        {
          title: "Version Control",
          content:
            "Maintain a clear version history to track document changes and updates.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Keep track of edits and revisions to maintain document integrity.",
        },
      ],
    },
    {
      title: "Share Documents",
      content:
        "Easily distribute files with secure and instant document sharing.",
      features: [
        {
          title: "Secure Sharing",
          content:
            "Share documents securely with designated staff members or teams.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Ensure sensitive information is shared only with authorized personnel.",
        },
        {
          title: "Access Permissions",
          content:
            "Customize access permissions to control who can view, edit, or comment on shared documents.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Maintain data security with precise control over document access.",
        },
      ],
    },
    {
      title: "Customize Access Control",
      content:
        "Manage permissions and restrict access to ensure data security and compliance.",
      features: [
        {
          title: "Granular Permissions",
          content:
            "Set precise access levels (e.g., read-only, editing rights) for different users or groups.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Ensure proper security by granting appropriate access to team members.",
        },
        {
          title: "Role-based Access",
          content:
            "Define access based on roles within the organization to ensure data security and confidentiality.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Protect confidential documents with structured role-based permissions.",
        },
      ],
    },
    {
      title: "Staff Training Documents",
      content:
        "Provide essential learning resources to train and upskill your team effectively.",
      features: [
        {
          title: "Central Repository",
          content:
            "Maintain a centralized repository of training materials and resources.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Ensure training materials are always accessible and up-to-date.",
        },
        {
          title: "Easy Access",
          content:
            "Provide staff with convenient access to training documents, manuals, and policies to support ongoing learning and development.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Empower employees with readily available learning resources.",
        },
      ],
    },
  ];

  const title = "Document Management System";
  const tagLine =
    "Empower Your Team with Seamless Document Control: Bizadmin Document Management.";
  const conclusion =
    "Bizadmin's Document Management System empowers organizations to enhance productivity, collaboration, and compliance through efficient handling of documents. From creating structured folders to securely sharing critical information and supporting staff training initiatives, Bizadmin simplifies document management to drive organizational success.";
  const introduction =
    "Efficient document management is essential for every organization, and Bizadmin's Document Management System offers a robust solution tailored to meet your needs. Whether creating folders, uploading documents, sharing information securely, or facilitating staff training, Bizadmin ensures seamless document handling and enhanced collaboration.";
  const content =
    "Securely store, organize, and access all your important files with Bizadmin’s Document Management System, ensuring seamless collaboration, version control, and compliance with ease.";
  const whyChooseUs = [
    "Security: Ensure data security with customizable access controls and secure document sharing capabilities.",
    "Collaboration: Foster collaboration among teams by providing seamless access to shared documents and resources.",
    "Compliance: Facilitate compliance with regulatory requirements by maintaining organized and auditable document management practices.",
  ];

  return (
    <>
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
    </>
  );
}

export default DocumentManagement;
