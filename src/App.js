import React, { useState, useEffect } from "react";
import "../src/App.css";
import RingLoader from "react-spinners/RingLoader";
import Header from "./Component/Head/Header";
import Home from "./Component/Home/Home";
import Skills from "./Component/Skills/Skills";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true);
    setTimeout(() => {
      setImagesLoaded(false);
    });
  }, 5000);

  return (
    <>
      {imagesLoaded ? (
        <RingLoader
          className="loader"
          color={"#df7373"}
          loading={imagesLoaded}
          size={150}
        />
      ) : (
        <>
          <Header />
          <Home />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
