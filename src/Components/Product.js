import React from "react";
import "../Styles/products/product.css";

const Product = () => {
  return (
    <div className="product">
      <a href="https://placeholder.com">
        <img
          src="https://via.placeholder.com/100"
          className="hero-pic"
          alt="placeholder"
        ></img>
      </a>
      <p className="normal-text-bold">Product Name</p>
      <p className="normal-text">Short Description</p>
    </div>
  );
};

export default Product;
