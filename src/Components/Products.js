import React from "react";
import "../Styles/products/products.css";
import Img1 from "../Images/stuffed-olives.jpg";

/*Component import*/
import Product from "./Product";
const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <p className="h1">Products</p>
        <div className="product-grid">
          <Product
            img={Img1}
            desc="stuffed olives"
            name="Stuffed Olives"
            productdesc="
          At SLO Olive  we have a variety of stuffed olives from throughout California locally grown and produced in the Central Coast & Central Valley."
            productlist="
          Bleu Cheese,
          Zesty Lemon,
          Feta Cheese,
          Pepper Jack Cheese,
          Garlic & Jalapeño,
          Smoked Almond,
          Martini,
          Anchovy,
          Jalapeño,
          Onion,
          Habanero"
          ></Product>
        </div>
      </div>
    </div>
  );
};

export default Products;
