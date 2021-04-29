import React from "react";
import "./App.css";

/*Components*/

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Products></Products>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
