import React from "react";
import "./App.css";

/*Components*/

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default App;
