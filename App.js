import React from "react";
import 'bulma/css/bulma.min.css';

import Navbar from "./Common/Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Experience from "./Experience/Experience";
import Footer from "./Common/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
