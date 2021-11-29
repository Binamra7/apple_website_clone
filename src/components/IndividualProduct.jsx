import React from "react";
import "./IndividualProduct.css";

function IndividualProduct(props) {
  return (
    <div className="product-item">
      <div className="product__text">
        <div className="productName">{props.text.name}</div>
        <div className="productDesc">{props.text.info}</div>
        <div className="productLinks">
          <div className="learnMore">
            <a href={props.text.links.learn} target="_blank" rel="noreferrer">
              Learn More &gt;
            </a>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="buy">
            <a href={props.text.links.buy} target="_blank" rel="noreferrer">
              Buy &gt;
            </a>
          </div>
        </div>
      </div>
      <img
        className="product__image"
        alt={`${props.text.name} product pics`}
        src={props.text.productImg}
      />
    </div>
  );
}

export default IndividualProduct;
