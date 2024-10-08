import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import homePicture from "../../assets/home-picture.jpeg";
import pdf from "../../assets/CV-Gilberto A.pdf";
import { StyledHome } from "./StyledHome";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledHome className="container top">
      <div className="left top" data-aos="fade-right" data-aos-duration="1500">
        <h1>
          Hi, I'm <span>Gilberto A. Acosta Soto</span>
        </h1>
        <h2>
          <span>
            <Typewriter
              words={[
                "Web Developer",
                "Full Stack Programmer",
                "Web Designer",
                "Programming Fanatic",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p>
          I'm an applied software developer. I really enjoy to study
          technologies in the field of web development, keeping me updated on
          this topic.
        </p>
        <div className="hero_btn">
          <div className="col_1">
            <h4>FIND WITH ME</h4>
            <div className="button">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gilbealejandro1996@gmail.com">
                <AiOutlineMail className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/gilberto-alejandro-acosta-soto-b25440237">
                <FaLinkedinIn className="icon" />
              </a>
              <a href="https://github.com/gilbe96">
                <AiOutlineGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="col_1">
            <h4>DOWNLOAD CV</h4>
            <div className="button">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Gilberto.pdf"
              >
                <FaFileDownload className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right" data-aos="fade-left" data-aos-duration="1500">
        <div className="right_img">
          <img src={homePicture} alt="" />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
