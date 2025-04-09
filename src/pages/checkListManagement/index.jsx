import React from "react";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import ConclusionSection from "../../components/conclusion";
import HeroSection from "../../components/heroSection";
import FeatureDisplay from "../../components/featureDisplay";
import CollapsibleList from "../../components/collapsableList";

function CheckListManagement() {
  const features = [
    {
      title: "Task Breakdown & Management",
      content:
        "Set priorities and deadlines to ensure tasks are completed on time, keeping your workflow efficient.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "Prioritization & Deadlines",
      content:
        "Set priorities and deadlines to ensure tasks are completed on time, keeping your workflow efficient.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "Work Review & Tracking",
      content:
        "Attach screenshots of completed tasks for supervisors to review and provide feedback.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "Progress Monitoring",
      content:
        "Track your progress with visual indicators, making it easier to see what’s completed and what’s pending.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "Task Completion & Assignment",
      content:
        "Mark tasks as completed and assign tasks to team members while monitoring their progress.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "Notifications & Reminders",
      content:
        "Stay on top of your schedule with timely notifications and reminders for upcoming tasks.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "Task Scheduling & Checklists",
      content:
        "Plan ahead by scheduling future tasks and creating daily, weekly, and monthly checklists for seamless task management.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
  ];

  const title = "Complete check list management";
  const tagLine = "Organize. Prioritize. Achieve";
  const conclusion =
    "Streamline your daily operations, track progress effortlessly, and ensure every task is completed on time with Bizadmin’s powerful Checklist Management system.";
  const introduction =
    "In today's fast-paced business world, staying organized and on top of your tasks is essential for success. Introducing the ultimate checklist system designed to help businesses streamline their operations, boost productivity, and achieve their goals with ease. Whether you're a small business owner, a manager, or part of a large enterprise, Bizadmin is here to transform the way you work.";
  const content =
    " Streamline your daily operations, track progress effortlessly, and ensure every task is completed on time with Bizadmin’s powerful Checklist Management system.";
  const whyChooseUs = [
    "Focus on what matters most",
    "Reduce time spent on trivial tasks and improve efficiency",
    "Avoid missing deadlines",
    "Foster better communication and collaboration within your team",
    "Delegate tasks effectively and ensure accountability.",
    "Simplify your workflow and reduce the overwhelm of managing multiple tasks",
    "Gain peace of mind knowing you have a reliable system in place.",
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

        <CollapsibleList
          desc="Streamline tasks with smart checklists to ensure efficiency and compliance."
          items={features}
          title={title}
        />
      </div>

      <GridList whyChooseUs={whyChooseUs} title={title} />

      <ConclusionSection text={conclusion} />
    </div>
  );
}

export default CheckListManagement;
