import React from "react";
import Header from "./Component/Head/Header";
import "../src/App.css";
import Home from "./Component/Home/Home";
import Skills from "./Component/Skills/Skills";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
