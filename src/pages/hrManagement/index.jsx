import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import HeroSection from "../../components/heroSection";
import ConclusionSection from "../../components/conclusion";
import CollapsibleList from "../../components/collapsableList";

function HrManagement() {
  const features = [
    {
      title: "Onboarding",
      content:
        "Streamline new employee integration with a smooth and structured onboarding process.",
      features: [
        {
          title: "Simplify New Hires",
          content:
            "Streamline the onboarding process by automating paperwork, training schedules, and necessary documentation, ensuring a smooth transition for new employees.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Ensure a hassle-free onboarding experience by keeping all necessary documents and training materials in one place. Automate repetitive tasks to save time and help new employees integrate seamlessly into the team.",
        },
        {
          title: "Centralized Documentation",
          content:
            "Keep all onboarding materials in one place for easy access and management, ensuring consistency and organization.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Eliminate scattered paperwork and provide a single source of truth for onboarding resources, making it easier for HR teams and new employees to find necessary information.",
        },
      ],
    },
    {
      title: "Leave Management",
      content:
        "Easily track, approve, and manage employee leave requests with efficiency.",
      features: [
        {
          title: "Track and Approve Leave",
          content:
            "Manage employee leave requests with ease. Track leave balances, approve requests, and maintain accurate records.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Simplify leave management with an intuitive system that allows employees to submit requests while enabling managers to track and approve leaves effortlessly.",
        },
        {
          title: "Leave Taken Insights",
          content:
            "Provide employees with visibility into their leave usage history.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Empower employees by giving them clear insights into their leave history, ensuring better planning and transparency in leave tracking.",
        },
      ],
    },
    {
      title: "Payroll Management",
      content:
        "Automate salary processing and ensure accurate, on-time payments for employees.",
      features: [
        {
          title: "Payroll Integration",
          content:
            "Seamlessly integrate payroll with your accounting software for streamlined financial management and reporting.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Eliminate manual payroll processing by linking your payroll system directly with your accounting software, reducing errors and improving efficiency.",
        },
        {
          title: "Comprehensive Reporting",
          content:
            "Generate detailed payroll reports for better financial oversight and compliance.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Gain complete visibility into payroll expenses with in-depth reports that help you stay compliant and make data-driven financial decisions.",
        },
      ],
    },
    {
      title: "Roster Management",
      content:
        "Effortlessly schedule and manage staff shifts for optimal workforce planning.",
      features: [
        {
          title: "Auto-Create Rosters",
          content:
            "Automatically generate rosters based on employee availability and business needs, reducing scheduling conflicts and ensuring optimal staffing levels.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Save time and avoid scheduling headaches with intelligent roster automation that adapts to employee availability and business demands.",
        },
        {
          title: "Task Recording",
          content:
            "Keep detailed records of tasks assigned to each employee, ensuring accountability and clarity.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance workforce transparency by tracking task assignments and progress, ensuring employees stay on top of their responsibilities.",
        },
        {
          title: "Effective Scheduling",
          content:
            "Plan and manage employee work hours to optimize productivity and meet operational requirements.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Maximize efficiency with smart scheduling tools that align employee shifts with business goals, reducing downtime and improving workflow.",
        },
      ],
    },
    {
      title: "Timesheet Management",
      content:
        "Manage permissions and restrict access to ensure data security and compliance.",

      features: [
        {
          title: "Seamless Clock In/Clock Out",
          content:
            "Enable employees to clock in and out effortlessly, ensuring accurate time tracking.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Simplify attendance management with a seamless clock-in/clock-out system, reducing errors and ensuring reliable time tracking.",
        },
        {
          title: "Automatic Timesheet Approvals",
          content:
            "Streamline the approval process with automatic approval features, reducing administrative workload.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Save time and minimize manual approvals by automating timesheet verification, ensuring efficiency and accuracy in payroll processing.",
        },
        {
          title: "Timesheet Rounding",
          content:
            "Ensure consistency and fairness with automatic rounding of timesheet entries.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Maintain uniform time tracking policies with automated timesheet rounding, reducing discrepancies and improving payroll accuracy.",
        },
      ],
    },
    {
      title: "Memo Management",
      content:
        "Create, organize, and share memos to streamline internal communication.",
      features: [
        {
          title: "Effective Communication",
          content:
            "Efficiently communicate with staff by managing memos and announcements through Bizadmin. Keep your team informed and engaged.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Enhance workplace communication by streamlining announcements and memos, ensuring that employees stay informed and aligned with company updates.",
        },
      ],
    },
    {
      title: "Learning and Document Management",
      content:
        "Centralize learning materials and documents for easy access and training.",
      features: [
        {
          title: "Centralized Storage",
          content:
            "Store and manage all HR documents in one secure, centralized location for easy access and organization.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Eliminate scattered paperwork by keeping all HR documents securely stored in one place, ensuring seamless organization and accessibility.",
        },
        {
          title: "Efficient Retrieval",
          content:
            "Quickly retrieve important documents when needed, ensuring compliance and facilitating audits.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Reduce time spent searching for critical documents with an efficient retrieval system that simplifies audits and ensures regulatory compliance.",
        },
        {
          title: "Secure and Compliant",
          content:
            "Ensure all documents are stored securely, maintaining compliance with data protection regulations.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Protect sensitive HR data with robust security measures, ensuring compliance with data protection laws and reducing risks of data breaches.",
        },
        {
          title: "Employee Development",
          content:
            "Facilitate employee development with Bizadmin’s learning management features.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Empower employees with structured learning and development tools that enhance skills and career growth within your organization.",
        },
      ],
    },
    {
      title: "Compliance Management",
      content:
        "Ensure regulatory compliance with structured tracking and documentation.",
      features: [
        {
          title: "Injury Reports",
          content:
            "Maintain records of workplace injuries and ensure compliance with health and safety regulations.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Keep accurate records of workplace injuries to improve safety measures and ensure compliance with industry regulations.",
        },
        {
          title: "Incident Reports",
          content:
            "Document and manage incidents effectively to address issues promptly.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Streamline incident reporting with an organized system that helps you address workplace issues efficiently and prevent future occurrences.",
        },
        {
          title: "Reimbursement",
          content:
            "Handle employee reimbursements efficiently, ensuring timely and accurate processing.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Simplify reimbursement requests with a transparent and efficient process that ensures employees are paid back accurately and on time.",
        },
        {
          title: "Performance Evaluation",
          content:
            "Conduct thorough performance evaluations to assess employee contributions and identify areas for improvement. Set goals, provide feedback, and track progress to foster a culture of continuous development.",
          image:
            "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
          desc: "Boost employee growth with structured performance reviews that align with company objectives, encourage feedback, and drive productivity.",
        },
      ],
    },
  ];

  const title = "Human Resource Management";
  const tagLine = "Empower Your Workforce: Simplify HR with Bizadmin";
  const conclusion =
    "Bizadmin’s Human Resources Management System empowers you to manage your workforce with efficiency and precision. From onboarding new hires to ensuring accurate timesheet management and integrated payroll, our platform provides all the tools you need to create a productive and compliant workplace. Transform your HR operations with Bizadmin and focus on what truly matters—empowering your employees to succeed.";
  const introduction =
    "Bizadmin’s Human Resources Management System is your comprehensive solution for managing every aspect of employee administration. From seamless onboarding to efficient timesheet management, our platform provides the tools you need to ensure a smooth and productive work environment.";
  const content =
    "Optimize workforce management, streamline hiring, and enhance employee engagement with Bizadmin’s Human Resource Management System, ensuring efficiency and compliance in every HR process.";
  const whyChooseUs = [
    "Efficiency: Automate and streamline HR processes to save time and reduce administrative burdens.",
    "Accuracy: Maintain precise record-keeping and reporting across all HR functions.",
    "Integration: Seamlessly integrate payroll with accounting software for comprehensive financial management.",
    "Engagement: Enhance employee satisfaction with seamless onboarding, effective scheduling, and transparent leave management.",
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

export default HrManagement;
