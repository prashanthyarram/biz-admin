import { useState, useRef } from "react";
import "./style.css";

const Part1 = ({ title, items, activeIndex, toggleItem, desc = "" }) => {
  return (
    <div className="left-section">
      <h4 className="head-text">{title}</h4>

      <div
        className="content"
        style={{ marginLeft: "0px", fontSize: "0.9rem" }}
      >
        <p className="dropdown-desc">{desc}</p>
      </div>

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
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
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
  );
};

const Part2 = ({ image, imageRef }) => {
  return (
    <div className="right-section">
      <img ref={imageRef} src={image} alt="Feature" className="feature-image" />
    </div>
  );
};

const CollapsibleList = ({ items, title, orientation = "left", desc = "" }) => {
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
    <div
      className={`container ${orientation !== "left" ? "blue-background" : ""}`}
    >
      {orientation === "left" ? (
        <>
          <Part1
            title={title}
            items={items}
            activeIndex={activeIndex}
            toggleItem={toggleItem}
            desc={desc}
          />
          <Part2 image={selectedImage} imageRef={imageRef} />
        </>
      ) : (
        <>
          <Part2 image={selectedImage} imageRef={imageRef} />
          <Part1
            desc={desc}
            title={title}
            items={items}
            activeIndex={activeIndex}
            toggleItem={toggleItem}
          />
        </>
      )}
    </div>
  );
};

export default CollapsibleList;
