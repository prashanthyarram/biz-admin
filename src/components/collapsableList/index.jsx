import { useState, useRef } from "react";
import "./style.css"; // Import the CSS file

const CollapsibleList = ({ items, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(items[0]?.image || "");
  const imageRef = useRef(null);

  const toggleItem = (index, image) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSelectedImage(image);
    setTimeout(() => {
      imageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  };

  return (
    <div className="container">
      {/* Left Section (Collapsible List) */}
      <div className="left-section">
        <h4 className="head-text">{title}</h4>
        <ul className="list-container">
          {items.map((item, index) => (
            <li
              key={index}
              className={`${
                index != items.length - 1 ? "list-item" : "last-list-item"
              } ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleItem(index, item.image)}
            >
              <div className="title">
                {item.title}
                <span
                  className={`arrow ${activeIndex === index ? "open" : ""}`}
                >
                  &#9662;
                </span>
              </div>
              <div
                className="content"
                style={{
                  maxHeight: activeIndex === index ? "100px" : "0",
                  padding: activeIndex === index ? "10px" : "0",
                }}
              >
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Dynamic Image) */}
      <div className="right-section">
        <img
          ref={imageRef}
          src={selectedImage}
          alt="Feature"
          className="feature-image"
        />
      </div>
    </div>
  );
};

export default CollapsibleList;
