import React from "react";
import "./NextIphone.css";

import Image14 from "../images/nextIphone.jpg";

function nextIphone() {
  return (
    <div className="nextIphone">
      <div className="description_13">
        <h1 className="iphone13__text">iPhone 13</h1>
        <h3 className="iphone13__text_2">Your new superpower.</h3>
        <h2 className="shop__gift" style={{ backgroundColor: "transparent" }}>
          <a href="https://www.apple.com" className="shop__gift_text">
            Learn More
          </a>
          &nbsp; &gt;
          <a href="https://www.apple.com" className="shop__gift_text">
            Buy
          </a>
          &nbsp; &gt;
        </h2>
      </div>
      <img
        className="iphone13__image"
        src={Image14}
        alt="iphone just 13 product pic"
      />
    </div>
  );
}

export default nextIphone;
