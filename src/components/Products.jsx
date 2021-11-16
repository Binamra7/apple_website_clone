import React from "react";
import "./Products.css";
import IndividualProduct from "./IndividualProduct";
import mac from "../images/mac.jpg";
import balls from "../images/balls.jpg";
import airpods from "../images/airpods.jpg";
import watch from "../images/watch.jpg";

function Products() {
  const description = [
    {
      name: "MacBook Pro",
      info: "Supercharged for pros.",
      links: {
        learn: "https://www.apple.com/macbook-pro-14-and-16/",
        buy: "https://www.apple.com/macbook-pro-14-and-16/",
          },
      productImg: mac
    },
    {
      name: "Airpods",
      info: "All new spatial audio.",
      links: {
        learn: "https://www.apple.com/macbook-pro-14-and-16/",
        buy: "https://www.apple.com/macbook-pro-14-and-16/",
        },
        productImg: airpods
    },
    {
      name: "HomePod mini",
      info: "Superloud for pros.",
      links: {
        learn: "https://www.apple.com/macbook-pro-14-and-16/",
        buy: "https://www.apple.com/macbook-pro-14-and-16/",
        },
      productImg: balls
    },
    {
      name: "Watch",
      info: "Introducing out largest display yet.",
      links: {
        learn: "https://www.apple.com/macbook-pro-14-and-16/",
        buy: "https://www.apple.com/macbook-pro-14-and-16/",
        },
      productImg: watch
    },
  ];

  return (
    <div className="products">
      {description.map((information, idx) => (
        <IndividualProduct text={information} key={idx} />
      ))}
    </div>
  );
}

export default Products;
