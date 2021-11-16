import React from "react";
import "./Iphone13.css";

import Image13 from "../images/iphone13.jpg";

function Iphone13() {
  return (
    <div className="iphone13">
      <h1 className="iphone13_text">iPhone 13 Pro</h1>
      <h3 className="iphone13_text_2">Oh. So. Pro.</h3>
      <h2 className="shop_gift">
        <a href="https://www.apple.com" className="shop_gift_text">
          Learn More
        </a>
        &nbsp; &gt;
        <a href="https://www.apple.com" className="shop_gift_text">
          Buy
        </a>
        &nbsp; &gt;
      </h2>
      <img className="iphone13_image" src={Image13} alt="iPhone 13 image" />
    </div>
  );
}

export default Iphone13;
