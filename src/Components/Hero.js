import React from "react";
import "../Styles/hero/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <p className="h1">San Luis Obispo Olive</p>
        <div className="info">
          <div className="h3">
            <p>
              {" "}
              Established July 1st 2006 and located in the heart of San Luis
              Obispo, We Olive San Luis Obispo sells Certified California Extra
              Virgin Olive Oil and Olive related products including unique and
              thoughtful gifts.
            </p>
            <p>
              To be California Certified Extra Virgin Olive Oil, purveyors must
              submit samples for a lab analysis checking for oleic acid and
              polyphenol counts. The other sample is sent to UC Davis for a
              blind tasting with panel members on the California Olive Oil
              Counsel.{" "}
            </p>
            <p>
              The counsel is tasting to see if their are positive or negative
              defects in the oil. Only oils with positive attributes, oleic acid
              & polyphenol counts within parameters are California Certified
              Extra Virgin.
            </p>
            <p>
              We Olive SLO is one of the oldest olive oil tasting rooms. We
              pride ourselves on having the finest California Certified Olive
              Oils and olive oil related products (tapenade, mustards, salts,
              dipping oils, mind blowing balsamics & locally produced vinegars)
              at a fair price.{" "}
            </p>
            <p>
              We always offer refill pricing on bulk products when bringing your
              previously purchased bottle (clean & dry) back to the store, we
              reward our customers for recycling.
            </p>
          </div>
          <a href="https://placeholder.com">
            <img
              src="https://via.placeholder.com/400"
              alt="Background"
              className="hero-pic"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
