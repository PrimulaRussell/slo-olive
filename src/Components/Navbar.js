import React from "react";
import "../Styles/navbar/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const menuVis = menuOpen ? "show" : " ";

  return (
    <div className="navbar">
      <div className="logo">
        <p className="h1">SLO Olive</p>
        <svg
          width="74"
          height="68"
          viewBox="0 0 74 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7611 18.3481C26.0368 22.5638 21.4225 24.8662 15.7022 27.345C17.6056 22.9864 19.9517 18.923 23.1902 15.4443C26.9071 11.4536 31.8555 8.17678 38.7477 6.02477C37.5139 10.7341 34.7372 14.8007 30.7611 18.3481ZM49.4495 34.5457C44.7906 32.4341 40.6021 28.8758 36.6149 24.674C42.7443 23.9668 48.3696 24.2263 53.269 25.8099C58.3668 27.4575 62.7368 30.5772 66.1409 35.5859C59.724 37.3869 54.2824 36.7363 49.4495 34.5457ZM29.7663 67.1435C37.3987 67.0191 40.1805 57.4381 40.0885 51.7906C40.0025 46.5192 37.5253 38.385 31.0847 36.9639C30.4274 33.2174 29.1348 29.9935 26.0243 27.3589C28.0179 26.6769 30.0297 26.05 32.0598 25.4823C36.7923 30.699 41.8187 35.2126 47.6586 37.8595C56.3075 41.7793 63.3386 40.6376 71.9412 37.564C67.7593 30.3488 63.3743 25.1567 54.6179 22.3277C49.4086 20.6436 38.7006 19.9243 33.1917 21.3251C40.3405 15.0354 42.5219 9.79309 43.6243 0.90882C34.0579 3.25228 26.7893 5.90549 20.1354 13.0505C15.6033 17.9179 12.7175 23.6839 10.4189 29.781C7.52992 31.1945 4.67446 32.7236 1.85536 34.363L4.00599 37.4818C6.95349 35.7677 10.6188 33.6498 13.8042 32.3952C13.0588 33.9322 12.6101 35.5646 12.3477 37.2244C5.94654 38.8443 3.73304 47.0668 3.81898 52.3395C3.91106 57.9883 7.00219 67.4723 14.6361 67.3478C16.6561 67.3149 18.5038 66.5151 20.0613 65.1405C17.1376 61.5102 15.8539 56.62 15.7816 52.1867C15.709 47.7323 16.8424 42.7804 19.6749 39.0483C18.7259 38.2571 17.6443 37.6384 16.4144 37.2849C17.1043 33.5824 18.672 31.3284 21.9317 29.064C25.1644 31.2411 26.3556 33.6402 27.0292 37.1475C20.9571 39.0736 18.8646 46.9469 18.9492 52.1351C19.0427 57.7813 22.1353 67.2678 29.7663 67.1435Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="72"
                height="66"
                fill="white"
                transform="translate(0.333618 1.61444) rotate(-0.933796)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={`menubtn ${menuVis}`} onClick={openMenu}>
        <div className="menubtn-burger"></div>
      </div>
      <div className="navlinks">
        <a href="#about">
          <p className="h3">About Us</p>
        </a>
        <a href="#products">
          <p className="h3 productBtn">Our Products</p>
        </a>
        <a href="#contact">
          <p className="h3 contactBtn">Contact Us</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
