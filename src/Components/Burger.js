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
        <a href="#about">About Us</a>
        <a href="#products">Our Products</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Burger;
