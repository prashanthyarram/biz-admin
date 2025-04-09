import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./style.css";

const slides = [
  {
    title: "Operations & Compliance Management",
    text: "Streamline daily operations with checklist tracking, temperature recording, and cleaning task automation.",
    image:
      "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
  },
  {
    title: "Inventory & Supplier Management",
    text: "Monitor stock levels, manage suppliers, and track orders efficiently.",
    image:
      "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
  },
  {
    title: "HR & Workforce Management",
    text: "Simplify employee scheduling, timesheets, and HR processes in one place.",
    image:
      "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
  },
  {
    title: "Finance & Documentation Control",
    text: "Manage cash flow, organize important documents, and track financial records seamlessly.",
    image:
      "https://aaria.com.au/aaria/Supplier/images/zh_home_zakya_out_of_stock.jpeg",
  },
];

const FeaturesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="carousel-container">
      {!isMobile && (
        <div className="text-list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`text-item ${index === activeIndex ? "active" : ""}`}
            >
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          ))}
        </div>
      )}

      <div className="carousel">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className="slider-image"
                src={slide.image}
                alt={slide.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
