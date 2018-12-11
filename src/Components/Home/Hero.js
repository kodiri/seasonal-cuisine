import React from "react";
import HeroImage from "./../../img/hero-img.jpg";
import HeroText from "./HeroText";
import DropdownPlaceholder from "./Dropdown/DropdownPlaceholder";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="wrap-hero">
      <div className="wrap-img-text-drop">
        <div className="wrap-image">
          <img src={HeroImage} alt="hero" />
        </div>
        <HeroText />
        <DropdownPlaceholder />
      </div>
    </div>
  );
}
