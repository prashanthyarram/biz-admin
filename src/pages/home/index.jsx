import React from "react";
import "./style.css";
import laptopScreen from "../../../public/laptop-screen.png";
import laptopBase from "../../../public/laptop-base.webp";
import FeatureDisplay from "../../components/featureDisplay";
import ConclusionSection from "../../components/conclusion";
import HomeHeroSection from "../../components/homeHero";
import FeaturesCarousel from "../../components/featureCarousel";
import FeaturesSection from "../../components/featureSection";

function Home() {
  return (
    <div className="noise-bg-section">
      <HomeHeroSection />

      <div className="blue-background head-sec">
        <div className="header">
          <p className="title-head">BizadminPOS</p>
          <h1 className="title-tagline">
            Unlock the future of cafe management
          </h1>
          <p className="title-desc">
            Redefine cafe management with Bizadmin POS—where seamless operations
            meet unforgettable customer experiences
          </p>
        </div>

        <div style={{ transform: "translateY(30px)", maxWidth: "1680px" }}>
          <img
            style={{ transform: "translateY(24px)" }}
            className="screen"
            src={laptopScreen}
          />
          <img className="laptop" src={laptopBase} />
        </div>
      </div>

      <div className="feature-carousal-head-sec">
        <h2 className="feature-head">
          Discover what BizadminPOS can do to your store.
        </h2>
        <p>
          Simplify business management with BizadminPOS. Track orders, manage
          inventory, and handle operations seamlessly—all in one place!
        </p>

        <FeaturesCarousel />
      </div>

      <div className="noise-bg-section">
        <div className="feature-cards-head-sec">
          <h2 className="feature-head">
            Everything you need to build a great business.
          </h2>
          <p>
            Manage your business effortlessly with BizadminPOS. From orders to
            inventory, HR, and cash flow—streamline every aspect of your
            business with ease.
          </p>

          <div className="feature-cards">
            <FeaturesSection />
          </div>
        </div>
      </div>

      <div>
        <div className="grid-container">
          <div className="grid-item blue-background first-grid-item">
            <div className="home-grid-list">
              <span className="whiteText">The</span>
              <span className="goldenText">BizadminPOS</span>
              <span className="whiteText">Experience</span>
            </div>
          </div>

          <div className="grid-item white-background">
            <div className="grid-list-item">
              <h2>Receive support when you need it</h2>
              <p>
                Simplify your supply chain management today with Bizadmin and
                focus on delivering exceptional products and services to your
                customers.
              </p>
            </div>
          </div>

          <div className="grid-item white-bg">
            <div className="grid-list-item">
              <h2>Receive support when you need it</h2>
              <p>
                Simplify your supply chain management today with Bizadmin and
                focus on delivering exceptional products and services to your
                customers.
              </p>
            </div>
          </div>

          <div className="grid-item blue-background">
            <div className="grid-list-item">
              <h2>It's easy (and free) to get started</h2>
              <p>
                Get started without any learning curve. Our early customers can
                vouch for BizadminPOS being extremely simple to use. We're proud
                to offer a solution that can help you get started from day one.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ConclusionSection
        text={
          "Your business deserves the best. Don’t miss out—reach out today!"
        }
      />
    </div>
  );
}

export default Home;
