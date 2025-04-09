import React from "react";
import { useRef, useEffect } from "react";
import CollapsibleList from "../../components/collapsableList";
import "./style.css";
import GridList from "../../components/gridList";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";

function Checklist() {
  const features = [
    {
      title: "📌 Task Breakdown & Management",
      content:
        "Set priorities and deadlines to ensure tasks are completed on time, keeping your workflow efficient.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "🎯 Prioritization & Deadlines",
      content:
        "Set priorities and deadlines to ensure tasks are completed on time, keeping your workflow efficient.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "📸 Work Review & Tracking",
      content:
        "Attach screenshots of completed tasks for supervisors to review and provide feedback.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "📊 Progress Monitoring",
      content:
        "Track your progress with visual indicators, making it easier to see what’s completed and what’s pending.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "✅ Task Completion & Assignment",
      content:
        "Mark tasks as completed and assign tasks to team members while monitoring their progress.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "🔔 Notifications & Reminders",
      content:
        "Stay on top of your schedule with timely notifications and reminders for upcoming tasks.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
    },
    {
      title: "🗓️ Task Scheduling & Checklists",
      content:
        "Plan ahead by scheduling future tasks and creating daily, weekly, and monthly checklists for seamless task management.",
      image:
        "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum explicabo, placeat, quod suscipit eius fuga sapiente commodi doloribus eum, quasi debitis! Eligendi id laudantium adipisci cumque, sint quo libero molestiae architecto facilis esse veniam repellat optio deserunt? Ipsa in ratione aliquid nostrum sequi tempora ipsam earum expedita magnam veniam.",
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
          <p className="title-head">Ultimate Checklist Management</p>
          <h1 className="title-tagline">Organize. Prioritize. Achieve.</h1>
          <p className="title-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab
            architecto tempora, sequi, sapiente quo reprehenderit excepturi,
            esse ut maiores est hic eaque aperiam ullam.
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

        <CollapsibleList items={features} title={"How We Help You Succeed"} />
      </div>

      <div>
        <GridList />
      </div>
    </div>
  );
}

export default Checklist;
