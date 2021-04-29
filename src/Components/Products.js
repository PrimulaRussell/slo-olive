import React from "react";
import "../Styles/products/products.css";

/*Component import*/
import Product from "./Product";
const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <p className="h1">Products</p>
        <div className="product-grid">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default Products;
