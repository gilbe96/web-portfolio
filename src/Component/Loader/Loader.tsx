import React from "react";
import Loading from "../../assets/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Loading} alt="Loading..." />
    </div>
  );
};

export default Loader;
