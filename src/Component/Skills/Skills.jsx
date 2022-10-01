import React from "react";
import skill1 from "../../assets/skills/1.png";
import skill2 from "../../assets/skills/2.png";
import skill3 from "../../assets/skills/3.png";
import skill4 from "../../assets/skills/4.png";
import skill5 from "../../assets/skills/5.png";
import skill6 from "../../assets/skills/6.png";
import skill7 from "../../assets/skills/7.png";
import skill8 from "../../assets/skills/8.png";
import skill9 from "../../assets/skills/9.png";
import skill10 from "../../assets/skills/10.png";
import skill11 from "../../assets/skills/11.png";
import skill12 from "../../assets/skills/12.png";
import skill13 from "../../assets/skills/13.png";
import { StyledSkills } from "./StyledSkills";

function Skills() {
  return (
    <StyledSkills className="container" id="skills">
      <h2 className="title-section">SKILLS</h2>
      <div className="images">
        <div className="content-img">
          <img src={skill10} alt="" />
          <p>React</p>
        </div>
        <div className="content-img">
          <img src={skill11} alt="" />
          <p className="title-m-up">TypeScript</p>
        </div>
        <div className="content-img">
          <img src={skill2} alt="" />
          <p>Material UI</p>
        </div>
        <div className="content-img">
          <img src={skill3} alt="" />
          <p>Node</p>
        </div>
        <div className="content-img">
          <img src={skill1} alt="" />
          <p>Git</p>
        </div>
        <div className="content-img">
          <img src={skill7} alt="" />
          <p>Laravel</p>
        </div>
        <div className="content-img">
          <img src={skill8} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="content-img">
          <img src={skill9} alt="" />
          <p>Chakra UI</p>
        </div>
        <div className="content-img">
          <img src={skill6} alt="" />
          <p>Mongo DB</p>
        </div>
        <div className="content-img">
          <img src={skill5} alt="" />
          <p>MySQL</p>
        </div>
        <div className="content-img">
          <img src={skill12} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div className="content-img">
          <img src={skill13} alt="" />
          <p>Sequelize</p>
        </div>
        <div className="content-img">
          <img src={skill4} alt="" />
          <p className="title-up">Styled</p>
          <p>Components</p>
        </div>
      </div>
    </StyledSkills>
  );
}

export default Skills;
