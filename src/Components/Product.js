import React from "react";
import "../Styles/products/product.css";

const Product = (props) => {
  return (
    <div className="product" id="products">
      <img src={props.img} className="product-pic" alt={props.desc}></img>
      <p className="normal-text-bold">{props.name}</p>
      <p className="normal-text">{props.productdesc}</p>
      <p className="normal-text-bold">
        {props.isList} {props.desc}
      </p>
      <p className="normal-text"> {props.productlist}</p>
    </div>
  );
};

export default Product;
