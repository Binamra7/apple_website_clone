import React from "react";
import "./Hero.css";
import HoliLogo from "../images/download.png";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.png";
import Image3 from "../images/Image3.png";

function Hero() {
  return (
    <div className="hero">
      <img className="hoLO" src={HoliLogo} alt="Holiday season logo" />
      <h1 className="hero_text">Let the holidays be for everyone.</h1>
      <h2 className="shop_gift">
        <a href="https://www.apple.com" className="shop_gift_text">
          Shop gifts
        </a>
        &nbsp; &gt;
      </h2>
      <ul className="hero_images">
        <li>
          <img src={Image1} alt="phone images" />
        </li>
        <li>
          <img src={Image2} alt="phone images" />
        </li>
        <li>
          <img src={Image3} alt="phone images" />
        </li>
      </ul>
    </div>
  );
}

export default Hero;
