import React from "react";
import "./App.css";

/*Components*/

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Products></Products>
    </div>
  );
};

export default App;
