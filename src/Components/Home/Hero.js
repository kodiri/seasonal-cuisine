import React from "react";
import HeroImage from "./../../img/hero-img.jpg";
import HeroText from "./HeroText";
import "./Hero.css";

export default function Routes() {
  return (
    <div className="wrap-hero">
      <div className="wrap-image">
        <img src={HeroImage} alt="hero" />
      </div>
      <HeroText />
    </div>
  );
}
