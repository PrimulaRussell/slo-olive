import React from "react";
import { useState } from "react";
import "../Styles/navbar/burger.css";

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const menuVis = menuOpen ? "show" : "hide";

  return (
    <div>
      <div className={`menubtn ${menuVis}`} onClick={openMenu}>
        <div className="menubtn-burger"></div>
      </div>
      <div className={`menulist ${menuVis}`}>
        <a href="#about" className="aboutlink">
          About Us
        </a>
        <a href="#products" className="productlink">
          Our Products
        </a>
        <a href="#contact" className="contactlink">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Burger;
