import React from "react";
import "../Styles/products/products.css";
import Img1 from "../Images/stuffed-olives.jpg";
import Img2 from "../Images/Italian-glass-stackables.jpg";
import Img3 from "../Images/bulk-oil.jpg";

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
            desc="stuffed olives:"
            name="Stuffed Olives"
            productdesc="
          At SLO Olive  we have a variety of stuffed olives from throughout California locally grown and produced in the Central Coast & Central Valley."
            isList="We carry the following "
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

          <Product
            img={Img2}
            name="Italian Glass Stackable's"
            productdesc="Our gift section proudly presents SLO OLIVES stackable gift set. The item above is our number one selling combination our 17 year old balsamic & our organic California Meyer Lemon Olive Oil"
          />
          <Product
            img={Img3}
            name="Bulk California Certified Extra Virgin Olive Oil & Aged Balsamics"
            productdesc="SLO OLIVE's most popular products are our Amazing Bulk California Certified Extra Virgin Olive Oil & Our Aged Balsamic's. The best part is you can bring your clean & dry bottle back for a refill savings of 28%"
          />
          <Product
            name="SLO OLIVE AGED BALSAMIC "
            productdesc="Characteristics: Bright, full dark brown color. Free-flowing yet dense. Typical, smooth, penetrating lingering aromatic bouquet with noticeable attractive acidic undertones. An unmistakable well-balanced sweet-and-sour flavor with definite notes of vinegar, lively, sincere, complete, velvety, intense and lingering, meeting typical characteristics.
          Raw Materials: Musts of traditional Modena grape varieties, mainly Trebbiano, different varieties of Lambrusco, Spergola and Berzemino, with no additives.
          Production: Cooking in open vats, natural fermentation and aecitification of the cooked must, subsequent transfers between barrels and slow aging under the producer’s watchful eye.
          "
          />
          <Product
            name="SLO OLIVE MEYER LEMON OLIVE OIL"
            productdesc="Cold Crushed California Olive Oil. We take ripe Meyer Lemons and mill with just picked Arbosana Olives for a delicious sweet oil. Use on salads, steamed vegetables even make baked lemon bars with this flavorful and versatile oil. Certified California Fresh.
          "
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
