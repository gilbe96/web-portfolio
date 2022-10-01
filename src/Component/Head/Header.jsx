import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { StyledHeader } from "./StyledHeader";

function Header() {
  // when scroll header at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // toggle menu
  const [mobile, setMobile] = useState(false);

  return (
    <StyledHeader id="home">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navlink">
            <ul
              className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {mobile ? (
              <button
                className="toggle close-btn"
                onClick={() => setMobile(!mobile)}
              >
                <AiOutlineClose className="close" />
              </button>
            ) : (
              <button
                className="toggle open-btn"
                onClick={() => setMobile(!mobile)}
              >
                <HiOutlineMenu className="open" />
              </button>
            )}
          </div>
        </div>
      </header>
    </StyledHeader>
  );
}

export default Header;
